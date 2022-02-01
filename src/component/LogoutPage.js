import React, {useState} from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import {logout} from '../api/api.js'

export default function LogoutPage(props){
	const {user,navigate} = props
	const [msg,setMsg] = useState({msg:'',err:''})

	const confirmLogoutBtn = () =>{
		logout()
		.then(res =>{
			setMsg({msg:`See you soon, ${user.name}`,err:false})
			setTimeout(()=>navigate('/'),500)
		})
		.catch(err =>{
			setMsg({msg:'Oops, seems something went wrong! Try again',err:true})
			setTimeout(()=>navigate('/user'),750)
		})
	}
	const cancelLogoutBtn = () =>{
		setMsg({msg:'Good choice, let\'s go shopping!',err:false})
		setTimeout(()=>navigate('/user/info'),500)
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