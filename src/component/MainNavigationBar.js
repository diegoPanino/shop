import React,{useState} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import NavBar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav'
import SearchInput from './SearchInput.js'
import {BsFillCartFill,BsFillPersonFill,BsFillMenuAppFill} from 'react-icons/bs'

export default function MainNavigationBar(){
  const [menuIsOpen,setOpenMenu] = useState(false)

	const onSearchHandler = input =>{
    	console.log('MainNavigationBar.js.js,input:',input)
  }
  const onCartClickHandler = () =>{
  		console.log('MainNavigationBar.js cart click')
	}
  const onUserClickHandler = () =>{
		console.log('MainNavigationBar.js user click')
  }
  const onSelectHandler = e =>{
    console.log('MainNavigationBar.js selection',e)
  }
  const onToggleHandler = e => {
    console.log('onToggleHandler e',e)
    if (e)
      setOpenMenu(true)
    else
      setOpenMenu(false)
  }

	return (
		<Row className = {menuIsOpen ? '' : 'align-items-start'}>
      <Col sm = {10} md = {9} className = 'pe-0'>
        <SearchInput onSearch = {(input)=>onSearchHandler(input)} />
      </Col>
      <Col sm = {2} md = {{offset:1,span:2}} >
        <NavBar onToggle = {onToggleHandler} onSelect = {onSelectHandler}
                collapseOnSelect expand = 'md' >
          <NavBar.Toggle  >
            <BsFillMenuAppFill size = '2em' color = '#ffd685' />
          </NavBar.Toggle >
          <NavBar.Collapse  id = 'responsive-navbar-nav'>         
            <Nav >
              <Nav.Link eventKey = 'Cart'>
                <button onClick = {onCartClickHandler} className = 'bg-primary rounded-circle p-2'>
               	  <BsFillCartFill size = '2.5em' color = '#19647e'/>
              	</button>
              </Nav.Link>
              <Nav.Link eventKey = 'Account' >
             		<Button onClick = {onUserClickHandler} className = 'rounded-circle p-2'>
    		          <BsFillPersonFill size = '2.5em' color = '#19647e'/>
      		      </Button>
              </Nav.Link>
            </Nav>
          </NavBar.Collapse>  
        </NavBar>
      </Col>
    </Row>
		)
}