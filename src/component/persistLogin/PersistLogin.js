import useAuth from '@hooks/useAuth.js'
import {Outlet} from 'react-router-dom'
import {useState,useEffect} from 'react'
import useRefreshToken from '@hooks/useRefreshToken.js'
import LoadingIndicator from '@component/loader/Spinner.js'

export default function PersistLogin(){
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const { auth, persist } = useAuth();

    useEffect(() => {
        let isMounted = true;

        const verifyRefreshToken = async () => {
            try {
                await refresh();
            }
            catch (err) {
                console.error(err);
            }
            finally {
                isMounted && setIsLoading(false);
            }
        }
        if(!auth?.a){
        	console.log('PersistLogin.js auth if',auth)
        	verifyRefreshToken()
        }
        else{
        	console.log('PersistLogin.js auth else',auth)
        	setIsLoading(false)
        }
        

        return () => isMounted = false;
    }, [])

	return(
		<>
			{!persist 
				? <Outlet/>
				: isLoading 
					? <LoadingIndicator />
					: <Outlet />
			}
		</>
		)
}