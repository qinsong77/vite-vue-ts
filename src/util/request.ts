import axios from 'axios'
import { Toast } from 'vant'
import router from '../router'
const instance = axios.create({
    baseURL: '/api',
    timeout: 5000 // request timeout
})
// 发起请求之前的拦截器
instance.interceptors.request.use(
    config => {
        // 如果有token 就携带token
        const token = window.localStorage.getItem('accessToken')
        if (token) {
            config.headers.common.Authorization = token
        }
        return config
    },
    error => Promise.reject(error)
)
// 响应拦截器
instance.interceptors.response.use(
    response => {
        if (response.status === 403) {
            Toast('登录过期，请重新登录！')
            router.push({
                name: 'login'
            })
            return Promise.reject(response)
        }
        
        const res = response.data
        
        if (response.status !== 200) {
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    error => {
        return Promise.reject(error)
    }
)
export default instance
