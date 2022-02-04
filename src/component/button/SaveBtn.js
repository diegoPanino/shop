import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default function SaveBtn({breakpoint,className = false,disabled,label}){
	return (
		<Col sm = {breakpoint?.sm} md = {breakpoint?.md} lg = {breakpoint?.lg}>
			<Button type = 'submit' className = {className ? className : 'my-4 p-2 fscaling-2 fw-bold' }
					disabled = {disabled}>
				{label}
			</Button>
		</Col>
		)	
}
