import axios from '@api/axios.js'

export default async function logIn(data){
	const {email,psw} = data
	try{
		const response = await axios.post('/login',
			JSON.stringify({email,psw}),
			{
				headers:{'Content-Type':'application/json'},
				withCredentials:true
			}
		)
		return response.data
	}
	catch(err){
		return {data:err.response.data,status:false}
	}
}