import axios from '@api/axios.js'

export default async function signUp(data){
	const {username,email,psw} = data
	try {
		await axios.post('/signup',
			JSON.stringify({username,email,psw}),
			{
				headers:{'Content-Type':'application/json'},
				withCredentials:true
			}
		)
		return {status:true}
	}
	catch(err){
		return {data:err.response.data,status:false}
	}
}