import axios from '@api/axios.js'
import useAuth from '@hooks/useAuth.js'

export default function useLogout(){
	const {setAuth} = useAuth()

	const logout = async () => {
		setAuth({})
		try{
			await axios.delete('/logout',{withCredentials: true})
		 }
		 catch(err){
		 	console.log(err)
		 }
	}
	return logout
}