import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import NavBar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav'
import SearchInput from './SearchInput.js'
import {BsFillCartFill,BsFillPersonFill,BsFillMenuAppFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

export default function MainNavigationBar(){

  const onSearchHandler = input =>{
      console.log('MainNavigationBar.js.js,input:',input)
  }
  const onCartClickHandler = () =>{
      console.log('MainNavigationBar.js cart click')
  }
  const onUserClickHandler = () =>{
    console.log('MainNavigationBar.js user click')
  }


  return (
    <Container fluid>
      <Row className = 'align-items-baseline'>
        <Col xs = {10} sm = {10}  >
          <SearchInput onSearch = {(input)=>onSearchHandler(input)} />
        </Col>
        <Col xs = {1} sm = {2} >
          <NavBar expand = 'sm' collapseOnSelect >
            <NavBar.Toggle className = 'navbar-toggler'>
              <BsFillMenuAppFill size = '2em' color = '#ffd685' />
            </NavBar.Toggle>
            <NavBar.Collapse>
              <Nav>
                <Nav.Item>
                  <Nav.Link as = {Link} to ='/cart' eventKey = 'cart'>
                    <button onClick = {onCartClickHandler} className = 'bg-primary rounded-circle p-2'>
                      <BsFillCartFill size = '2.5em' color = '#19647e'/>
                    </button>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as = {Link} to ='/login' eventKey = 'account'>
                    <Button onClick = {onUserClickHandler} className = 'rounded-circle p-2'>
                      <BsFillPersonFill size = '2.5em' color = '#19647e'/>
                    </Button>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </NavBar.Collapse>
          </NavBar>
        </Col>
      </Row>
    </Container>
    )
}