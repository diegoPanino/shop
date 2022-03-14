import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import NavBar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav'
import SearchInput from '@component/input/SearchInput.js'
import {BsFillCartFill,BsFillPersonFill,BsFillMenuAppFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import useAuth from '@hooks/useAuth.js'

export default function MainNavigationBar(){
  const {auth} = useAuth()

  const onSearchHandler = input =>{
      console.log('MainNavigationBar.js.js,input:',input)
  }

  return (
    <Container fluid className = 'my-5'>
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
                    <Button  className = 'bg-primary rounded-circle p-2'>
                      <BsFillCartFill size = '2.5em' color = '#19647e'/>
                    </Button>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as = {Link} to ={auth?.a ? 'user/info' : '/login'} eventKey = 'account'>
                    <Button  className = 'bg-primary rounded-circle p-2'>
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