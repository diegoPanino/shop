import axios from '@api/axios.js'
import {useDispatch} from 'react-redux'
import {cleanAuth} from '@features/auth/authSlice.js'

export default function useLogout(){
	const dispatch = useDispatch()

	const logout = async () => {
		dispatch(cleanAuth({}))
		try{
			await axios.delete('/logout',{withCredentials: true})
		 }
		 catch(err){
		 	console.log(err)
		 }
	}
	return logout
}