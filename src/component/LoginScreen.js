import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Header from './Header.js'
import MainNavigationBar from './MainNavigationBar.js'
import {BsFilePerson , BsAt , BsFillShieldLockFill} from 'react-icons/bs'

export default function LoginScreen(){
	return (
		<>
		<Header />
		<MainNavigationBar />
		<Container md = {3} className = 'p-4 my-4 bg-surface col-lg-6' fluid = 'sm'>
			<Row xs = {1} className = 'mx-auto justify-content-center p-2' >
				<Col md = {8} >
					<Form.Label className = 'text-lg-center text-md-start w-100 fs-3'>How we are going to address you</Form.Label>
					<InputGroup size = 'lg' className = 'm5'>
						<InputGroup.Text className = 'text-info bg-primary'>
							<BsFilePerson size = '1em'/>
						</InputGroup.Text>
						<FormControl type = 'text' placeholder = 'Username' aria-label = 'Username'/>	
					</InputGroup>
				</Col>
			</Row>
			<Row xs = {1} className = 'mx-auto justify-content-center p-2'>
				<Col md = {8}>
					<Form.Label className = 'text-lg-center text-md-start w-100 fs-3'>How we are going to reach you</Form.Label>
					<InputGroup size = 'lg' className = 'm5'>
						<InputGroup.Text className = 'text-info bg-primary'>
							<BsAt size = '1em'/>
						</InputGroup.Text>
						<FormControl type = 'email' placeholder = 'Email' aria-label = 'Email'/>
					</InputGroup>
				</Col>
			</Row>
			<Row xs = {1} className = 'mx-auto justify-content-center p-2'>
				<Col md = {8}>
					<Form.Label className = 'text-lg-center text-md-start w-100 fs-3'>Choice a secure password</Form.Label>
					<InputGroup size = 'lg' className = 'm5'>
						<InputGroup.Text className = 'text-info bg-primary'>
							<BsFillShieldLockFill size = '1em'/>
						</InputGroup.Text>
						<FormControl type = 'password' placeholder = 'Password' aria-label = 'Password'/>
					</InputGroup>
				</Col>
			</Row>
			<Row xs = {10} className = 'mx-auto justify-content-end p-2'>
				<Col md = {{offset:8}}>
					<Button className = 'p-1 fscaling fw-bold' >
						Sign in
					</Button>
				</Col>
			</Row>
		</Container>
		</>
		)
}

