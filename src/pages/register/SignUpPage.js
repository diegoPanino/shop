import React,{useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import InputSignField from '@component/input/InputSignField.js'
import LoadingIndicator from '@component/loader/Spinner.js'
import {BsFilePerson , BsAt , BsFillShieldLockFill} from 'react-icons/bs'
import {useNavigate,Link,useLocation} from 'react-router-dom'
import {useElementOnScreen} from '@helper/hooks.js'
import {validateInputField} from '@helper/inputValidation.js'
import signUp from '@services/signUpService.js'
import useAuth from '@hooks/useAuth.js'

export default function SignUpForm(){
	const {auth} = useAuth()
	const [esit,setEsit] = useState({err:false,msg:''})
	const [validInput,setValidInput] = useState({username:true,email:true,psw:true})
	const [containerRef,isVisible] = useElementOnScreen({threshold:0.8})
	const [isLoading,setIsLoading] = useState(false)
	const navigate = useNavigate()
	const location = useLocation()
	const from = location.state?.from?.pathname || '/login'

	useEffect(()=>{
		if(auth?.user && auth?.a) navigate(from,{replace:true}) // eslint-disable-next-line
	},[auth])

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

	const submit = async (e) => {
		e.preventDefault()
		setEsit(prevState => ({...prevState,err:false,msg:''}))
		const email = e.target.email.value
		const username = e.target.username.value
		const psw = e.target.psw.value
		const validEmail = validateInputField(email,'email')
		const validPsw = validateInputField(psw,'psw')
		const validName = validateInputField(username,'name')
		if(validEmail || validPsw || validName) return setEsit({err:true,msg:'Sorry we are not able to let you sign up now, try later!'})
		const formData = {
			username:username,
			email:email,
			psw:psw,
		}
		try{
			setIsLoading(true)
			const response = await signUp(formData)
			setIsLoading(false)
			if(!response.status) return setEsit({err:true,msg:response.data})
			setEsit({err:'success',msg:'Let\'s get in mate'})
			setTimeout(()=>{navigate(from,{replace:true})},750)
			//need to show msg and redirect to login
		}
		catch(err){
			setIsLoading(false)
			setEsit({err:'error',msg:'Sorry looks like we\'re busy at the office. Try later'})
		}
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
										label = 'Your name'
										icon = {<BsFilePerson size = '1em'/>} 
										type = 'text' ariaLabel = 'Name'
										placeholder = 'Real name' name = 'username'
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