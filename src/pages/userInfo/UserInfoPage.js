import React from 'react'
import Col from 'react-bootstrap/Col'
import PersonalInfoForm from '@component/forms/PersonalInfoForm.js'
import EmailInfoForm from '@component/forms/EmailInfoForm.js'
import PasswordInfoForm from '@component/forms/PasswordInfoForm.js'
import AddressInfoForm from '@component/forms/AddressInfoForm.js'

export default function UserInfoPage(){
	const info = {username:'diego',name:'Diego',surname:'Sanchez',tel:'123456789',birth:'1990-03-01',}
	const email = {email:'diego@diego.com'}
	const address = {street:'via fasulla',n:'123',city:'Skypea',province:'mimim',zip:'12345',state:'Haiti'}

	return (
		<Col>
			<h1 className = 'text-center mb-5'>My personal details</h1>
			<PersonalInfoForm values = {info} />
			<EmailInfoForm values = {email} />
			<PasswordInfoForm />
			<AddressInfoForm values = {address} />
		</Col>
		)
}