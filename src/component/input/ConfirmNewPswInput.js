import React, {useState,useEffect} from 'react'
import InputSignField from './InputSignField.js'
import Col from 'react-bootstrap/Col'

export default function ConfirmNewPswInput({onChange,onFocus,valid,icon,newPswCol,confirmPswCol}){
	const [newPsw,setNewPsw] = useState()
	const [confirmPsw,setConfirmPsw] = useState()

	useEffect(()=>{
		if(newPsw !== confirmPsw)
			valid({newPsw:false,confirmPsw:false})
		else
			valid({newPsw:true,confirmPsw:true}) // eslint-disable-next-line
	},[newPsw,confirmPsw])

	const onFocusHandler = () =>{
		onFocus()
	}
	const onChangeHandlerNew = input =>{
		setNewPsw(input)
		onChange()
	}
	const onChangeHandlerConfirm = input =>{
		setConfirmPsw(input)
		onChange()
	}
	const validationHandler = isValid =>{
		valid(isValid)
	}

	return (
		<>
		<Col md = {newPswCol.md} xl = {newPswCol.xl} key = 'newPassword'>
		<InputSignField onChange = {onChangeHandlerNew} valid = {validationHandler} onFocus = {onFocusHandler}
						name = 'newPsw'
		 				type = 'password'
						icon = {icon} label = 'New Password'
						placeholder = 'Insert new password'
						ariaLabel = 'New Password' 
		/>
		</Col>
		<Col md = {confirmPswCol.md} xl = {confirmPswCol.xl} key = 'confirmPassword'>
		<InputSignField onChange = {onChangeHandlerConfirm} valid = {validationHandler} onFocus = {onFocusHandler}
						name = 'confirmPsw'
		 				type = 'password'
						icon = {icon} label = 'Confirm password' 
						placeholder = 'Enter again passowrd'
						ariaLabel = 'Confirm Password'
		/>
		</Col>
		{(newPsw !== confirmPsw && newPsw?.length > 0 && confirmPsw?.length > 0 )&&
			<Col key = 'NoPswMatchErrCol'>
				<p className = 'fs-4 text-danger text-center'>New password doesn't match!</p>
			</Col>
		}
		</>
		)
	
}