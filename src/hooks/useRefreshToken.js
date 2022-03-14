import axios from '@api/axios.js'
import useAuth from './useAuth.js'

const useRefreshToken = () => {
	const {setAuth} = useAuth()

	const refresh = async () =>{
		const response = await axios.get('/refresh',{
			withCredentials:true
		})
		setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.a);
            return {
                ...prev,
                user:response.data.user,
                accessToken: response.data.a
            }
        });
        return response.data.accessToken;
    }
    return refresh;
};
export default useRefreshToken