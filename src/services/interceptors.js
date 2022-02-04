import {auth} from '@constant/const.js'
import {getA,getR,setA} from '@helper/localStorage.js'

const axios = require('axios')

const axiosInstance = axios.create({headers: {'Content-Type': 'application/json;charset=UTF-8'}})

function refreshToken(){
	const r = getR()
	return axiosInstance.post(`${auth}/token`,'',{headers:{'x-refresh':r}})
}

axiosInstance.interceptors.request.use(
	config=>{
		const a = getA()
		if(a) config.headers['Authorization'] = a
		return config
	},
	error=>{
		console.log('interceptor request',error.name)
		return Promise.reject(error)
	})

axiosInstance.interceptors.response.use(
	response => {
		return response
	},
	async error =>{
		const originalReq = error.config
		if(error.response.data.name.includes('Expired') && !originalReq._retry){
			originalReq._retry = true
			const res = await refreshToken()
			const a = res.data.accessToken
			setA(a)		
			return axiosInstance.request(originalReq)
		}
		return Promise.reject(error)
	})

export default axiosInstance