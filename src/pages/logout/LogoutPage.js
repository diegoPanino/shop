import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import useLogout from '@hooks/useLogout.js'

export default function LogoutPage(){
	const user = {name:'fake'} 
	const navigate = useNavigate()
	const [msg,setMsg] = useState({msg:'',err:''})
	const logout = useLogout()

	const confirmLogoutBtn =()=>{
		logout().then(res =>{
			setMsg({msg:`See you soon, ${user.name}`,err:false})
			navigate('/')
		})
		.catch(err =>{
			setMsg({msg:'Oops, seems something went wrong! Try again',err:true})
			setTimeout(()=>navigate('/login',{replace:true}),750)
		})
	}
	const cancelLogoutBtn = () =>{
		setMsg({msg:'Good choice, let\'s go shopping!',err:false})
		setTimeout(()=>navigate('/'),500)
	}
	if(typeof msg.err === 'boolean') 
		return <><p className = {!msg.err ? 'fscaling-2 text-success text-center' : 'fscaling-2 text-danger text-center' }>{msg.msg}</p></>
	return (
		<>
			<Row className = 'mt-5'>
				<p className = 'fscaling-2 primary text-center'>Is very sad to see you leaving {user.name}...</p>	
			</Row>
			<Row sm = {1} md = {2} lg= 'auto' className = 'justify-content-center'>
				<Col xs = 'auto' sm = 'auto' >
					<Button onClick = {confirmLogoutBtn} className = 'm-1 p-1 fscaling-2 fw-bold text-center'>
						yes, I'm leaving
					</Button>					
				</Col>
				<Col xs = 'auto' sm = 'auto' >
					<Button onClick = {cancelLogoutBtn} className = 'm-1 p-1 fscaling-2 fw-bold text-center'>
						you got me, I stay
					</Button>
				</Col>
			</Row>
		</>
		)
}