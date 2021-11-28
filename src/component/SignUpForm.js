import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import InputSignField from './InputSignField.js'
import {BsFilePerson , BsAt , BsFillShieldLockFill} from 'react-icons/bs'

export default function SignUpForm({route,submit,esit}){
	const onChangeRoute = () =>{
		route('login')
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
										label = 'How we are going to address you'
										icon = {<BsFilePerson size = '1em'/>} 
										type = 'text' ariaLabel = 'Username'
										placeholder = 'Username' name = 'username'
									/>
								</Col>
							</Row>
							<Row>
								<Col className = 'gy-3'>
									<InputSignField 
										label = 'How we are going to reach you'
										icon = {<BsAt size = '1em'/>} 
										type = 'email' ariaLabel = 'Email'
										placeholder = 'Email' name = 'email'
									/>
								</Col>
							</Row>
							<Row>
								<Col className = 'my-3'>
									<InputSignField 
										label = 'Choice a secure password'
										icon = {<BsFillShieldLockFill size = '1em'/>} 
										type = 'password' ariaLabel = 'Password'
										placeholder = 'Password' name = 'psw'
									/>
								</Col>
							</Row>
							{esit.err &&
							<Row>
								<Col className = ''>
									<p className = 'fs-4 text-center text-danger'>{esit.msg}</p>
								</Col>
							</Row>
							}
							<Row >
								<Col className = 'gy-3 d-flex justify-content-end'>
									<Button type = 'submit' className = 'm-1 p-2 fscaling-2 fw-bold'>
										Sign up
									</Button>
									<Button className = 'myLink mx-2 fs-5 p-0 bg-surface align-self-end' onClick = {onChangeRoute}>
										or log in
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