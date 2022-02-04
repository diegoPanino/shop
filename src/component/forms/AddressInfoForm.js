import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from './Form.js'
import {BsBuilding , BsFillHouseFill , BsGeoFill , BsMailbox , BsSignpostSplitFill , BsMap} from 'react-icons/bs'

export default function AddressInfoForm({values}){
	const inputProps = [{
		name:'street',
		value:values.street,
		required:false,
		label:'Street name',
		icon:<BsFillHouseFill size = '1em' />,
		type:'text',
		placeholder:'Street address',
		ariaLabel:'Street address',
		col:{md:9,xl:10},
	},{
		name:'number',
		value:values.n,
		required:false,
		label:'Number',
		icon:<BsGeoFill size = '1em' />,
		type:'text',
		placeholder:'Number',
		ariaLabel:'House number',
		col:{md:3,xl:2},
	},{
		name:'city',
		value:values.city,
		required:false,
		label:'City/Town',
		icon:<BsBuilding size = '1em' />,
		type:'text',
		placeholder:'City',
		ariaLabel:'City',
		col:{md:7,xl:8},
	},{
		name:'zip',
		value:values.zip,
		required:false,
		label:'Zip',
		icon:<BsMailbox size = '1em' />,
		type:'text',
		placeholder:'Zip Code',
		ariaLabel:'Zip Code',
		col:{md:3,xl:2},
	},{
		name:'province',
		value:values.province,
		required:false,
		label:'Province',
		icon:<BsSignpostSplitFill size = '1em' />,
		type:'text',
		placeholder:'Province',
		ariaLabel:'Province',
		col:{md:4,xl:4},
	},{
		name:'state',
		value:values.state,
		required:false,
		label:'State',
		icon:<BsMap size = '1em' />,
		type:'text',
		placeholder:'State',
		ariaLabel:'State',
		col:{md:5,xl:2},
	},
	]
	const validationObj = {street:true,number:true,city:true,zip:true,province:true,state:true}

	const onSubmitHandler = formData =>{
		console.log('PersonalInfoForm.js data',formData)
	}

	return(
		<Container id = 'info/Address' fluid className = 'border-bottom border-primary'>
			<Form input = {inputProps} submit = {onSubmitHandler} validation = {validationObj} />
		</Container>
		)
}