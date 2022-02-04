import React,{useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import LoadingIndicator from '@component/loader/Spinner.js'
import InputSignField from '@component/input/InputSignField.js'
import {BsAt , BsFillShieldLockFill} from 'react-icons/bs'
import {useNavigate, Link} from 'react-router-dom'
import logIn from '@services/signInService.js'
import {setA,setR} from '@helper/localStorage.js'
import getAuth from '@services/authService.js'

export default function LogInForm(){
	const [validInput,setValidInput] = useState({email:true,psw:true})
	const [isLogged,setIsLogged] = useState()
	const [isLoading,setIsLoading] = useState(true)
	const [esit,setEsit] = useState({err:false,msg:''})
	const navigate = useNavigate()

	useEffect(()=>{
		getAuth().then(res => setIsLogged(res.status))
	},[])
	useEffect(()=>{
		if(typeof isLogged === 'boolean') setIsLoading(false)
		if(isLogged) navigate('/user/info')			// eslint-disable-next-line
	},[isLogged])

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
		setIsLoading(true)
		const formData = {
			email:e.target.email.value,
			psw:e.target.psw.value,
		}
		logIn(formData)
		.then(({data,status})=>{
			setIsLoading(false)
			if(status) {
				setA(data.a)
				setR(data.r)
				setEsit({err:'success',msg:'Let\'s get in mate!'})
				setTimeout(()=>navigate('/user/info'),500)
			}
			else
				setEsit({err:true,msg:data})
		})
		.catch(err =>{
			setIsLoading(false)
			setEsit({err:true,msg:'Sorry we are not able to let you login now, try later!'})
		})
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