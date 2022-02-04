import React,{useState,useEffect} from 'react'
import {useLocation, Navigate, useNavigate} from 'react-router-dom'
import getAuth from '@services/authService.js'
import LoadingIndicator from '@component/loader/Spinner.js'

//account page has to check if the user is logged in or not and re route to the correct page
//dashboard if the user already had done the login 
//loginform if the user did not sign in

export default function RequireAuth({children}){
	let location = useLocation()
	const navigate = useNavigate()
	const [isLogged,setIsLogged	] = useState()
	const [isLoading,setIsLoading] = useState(true)
	const [user,setUser] = useState()

	useEffect(()=>{
			getAuth().then(res=>{
				setIsLogged(res.status)
				if(res.status) setUser(res.data.data)
			})	
	},[])

	useEffect(()=>{
		if(typeof isLogged === 'boolean')
			setIsLoading(false)
	},[isLogged])

	return isLoading ?
	 <LoadingIndicator/> : isLogged ? 
	 React.cloneElement(children,{user:user,navigate:navigate}) : <Navigate to = '/login' from = {location} />

}