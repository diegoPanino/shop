import React from 'react'
import Container from 'react-bootstrap/Container'
import {BsFillPersonLinesFill , BsFillTelephoneFill , BsFillCalendarMonthFill} from 'react-icons/bs'
import Form from './Form.js'

export default function PersonalInfoForm({values}){
	const inputProps = [{
		name:'name',
		value:values.name,
		label:'First name',
		icon:<BsFillPersonLinesFill size = '1em' />,
		type:'text',
		placeholder:'First name',
		ariaLabel:'First name',
		col:{md:6,xl:6},
	},{
		name:'surname',
		required: false,
		value:values.surname,
		label:'Surname',
		icon:<BsFillPersonLinesFill size = '1em' />,
		type:'text',
		placeholder:'Surname',
		ariaLabel:'Surname',
		col:{md:6,xl:6},
	},{
		name:'phone',
		required: false,
		value:values.tel,
		label:'Telephone',
		icon:<BsFillTelephoneFill size = '1em' />,
		type:'tel',
		placeholder:'Phone number',
		ariaLabel:'Phone number',
		col:{md:6,xl:4},
	},{
		name:'',
		col:7
	},
	{
		name:'date',
		required: false,
		value:values.birth,
		label:'Birthday',
		icon:<BsFillCalendarMonthFill size = '1em' />,
		type:'date',
		placeholder:'Date of birth',
		ariaLabel:'Date of birth',
		col:{md:6,xl:4},
		myStyle: 'inputDate'
	},
	]
	const validationObj = {name:true,surname:true,phone:true,date:true}

	const onSubmitHandler = formData =>{
		console.log('PersonalInfoForm.js data',formData)
		console.log('PersonalInfoForm.js surname',formData.surname)
	}

	return (
		<Container fluid className = 'border-bottom border-primary' id = 'personal'>
			<Form input = {inputProps} submit = {onSubmitHandler} validation = {validationObj} />
		</Container>
		)
}