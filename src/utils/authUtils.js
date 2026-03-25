import { jwtDecode } from 'jwt-decode';
import { getData, removeItem, clearData } from './localStorageHandler'

export const isAuthenticated = () => {
    const accessToken = getData('accessToken')
    
    // If no token exists, user is not authenticated
    if (!accessToken) {
        return false
    }

    try {
        const tokenData = parseJWT(accessToken)
        const currentTime = Date.now() / 1000
        
        // Check if token is expired
        if (tokenData.exp <= currentTime) {
            // Token expired, clean up and return false
            logout()
            return false
        }
        
        return true
    } catch (error) {
        // Invalid token, clean up and return false
        console.error('Invalid token:', error)
        logout()
        return false
    }
}

export const logout = () => {
    // Clear all authentication data
    removeItem('accessToken')
    removeItem('refreshToken')
    removeItem('user')
    // You can add other auth-related keys here if needed
}

export const parseJWT = (token) => {
    try {
        const decoded = jwtDecode(token)
        return decoded
    } catch (error) {
        console.error('Error parsing JWT:', error)
        throw error
    }
}

export const getTokenExpirationTime = () => {
    const accessToken = getData('accessToken')
    if (!accessToken) return null
    
    try {
        const tokenData = parseJWT(accessToken)
        return new Date(tokenData.exp * 1000)
    } catch (error) {
        return null
    }
} 