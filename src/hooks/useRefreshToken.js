import axios from '@api/axios.js'
import useAuth from './useAuth.js'

const useRefreshToken = () => {
	const {setAuth} = useAuth()

	const refresh = async () =>{
		const response = await axios.get('/refresh',{
			withCredentials:true
		})
	}
	setAuth(prev =>{
		return {
			...prev,
			a:response.data.a
		}
	})
	return refresh
}
export default useRefreshToken