import * as help from '../helper/helper.js'

const axios = require('axios')
const server = 'http://localhost:3001'
const auth = 'http://localhost:4001'
const axiosInstance = axios.create({headers: {'Content-Type': 'application/json;charset=UTF-8'}})

axiosInstance.interceptors.request.use(
	config=>{
		const a = help.getA()
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
			help.setA(a)		
			return axiosInstance.request(originalReq)
		}
		return Promise.reject(error)
	})

function refreshToken(){
	const r = help.getR()
	return axiosInstance.post(`${auth}/token`,'',{headers:{'x-refresh':r}})
}

export function signUp(data){
	const options = {
		url:auth+'/signup',
		method:'POST',
		headers: {
			'Content-Type': 'application/json;charset=UTF-8'
		},
		data:{
			username:data.username,
			email:data.email,
			psw:data.psw
		}
	}
	return axios(options)
		.then(res => {
			return {data:res.data,status:true}
		})
		.catch(err => {
			return {data:err.response.data.error,status:false}
		})
}

export function logIn(data){
	const options = {
		url:auth+'/login',
		method:'POST',
		headers:{
			'Content-Type': 'application/json;charset=UTF-8'
		},
		data:{
			email:data.email,
			psw:data.psw
		}
	}
	return axios(options)
		.then(res=>{
			const {a,r} = res.data
			return {data:{a,r},status:true}
		})
		.catch(err=>{
			return {data:err.response.data,status:false}
		})
}

export function logout(){
	const r = help.getR()
	return axiosInstance.delete(`${auth}/logout`,{headers:{'x-refresh':r}})
	.then(data => {
		help.removeA()
		help.removeR()

		return Promise.resolve(data)
	})
	.catch(err => {
		console.log('err',err)
		return Promise.reject(err)
	})
}

export async function reqAuth(){
	return axiosInstance.get(`${server}/user`)
	
	/*return axiosInstance.get(`${server}/user`)
	.then(data => {
		return data
	})
	.catch(err => {
		return Promise.reject(err)
	})*/
}

