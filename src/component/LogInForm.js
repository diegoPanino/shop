import React,{useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import InputSignField from './InputSignField.js'
import {BsAt , BsFillShieldLockFill} from 'react-icons/bs'
import {useNavigate, Link} from 'react-router-dom'
import {logIn} from '../api/api.js'
import {getAuth} from '../helper/helper.js'

export default function LogInForm(){
	const [validInput,setValidInput] = useState({email:true,psw:true})
	const [esit,setEsit] = useState({err:false,msg:''})
	const navigate = useNavigate()
	const storage = window.localStorage
	const isLogged = getAuth()

	if(isLogged)
		navigate('/user')

	const validInputHandler = isValid => {
		setValidInput({...validInput,...isValid})
	}

	const onBlurHandler = () =>{
		setEsit({err:false,msg:''})
	}

	const onChangeHandler = () =>{
		if(esit.err) setEsit({err:false,msg:''})
	}

	const submit = e =>{
		e.preventDefault()
		const formData = {
			email:e.target.email.value,
			psw:e.target.psw.value,
		}
		logIn(formData)
		.then(({data,status})=>{
			if(status) {
				storage.setItem('a',data.a)
				storage.setItem('r',data.r)
				setEsit({err:'success',msg:'Let\'s get in mate!'})
				setTimeout(()=>navigate('/user'),500)
			}
			else
				setEsit({err:true,msg:data})
		})
		.catch(err =>{
			console.log('LogInForm.js submit =>',err)
		})
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
										onChange = {onChangeHandler}
										onFocus = {onBlurHandler}
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
										onChange = {onChangeHandler}
										onFocus = {onBlurHandler}
										valid = {validInputHandler}
										label = 'Your password'
										icon = {<BsFillShieldLockFill size = '1em'/>} 
										type = 'password' ariaLabel = 'Password'
										placeholder = 'Password' name = 'psw'
									/>
								</Col>
							</Row>
							{esit.err &&
							<Row>
								<Col className = ''>
									<p className = {esit.err.length > 0 ? 'fs-4 text-center text-success':'fs-4 text-center text-danger'}>
										{esit.msg}
									</p>
								</Col>
							</Row>
							}
							<Row >
								<Col className = 'gy-3 d-flex justify-content-end'>
									<Button type = 'submit' className = 'm-1 p-2 fscaling-2 fw-bold' 
										disabled = {(!( validInput.email && validInput.psw) || esit.err)}>
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