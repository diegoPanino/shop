import React,{useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import LoadingIndicator from '@component/loader/Spinner.js'
import InputSignField from '@component/input/InputSignField.js'
import {BsAt , BsFillShieldLockFill} from 'react-icons/bs'
import {useNavigate, Link, useLocation} from 'react-router-dom'
import logIn from '@services/signInService.js'
import useAuth from '@hooks/useAuth.js'
import {validateInputField} from '@helper/inputValidation.js'

export default function LogInForm(){
	const {setAuth,auth,persist,setPersist} = useAuth() 
	const [validInput,setValidInput] = useState({email:true,psw:true})
	const [isLoading,setIsLoading] = useState(false)
	const [esit,setEsit] = useState({err:false,msg:''})
	const navigate = useNavigate()
	const location = useLocation()
	const from = location.state?.from?.pathname || '/user/info'

	useEffect(()=>{
		if(auth?.user && auth?.a) navigate(from,{replace:true}) // eslint-disable-next-line
	},[auth])

	useEffect(()=>{
		localStorage.setItem('p',persist)
	},[persist])

	const validInputHandler = isValid => {
		setValidInput({...validInput,...isValid})
	}

	const onBlurHandler = () =>{
		setEsit({err:false,msg:''})
	}

	const onChangeHandler = () =>{
		if(esit.err) setEsit({err:false,msg:''})
	}

	const submit = async (e) =>{
		e.preventDefault()
		const email = e.target.email.value
		const psw = e.target.psw.value
		const validEmail = validateInputField(email,'email')
		const validPsw = validateInputField(psw,'psw')
		if(validEmail || validPsw) return setEsit({err:true,msg:'Sorry we are not able to let you login now, try later!'})
		const formData = {
			email:email,
			psw:psw,
		}
		try{
			setIsLoading(true)
			const response = await logIn(formData)
			console.log('response',response)
			setIsLoading(false) 
			if(response.status === false) return setEsit({err:true,msg:response.data})
			const a = response?.a
			setEsit({err:'success',msg:'Let\'s get in mate!'})
			setAuth({user:email,a})
		}
		catch(err){
			setIsLoading(false)
			console.log('login',err)
			setEsit({err:true,msg:'Sorry we are not able to let you login now, try later!'})
		}
	}

	const togglePersist = () =>{
		setPersist(prev => !prev)
	}

	if(isLoading) return <LoadingIndicator  />

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
							<Row>
								<Col className = 'gy-3'>
									<Form.Check type = 'checkbox' label ='Remember me' id ='rememberLogIn' 
												onChange = {togglePersist} checked = {persist}/>
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