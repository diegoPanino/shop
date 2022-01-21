import React,{useState} from 'react'
import Col from 'react-bootstrap/Col'

export default function UserInfoPage(){
	console.log('info')
	const [state,setState] = useState(10)
	return (
		<Col sm = {{offset:1,span:8}} className = 'bg-surface'>
			<p>UserInfoPage</p>
			<button onClick = {()=>setState(prev=>prev+1)}>click</button>
			<p>state:{state}</p>
		</Col>
		)
}