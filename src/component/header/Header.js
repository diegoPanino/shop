import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import logo from '@asset/img/logo.png'

export default function Header(){
	return(
		<Container fluid>
			<Row className='bg-secondary justify-content-sm-center mb-3'>
        		<Col sm={3} >
					<header>
	            		<Image fluid src = {logo} alt ='Emporium Logo' />
	         		</header>
	        	</Col>
	   		</Row>
	   	</Container>
		)
}