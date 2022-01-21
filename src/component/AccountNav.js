import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import {Link,Outlet} from 'react-router-dom'

export default function AccountNav(){
	return (
		<Container className = 'bg-secondary p-5'>
			<Row xs = {1} sm = {5} >
				<Col xs = {1} sm = {3} >
					<Nav defaultActiveKey = 'info' className = 'flex-column'>
						<Nav.Link as = {Link} to = 'user/info' className = 'myLink fs-2' >My details</Nav.Link>
						<Nav.Link as = {Link} to = 'user/history' className = 'myLink fs-2' >My Shop</Nav.Link>
						<Nav.Link as = {Link} to = 'user/wishlist' className = 'myLink fs-2' >Wishlist</Nav.Link>
						<Nav.Link as = {Link} to = 'user/logout' className = 'myLink fs-2' >Logout</Nav.Link>
					</Nav>
				</Col>
				<Col sm = {9} className = 'bg-surface p-5'>
					<Outlet/>
				</Col>
			</Row>
		</Container>
		)
}