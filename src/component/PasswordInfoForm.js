import React from 'react'
import Container from 'react-bootstrap/Container'
import {BsFillShieldLockFill} from 'react-icons/bs'
import Form from './Form.js'

export default function EmailInfoForm({values}){
	const inputProps = [{
		name:'psw',
		label:'Current password',
		icon:<BsFillShieldLockFill size = '1em' />,
		type:'password',
		placeholder:'Insert your actual password',
		ariaLabel:'Old password',
		col:{md:6,xl:6},
	},{
		name:'',
		col:7
	},{
		name:'confirm',
		icon:<BsFillShieldLockFill size = '1em' />,
		newPswCol:{md:6,xl:6},
		confirmPswCol:{md:6,xl:6},
	}]

	const validationObj = {psw:true,newPsw:true,confirmPsw:true}

	const onSubmitHandler = formData =>{
		console.log('EmailInfoForm.js data',formData)
	}

	return (
		<Container id = 'info/Password' fluid className = 'border-bottom border-primary'>
			<Form input = {inputProps} submit = {onSubmitHandler} validation = {validationObj}/>
		</Container>
		)
}