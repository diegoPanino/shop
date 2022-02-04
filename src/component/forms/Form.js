import React,{useState,useEffect} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ConfirmNewPswInput from '../input/ConfirmNewPswInput.js'
import InputSignField from '../input/InputSignField.js'
import SaveBtn from '../button/SaveBtn.js'

export default function Form(props){
	const {input,submit,validation,btnLabel = 'save',breakpoint = {md:{span:3,offset:5}}} = props
	const [validInput,setValidInput] = useState(validation)
	const [disabledSaveBtn,setDisabledSaveBtn] = useState(true)
	const [esit,setEsit] = useState({err:false,msg:''})
	
	useEffect(()=>{
		const value = Object.values(validInput)
		const flag = value.every(Boolean)
		if(flag)
			setDisabledSaveBtn(false)
		else
			setDisabledSaveBtn(true)
	},[validInput])

	const validInputHandler = isValid => {
		setValidInput({...validInput,...isValid})
	}
	const onFocusHandler = () => {
		setEsit({err:false,msg:''})
	}
	const onChangeHandler = () => {
		if(esit.err) setEsit({err:false,msg:''})
	}
	const submitHandler = e => {
		e.preventDefault()
		let formData
		input.forEach(el =>{
			if(el.name.length > 0)
				formData = {...formData,[el.name]: e.target[el.name].value}
		})
		submit(formData)
	}

	const elements = input.map((el,i) =>{
		if(el.name.length === 0)
			return <Col md = {el.col} key = {`${i}${el.name}`}></Col>
		if(el.name === 'confirm')
			return <ConfirmNewPswInput onFocus = {onFocusHandler} onChange = {onChangeHandler} valid = {validInputHandler}
					icon = {el.icon} newPswCol = {el.newPswCol} confirmPswCol = {el.confirmPswCol} key = 'confirmPsw'/>
		return(
		 <Col md = {el.col.md} xl = {el.col.xl} key = {`${i}${el.name}`}>
		 <InputSignField name = {el.name} required = {el.required}
		 				 type = {el.type} value = {el.value} 
						 icon = {el.icon} label = {el.label} 
						 placeholder = {el.placeholder} 
						 ariaLabel = {el.ariaLabel} 
						 valid = {validInputHandler} redBoxOn = {el.redBoxOn} 
						 onFocus = {onFocusHandler} 
						 onChange = {onChangeHandler}
		/>
		</Col>
		)}
	)

	return (
		<>
		<form onSubmit = {submitHandler}>
			<Row md = {12}>
				{elements}
			</Row>
		<Row>
			<SaveBtn label = {btnLabel} breakpoint = {breakpoint} disabled = {disabledSaveBtn} />
		</Row>
		</form>
		</>
		)
}