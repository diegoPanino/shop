const axios = require('axios')
const server = 'http://localhost:3001'
const auth = 'http://localhost:4001'

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