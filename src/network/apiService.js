import { toast } from 'react-toastify'
import { removeItem } from '../utils/localStorageHandler'
import http from './httpService'


export const getPublic = async (url, config = {}) => {
    try {
        const response = await http.get(url, { ...config, withAuth: false })
        return response.data
    } catch (error) {
        handleError(error)
    }
}

export const getProtected = async (url, config = {}) => {
    try {
        const response = await http.get(url, { ...config, withAuth: true })
        return response.data
    } catch (error) {
        handleError(error)
    }
}

export const postPublic = async (url, data, config = {}) => {
    try {
        const response = await http.post(url, data, { ...config, withAuth: false })
        return response.data
    } catch (error) {
        handleError(error)
    }
}

export const postProtected = async (url, data, config = {}) => {
    try {
        const response = await http.post(url, data, { ...config, withAuth: true })
        return response.data
    } catch (error) {
        handleError(error)
    }
}

export const postProtectedBlob = async (url, data, config = {}) => {
    try {
        const response = await http.post(url, data, { ...config, withAuth: true, responseType: 'blob' })
        return response.data
    } catch (error) {
        handleError(error)
    }
}

export const patchProtected = async (url, data, config = {}) => {
    try {
        const response = await http.patch(url, data, { ...config, withAuth: true })
        return response.data
    } catch (error) {
        handleError(error)
    }
}

export const putProtected = async (url, data, config = {}) => {
    try {
        const response = await http.put(url, data, { ...config, withAuth: true })
        return response.data
    } catch (error) {
        handleError(error)
    }
}

export const deleteProtected = async (url, data = null, config = {}) => {
    try {
        const deleteConfig = { ...config, withAuth: true }
        if (data) {
            deleteConfig.data = data
        }
        const response = await http.delete(url, deleteConfig)
        return response.data
    } catch (error) {
        handleError(error)
    }
}

const handleError = (error) => {
    if (error.response) {
        if (error.response.data.code === "token_not_valid") {
            const msgArr = (error.response && error.response.data && Array.isArray(error.response.data.message)) ? error.response.data.message : []
            const firstMsgObj = msgArr.length > 0 ? msgArr[0] : null
            const message = firstMsgObj && firstMsgObj.message
            if (message) {
                toast.error(message)
            }
            removeItem('accessToken')
            window.dispatchEvent(new Event("localStorageChanged"));
        }
        const status = error.response.status
        // 4xx is usually validation/auth — callers show messages; avoid console.error noise in dev
        if (status >= 500) {
            console.error('API Error: ', status, error.response.data)
        }
    } else {
        console.error('Network Error: ', error.message)
    }
    throw error
}


