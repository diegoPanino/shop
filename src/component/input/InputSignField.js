import React, {useState,useEffect} from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import {BsFillEyeFill , BsFillEyeSlashFill} from 'react-icons/bs'
import {validateInputField} from '@helper/inputValidation.js'

export default function InputSignField({value='',name,label,icon,type,placeholder,ariaLabel,
										valid,onFocus,redBoxOn,onChange=false,myStyle=null,required=true}){
	const [input,setInput] = useState(value)
	const [showPsw,setShowPsw] = useState(false)
	const [isInvalid,setIsInvalid] = useState(false)
	const psw = type === 'password' ? true : false
	
	useEffect(()=>{
		if(isInvalid.length > 0 )
			valid({[name]:false})
		else
			valid({[name]:true})		// eslint-disable-next-line
	},[isInvalid])						

	const toggleShowPsw = () =>{
		setShowPsw(!showPsw)
	}

	const inputHandler = e => {
		const {value} = e.target
		setIsInvalid(validateInputField(value,name))
		setInput(value)
		if(onChange) onChange(value)
		
	}

	const focusHandler = e =>{
		e.target.select()
		if(!(onFocus in window))
			onFocus()
	}

	return (
		<>
		<Form.Label className = {isInvalid !== false ? 'fs-4 text-danger' : 'fs-3'}>
			{isInvalid !== false ? isInvalid : label}
		</Form.Label>
		<InputGroup size = 'lg' className = {(isInvalid !== false) || redBoxOn ? 'myErrBox ' : ''}>
			<InputGroup.Text className = 'text-info bg-primary'>
				{icon}
			</InputGroup.Text>
			<Form.Control as = 'input' type = {psw ? showPsw ? 'text' : type : type}
						  onChange = {inputHandler} onFocus = {focusHandler}
						  value = {input} required = {required}
						  className = {psw ? 'myPswInput' : myStyle ? myStyle : ''} maxLength  = '32' name = {name}
			 			  placeholder = {placeholder} aria-label = {ariaLabel}/>
			{ psw &&
			<InputGroup.Text className = 'bg-body myHSPswBtn'>
			{showPsw 
				? <BsFillEyeSlashFill onClick = {toggleShowPsw} size = '1em' />
				: <BsFillEyeFill onClick = {toggleShowPsw} size = '1em' />
				}
			</InputGroup.Text>
			}
		</InputGroup>
		</>
		)
}