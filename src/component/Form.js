import React,{useState} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import InputSignField from './InputSignField.js'

export default function Form(props){
	const {input,submit} = props
	const [validInput,setValidInput] = useState()
	const [disabledSaveBtn,setDisabledSaveBtn] = useState(true)
	const [esit,setEsit] = useState({err:false,msg:''})
		
	const validInputHandler = isValid => {
		setValidInput({...validInput,...isValid})
		console.log(validInput)
		let flag = true
		if(!validInput) return
		input.forEach(el =>{
			if(validInput[el.name] && flag )
				flag = true
			else
				flag = false
		})
		setDisabledSaveBtn(!flag)
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
			if(el.value)
				formData = {...formData,[el.name]: e.target[el.name].value}
		})
		submit(formData)
	}

	const elements = input.map((el,i) =>{
		if(el.name.length === 0)
			return <Col md = {el.col}></Col>
		return(
		 <Col md = {el.col.md} xl = {el.col.xl}>
		 <InputSignField name = {el.name} key = {i}
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
		<Row >
			<Col md = {{span:3,offset:5}} >
				<Button type = 'submit' className = 'my-4 p-2 fscaling-2 fw-bold' 
						disabled = {disabledSaveBtn}>
						Save
				</Button>
			</Col>
		</Row>
		</form>
		</>
		)
}