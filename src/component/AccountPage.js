import React,{useState , useEffect} from 'react'
import Header from './Header.js'
import MainNavigationBar from './MainNavigationBar.js'
import SignUpForm from './SignUpForm.js'
import LogInForm from './LogInForm.js'
import DashBoard from './DashBoardPage.js'
import {signUp} from '../api/api.js'

export default function AccountPage(){
	const storage = window.localStorage
	const [route,setRoute] = useState('login')
	const [signUpEsit,setSignUpEsit] = useState({err:false,msg:''})
 
	useEffect(()=>{
		if(storage.getItem('username') && storage.getItem('email'))
			setRoute('dashboard')
		// eslint-disable-next-line
	},[])

	const onChangeRoute = newRoute => {
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
	}

	return (
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
		)
}