import React from 'react'
import Container from 'react-bootstrap/Container'
import {BsAt , BsFillShieldLockFill} from 'react-icons/bs'
import Form from './Form.js'

export default function EmailInfoForm({values}){
	const inputProps = [{
		name:'email',
		value:values.email,
		label:'Email address',
		icon:<BsAt size = '1em' />,
		type:'email',
		placeholder:'Your email',
		ariaLabel:'Email address',
		col:{md:6,xl:6},
	},{
		name:'',
		col:7
	},{
		name:'psw',
		label:'Enter your password',
		icon:<BsFillShieldLockFill size = '1em' />,
		type:'password',
		placeholder:'Password',
		ariaLabel:'Password',
		col:{md:6,xl:6},
	}]

	const validationObj = {email:true,psw:true}

	const onSubmitHandler = formData =>{
		console.log('EmailInfoForm.js data',formData)
	}

	return (
		<Container id = 'info/Email' fluid className = 'border-bottom border-primary'>
			<Form input = {inputProps} submit = {onSubmitHandler} validation = {validationObj}/>
		</Container>
		)
}