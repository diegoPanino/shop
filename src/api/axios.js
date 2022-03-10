import axios from 'axios'

const AUTH_URL = 'http://localhost:4001'

export default axios.create({
	baseURL:AUTH_URL
})

export const axiosPrivate = axios.create({
	baseUrl:AUTH_URL,
	headers:{'Content-Type':'application/json'},
	withCredentials:true	
})