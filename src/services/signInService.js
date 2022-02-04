import {auth} from '@constant/const.js'

const axios = require('axios')

export default function logIn(data){
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