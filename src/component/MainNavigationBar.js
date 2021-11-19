import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import SearchInput from './SearchInput.js'
import {BsFillCartFill,BsFillPersonFill} from 'react-icons/bs'

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
		<Row className='' sm={3}>
          <Col xs={8} sm={{span:6,offset:3}}>
            <SearchInput onSearch = {(input)=>onSearchHandler(input)} />
          </Col>
          <Col  xs={4} sm={3}>
            <Row sm={2}>
            	<Col sm={{span:1,offset:3}}>
            		<Button onClick = {onCartClickHandler} className = 'rounded-circle p-2'>
            			<BsFillCartFill size = '2.5em' color = '#19647e'/>
            		</Button>
            	</Col>
            	<Col sm = {{span:1,offset:3}}>
            		<Button onClick = {onUserClickHandler} className = 'rounded-circle p-2'>
            			<BsFillPersonFill size = '2.5em' color = '#19647e'/>
            		</Button>
            	</Col>
            </Row>
          </Col>
        </Row>
		)
}