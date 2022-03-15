import {useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import {Outlet} from 'react-router-dom'
import useRefreshToken from '@hooks/useRefreshToken.js'
import LoadingIndicator from '@component/loader/Spinner.js'

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const auth = useSelector(state=> state.auth)
    const persist = localStorage.getItem('p')

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

        (!auth?.a && persist === 'true') ? verifyRefreshToken() : setIsLoading(false);

        return () => isMounted = false;
    }, [])

    useEffect(() => {
        console.log(`isLoading: ${isLoading}`)
        console.log(`aT: ${JSON.stringify(auth?.a)}`)
    }, [isLoading])

    return (
        <>
            {!persist
                ? <Outlet />
                : isLoading
                    ? <LoadingIndicator />
                    : <Outlet />
            }
        </>
    )
}

export default PersistLogin



/*
export default function PersistLogin(){
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const auth = useSelector(state=> state.auth)
    const persist = localStorage.getItem('p')

    console.log('PersistLogin')

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

        if(auth?.a === null && persist){
        	console.log('PersistLogin.js auth if',auth)
            console.log('PersistLogin.js persist',persist)
        	verifyRefreshToken()
        }
        else{
        	console.log('PersistLogin.js auth else',auth)
            console.log('PersistLogin.js persist',persist)
        	setIsLoading(false)
        }
        
        return () => isMounted = false; // eslint-disable-next-line
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
}*/