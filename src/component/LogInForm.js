import React,{useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import InputSignField from './InputSignField.js'
import {BsAt , BsFillShieldLockFill} from 'react-icons/bs'
import {Navigate, Link} from 'react-router-dom'
import {getAuth} from '../helper/helper.js'

export default function LogInForm(){
	const [validInput,setValidInput] = useState({email:true,psw:true})
	const isLogged = getAuth()

	if(isLogged)
		return <Navigate to ='/user' />

	const validInputHandler = isValid => {
		setValidInput({...validInput,...isValid})
	}

	const submit = e =>{
		e.preventDefault()
		const formData = {
			email:e.target.email.value,
			psw:e.target.psw.value,
		}
		console.log('submit',formData)
		//login fetch
	}

	
	return (
		<Container fluid = 'sm'>
			<Row sm = '1' className = 'justify-content-center' >
				<Col sm = 'auto' md = '8' lg = '6' className = 'bg-surface p-3'>
					<Container>
						<form onSubmit = {submit}>
							<Row>
								<Col className = 'gy-3'>
									<InputSignField 
										valid = {validInputHandler}
										label = 'Your email'
										icon = {<BsAt size = '1em'/>} 
										type = 'email' ariaLabel = 'Email'
										placeholder = 'Email' name = 'email'
									/>
								</Col>
							</Row>
							<Row>
								<Col className = 'gy-3'>
									<InputSignField
										valid = {validInputHandler}
										label = 'Your password'
										icon = {<BsFillShieldLockFill size = '1em'/>} 
										type = 'password' ariaLabel = 'Password'
										placeholder = 'Password' name = 'psw'
									/>
								</Col>
							</Row>
							<Row >
								<Col className = 'gy-3 d-flex justify-content-end'>
									<Button type = 'submit' className = 'm-1 p-2 fscaling-2 fw-bold' 
										disabled = {!( validInput.email && validInput.psw) }>
										Log in
									</Button>
									<Button as = {Link} to = '/signup' className = 'myLink mx-2 fs-5 p-0 bg-surface align-self-end' >
										or sign up
									</Button>
								</Col>
							</Row>
						</form>
					</Container>
				</Col>
			</Row>
		</Container>
		)
}


/*
<Container fluid = 'sm'>
			<Row sm = '1' className = 'justify-content-center' >
				<Col sm = 'auto' md = '8' lg = '6' className = 'bg-surface p-3'>
					<Container>
						<Row>
							<Col className = 'gy-3'>
								<Form.Label className = 'fs-3'>Your email</Form.Label>
								<InputGroup size = 'lg'>
									<InputGroup.Text className = 'text-info bg-primary'>
										<BsAt size = '1em'/>
									</InputGroup.Text>
									<FormControl type = 'email' placeholder = 'Email' aria-label = 'Email'/>	
								</InputGroup>
							</Col>
						</Row>
						<Row>
							<Col className = 'gy-3'>
								<Form.Label className = 'fs-3'>Your password</Form.Label>
								<InputGroup size = 'lg' className = 'm5'>
									<InputGroup.Text className = 'text-info bg-primary'>
										<BsFillShieldLockFill size = '1em'/>
									</InputGroup.Text>
									<FormControl type = 'password' placeholder = 'Password' aria-label = 'Password'/>
								</InputGroup>
							</Col>
						</Row>
						<Row >
							<Col className = 'gy-3 d-flex justify-content-end'>
								<Button className = 'm-1 p-2 fscaling-2 fw-bold' >
									Log in
								</Button>
								<Button  className = 'myLink mx-2 fs-5 p-0 bg-surface align-self-end' onClick = {onChangeRoute}>
									or sign up
								</Button>
							</Col>
						</Row>
					</Container>
				</Col>
			</Row>
		</Container>
*/