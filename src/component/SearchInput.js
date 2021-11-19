import React,{useState} from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import {BsSearch} from 'react-icons/bs'

export default function SearchInput(props){
	const {onSearch} = props
	const [input,setInput] = useState('')

	const onChangeHandler = e =>{
		const {value} = e.target
		setInput(value)
	}
	const onKeyPressHandler = e =>{
		if(e.key === 'Enter')
			onClickHandler()
	}
	const  onClickHandler = () =>{
		onSearch(input)
	}

	return (
		<InputGroup>
			<FormControl as='input' type = 'search' className = 'fs-4'
      			onChange = {onChangeHandler}
      			onKeyPress = {onKeyPressHandler}
      			placeholder="What do you desire?"
			    aria-label="Products Search"
    		/>
    		<Button as = 'button' onClick = {onClickHandler} size='sm'>
    			<BsSearch color = '#19647e' size = '2em'/>
    		</Button>
		</InputGroup>	
		)
}