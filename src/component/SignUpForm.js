import React,{useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import InputSignField from './InputSignField.js'
import LoadingIndicator from './Spinner.js'
import {BsFilePerson , BsAt , BsFillShieldLockFill} from 'react-icons/bs'
import {useNavigate,Link} from 'react-router-dom'
import {getAuth,useElementOnScreen} from '../helper/helper.js'
import {signUp} from '../api/api.js'

export default function SignUpForm(){
	const [esit,setEsit] = useState({err:false,msg:''})
	const [validInput,setValidInput] = useState({username:true,email:true,psw:true})
	const [containerRef,isVisible] = useElementOnScreen({threshold:0.8})
	const [isLogged,setIsLogged] = useState()
	const [isLoading,setIsLoading] = useState(true)
	const navigate = useNavigate()

	useEffect(()=>{
		getAuth().then(res => setIsLogged(res.status))
	},[])
	useEffect(()=>{
		if(typeof isLogged === 'boolean') setIsLoading(false)
		if(isLogged) navigate('/user')			// eslint-disable-next-line
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

	const scrollToSubmitHandler = () => {
		containerRef.current.scrollIntoView()
	}

	const submit = e => {
		e.preventDefault()
		setEsit(prevState => ({...prevState,err:false,msg:''}))
		const formData = {
			username:e.target.username.value,
			email:e.target.email.value,
			psw:e.target.psw.value,
		}
		signUp(formData)
		.then(res => {
			if(!res.status){
				scrollToSubmitHandler() //if press enter focus on btn
				setEsit(prevState => ({...prevState,err:true,msg:res.data}))
			}
			else{
				scrollToSubmitHandler() //if press enter focus on btn
				setEsit({err:'success',msg:'Registration complete! Redirect to login...'})
				setTimeout(()=>navigate('/login'),2500)
			}
		})
	}

	if(isLoading) return <LoadingIndicator />

	return (
		<Container fluid = 'sm' key = 'signUpForm'>
			<Row sm = '1' className = 'justify-content-center' >
				<Col sm = 'auto' md = '8' lg = '6' className = 'bg-surface p-3'>
					<Container>
						<form onSubmit = {submit}>
							<Row>
								<Col className = 'gy-3'>
									<InputSignField
										onChange = {onChangeHandler}
										redBoxOn = {esit.msg === 'Account already taken!'}
										onFocus = {onBlurHandler}
										valid = {validInputHandler} 
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
										onChange = {onChangeHandler}
										redBoxOn = {esit.msg === 'Account already taken!'}
										onFocus = {onBlurHandler}
										valid = {validInputHandler} 
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
										onChange = {onChangeHandler}
										onFocus = {scrollToSubmitHandler}
										valid = {validInputHandler} 
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
									<p className = {esit.err.length > 0 ? 'fs-4 text-center text-success':'fs-4 text-center text-danger'}>
										{esit.msg}
									</p>
								</Col>
							</Row>
							}
							<Row >
								<Col className = 'gy-3 d-flex justify-content-end'>
									<Button type = 'submit' className = 'm-1 p-2 fscaling-2 fw-bold' onBlur = {onBlurHandler}
									 disabled = {!(validInput.username && validInput.email && validInput.psw) || esit.err }
									 ref = {containerRef}>
										Sign up
									</Button>
									<Button as = {Link} to = '/login'
									className = {isVisible ? 'myLink mx-2 fs-5 p-0 bg-surface align-self-end' : 'myLink mx-2 fs-5 p-0 bg-surface align-self-start'}>
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