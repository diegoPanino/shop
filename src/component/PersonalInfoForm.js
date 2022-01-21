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
		valid:'',
		onFocus:'',
		redBoxOn:'',
		onChange:'',
		col:{md:6,xl:6},
	},{
		name:'surname',
		value:values.surname,
		label:'Surname',
		icon:<BsFillPersonLinesFill size = '1em' />,
		type:'text',
		placeholder:'Surname',
		ariaLabel:'Surname',
		valid:'',
		onFocus:'',
		redBoxOn:'',
		onChange:'',
		col:{md:6,xl:6},
	},{
		name:'phone',
		value:values.tel,
		label:'Telephone',
		icon:<BsFillTelephoneFill size = '1em' />,
		type:'number',
		placeholder:'Phone number',
		ariaLabel:'Phone number',
		valid:'',
		onFocus:'',
		redBoxOn:'',
		onChange:'',
		col:{md:6,xl:4},
		myStyle:'inputNumberHideArrow',
	},{
		name:'',
		col:7
	},
	{
		name:'date',
		value:values.birth,
		label:'Birthday',
		icon:<BsFillCalendarMonthFill size = '1em' />,
		type:'date',
		placeholder:'Date of birth',
		ariaLabel:'Date of birth',
		valid:'',
		onFocus:'',
		redBoxOn:'',
		onChange:'',
		col:{md:6,xl:4},
	},
	]

	const onSubmitHandler = formData =>{
		console.log('PersonalInfoForm.js data',formData)
		console.log('PersonalInfoForm.js surname',formData.surname)
	}

	return (
		<Container fluid>
			<Form input = {inputProps} submit = {onSubmitHandler} />
		</Container>
		)
}