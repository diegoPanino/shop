import axios from '@api/axios.js'

export default async function signUp(data){
	const {username,email,psw} = data
	try {
		const response = await axios.post('/signup',
			JSON.stringify({username,email,psw}),
			{
				headers:{'Content-Type':'application/json'},
				withCredentials:true
			}
		)
		console.log(response)
		return response.data
	}
	catch(err){
		return {data:err.response.data,status:false}
	}
}