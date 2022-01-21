import React, {useState,useEffect} from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import {BsFillEyeFill , BsFillEyeSlashFill} from 'react-icons/bs'

export default function InputSignField({value='',name,label,icon,type,placeholder,ariaLabel,valid,onFocus,redBoxOn,onChange=false,myStyle=null}){
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
		setIsInvalid(validation(value))
		setInput(value)
		if(onChange) onChange()
		
	}

	const focusHandler = e =>{
		e.target.select()
		if(!(onFocus in window))
			onFocus()
	}

	const validation = string => {			//when invalid return error msg when valid false
		if(string.length <= 1)
			return false
		switch(name){
			case 'username':{
				const valid = string.search(/[^\w-]|(-)\1/) === -1 ? true : false
				return valid ? false : 'Username not valid'
			}
			case 'email':{
				// eslint-disable-next-line
				const valid = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/).test(string) 
				return valid ? false : 'Email not valid'
			}
			case 'psw':{
				const valid = (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).test(string)
				return valid ? false : 'Password has to be min 8 chars, at least one uppercase letter, one lowercase letter, one number and one special character'
			}
			case 'name': case'surname':{
				const valid = (/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/g).test(string)
				return valid ? false : 'Char not allowed'
			}
			case 'phone':{
				const valid = (/\d/g).test(string) //function to change +39 into 0039 
				return valid ? false : 'Only numbers'
			}
			case 'date':{ //need to be implemented
				return false
			}
			default: {return 'Looks like something went wrong!'}
		}
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
						  value = {input} required
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