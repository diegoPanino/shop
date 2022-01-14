import React,{useState , useEffect} from 'react'
import Header from './Header.js'
import MainNavigationBar from './MainNavigationBar.js'
import SignUpForm from './SignUpForm.js'
import LogInForm from './LogInForm.js'
import DashBoard from './DashBoardPage.js'
import {signUp} from '../api/api.js'
import {useLocation, Navigate, Outlet} from 'react-router-dom'
import {getAuth} from '../helper/helper.js'

//account page has to check if the user is logged in or not and re route to the correct page
//dashboard if the user already had done the login 
//loginform if the user did not sign in

export default function RequireAuth({children}){
	const isLogged = getAuth()
	let location = useLocation()
	

	/*const onChangeRoute = newRoute => {
		setRoute(newRoute)
	}
	const onSubmitHandler = e =>{
		e.preventDefault()
		setSignUpEsit(prevState => ({...prevState,err:false,msg:''}))
		const values = e.target
		let formData,length = 0
		for(let i = 0; i < values.length; i++){
			if(values[i].hasOwnProperty('value')){
				formData = {...formData,[values[i].name]:values[i].value}
				length++
			}
		}
		if(length < 3){
			console.log('fetchLogin')
		}
		else{
			//fetch to signUp
			signUp(formData)
			.then(({data,status}) => {
				if(!status)
					setSignUpEsit(prevState => ({...prevState,err:true,msg:data}))
				else{
					storage.setItem('username',data.username)
					storage.setItem('email',data.email)
					setRoute('dashboard')
				}
			})
			.catch(err =>{
				console.log('CatchRes',err)
			})
		}
	}*/

	return isLogged ? children : <Navigate to = '/login' state = {{from:location}} />
}


/*
<>
		<Header />
		<MainNavigationBar/>
		{
			route === 'login' 
			? <LogInForm route = {onChangeRoute} submit = {onSubmitHandler} esit = {false}/>
			: route === 'signup'
			? <SignUpForm route = {onChangeRoute} submit = {onSubmitHandler} esit = {signUpEsit}/>
			: <DashBoard />
		}
		
		</>
*/