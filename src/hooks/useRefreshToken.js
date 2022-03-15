import axios from '@api/axios.js'
import {useDispatch} from 'react-redux'
import {setAuth} from '@features/auth/authSlice.js'

const useRefreshToken = () => {
	const dispatch = useDispatch()

	const refresh = async () =>{
		const response = await axios.get('/refresh',{
			withCredentials:true
		})
		dispatch(setAuth({user:response.data.user,a:response.data.a}))
        return response.data.accessToken;
    }
    return refresh;
};
export default useRefreshToken