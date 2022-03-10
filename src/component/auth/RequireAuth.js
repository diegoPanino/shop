import {useLocation, Navigate} from 'react-router-dom'
import useAuth from '@hooks/useAuth.js'
import AccountNav from '@component/navs/AccountNav.js'

//account page has to check if the user is logged in or not and re route to the correct page
//dashboard if the user already had done the login 
//loginform if the user did not sign in

export default function RequireAuth({children}){
	let location = useLocation()
	const {auth} = useAuth()
	
	return (
		auth?.user && auth?.a 
			? <AccountNav />
			: <Navigate to = '/login' state = {{from:location}} replace />
		)
}