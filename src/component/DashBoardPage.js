import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'

export default function CartPage(){
	const storage = window.localStorage

	const selectHandler = eventKey =>{
		
	}

	return (
		<Container className = 'mx-3'>
			<Row sm = {2}>
				<Col sm = {3} className = 'bg-secondary'>
					<Nav defaultActiveKey = 'account' className = 'flex-column' onSelect = {selectHandler}>
						<Nav.Link className = 'fs-2' eventKey = 'account'>Account</Nav.Link>
						<Nav.Link className = 'fs-2' eventKey = 'myShop'>My Shop</Nav.Link>
						<Nav.Link className = 'fs-2' eventKey = 'wishlist'>Wishlist</Nav.Link>
						<Nav.Link className = 'fs-2' eventKey = 'logout'>Logout</Nav.Link>
					</Nav>
				</Col>
				<Col sm = {{offset:1,span:8}} className = 'bg-surface'>
					
				</Col>
			</Row>
		</Container>
		)
}