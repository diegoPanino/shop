const axios = require('axios')
const url = 'http://localhost:3001'

export function signUp(data){
	const options = {
		url:url+'/signup',
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