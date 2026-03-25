import axios from 'axios'
import { API_BASE_URL } from '../constants/apiBaseUrl'
import { getData, removeItem } from '../utils/localStorageHandler'

// Creating axios instance
const http = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

// Optionally add token dynamically if needed
const attachAuthToken = (config) => {
    const token = getData('accessToken')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}

// Request Interceptor
http.interceptors.request.use(
    (config) => {
        // If data is FormData, remove Content-Type header to let browser set it with boundary
        if (config.data instanceof FormData) {
            delete config.headers['Content-Type']
        }
        
        if (config.withAuth) {
            return attachAuthToken(config)
        }
        return config
    },
    (error) => Promise.reject(error)
)

// Response Interceptor
http.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle expired/invalid token globally
        const status = error?.response?.status
        const code = error?.response?.data?.code

        if (status === 401 || code === 'token_not_valid') {
            // Prevent multiple rapid redirects
            if (!window.__AUTH_REDIRECTING__) {
                window.__AUTH_REDIRECTING__ = true

                // Clear auth-related storage
                removeItem('accessToken')
                removeItem('refreshToken')
                removeItem('user')
                window.dispatchEvent(new Event('localStorageChanged'))

                // Redirect to landing page
                try {
                    if (window.location.pathname !== '/') {
                        window.location.replace('/')
                    }
                } finally {
                    // allow future redirects after a brief delay
                    setTimeout(() => { window.__AUTH_REDIRECTING__ = false }, 1000)
                }
            }
        }

        return Promise.reject(error)
    }
)

export default http