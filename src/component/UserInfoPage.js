import React from 'react'
import Col from 'react-bootstrap/Col'
import PersonalInfoForm from './PersonalInfoForm.js'

export default function UserInfoPage(){
	const values = {username:'diego',name:'Diego',surname:'Tieso',tel:'3924106293',birth:'1990-03-01',}
	return (
		<Col className = 'bg-surface'>
			<h1 className = 'text-center'>My personal details</h1>
			<PersonalInfoForm values = {values} />
		</Col>
		)
}