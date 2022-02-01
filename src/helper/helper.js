import {useState,useEffect,useRef} from 'react'
import {reqAuth} from '../api/api.js'

export function getStorage(){
	const storage = window.localStorage
	return storage
}
export function getTokens(){
	const a = getA()
	const r = getR()
	return {a,r}
}
export function getA(){
	const storage = getStorage()
	return storage.getItem('a')
}
export function getR(){
	const storage = getStorage()
	return storage.getItem('r')
}
export function setA(a){
	const storage = getStorage()
	storage.setItem('a',a)
}
export function setR(r){
	const storage = getStorage()
	storage.setItem('r',r)
}
export function removeA(){
	const storage = getStorage()
	storage.removeItem('a')
}
export function removeR(){
	const storage = getStorage()
	storage.removeItem('r')
}

export async function getAuth(){
	try{
		const a = getA()
		const user = await reqAuth(a)
		return {data:user,status:true}
	}
	catch(err){
		return 	{data:err,status:false}
	}
}

export function useElementOnScreen(options){
	const containerRef = useRef(null)
	const [isVisible,setIsVisible] = useState(false)

	const callbackFunction = entries => {
		const [entry] = entries
		setIsVisible(entry.isIntersecting)
	}

	useEffect(()=>{
		const ref = containerRef.current
		const observer = new IntersectionObserver(callbackFunction,options)
		if(containerRef.current)
			observer.observe(containerRef.current)

		return () => {
			if(ref) 
				observer.unobserve(ref)
		}
	},[containerRef,options])

	return [containerRef,isVisible]
}

export function validateInputField(string,name){
	if(string.length <= 1)
			return false
		switch(name){
			case 'username':{
				const valid = string.search(/[^\w-]|(-)\1/) === -1 ? true : false
				return valid ? false : 'Username not valid'
			}
			case 'email':{
				// eslint-disable-next-line
				const valid = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/).test(string) 
				return valid ? false : 'Email not valid'
			}
			case 'psw': case 'newPsw': case 'confirmPsw':{
				const valid = (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).test(string)
				return valid ? false : 'Password has to be min 8 chars, at least one uppercase letter, one lowercase letter, one number and one special character'
			}
			case 'name': case 'surname': case 'street': case 'city': case 'province': case 'state':{
				const valid = (/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/g).test(string)
				return valid ? false : 'Char not allowed'
			}
			case 'phone': { 
				const valid = (/(^\+{1}[0-9]*$)|(^[0-9]*$)/g).test(string)
				return valid ? false : 'Only numbers'
			}
			case 'zip':{
				const valid = (/^[0-9]*$/g).test(string)
				return valid ? false : 'Only numbers'
			}
			case 'number':{
				const valid = (/^[0-9]*[/]?[0-9a-zA-Z]{1,2}$/g).test(string)
				return valid ? false : 'home number not valid'
			}
			case 'date':{ //need to be implemented
				return false
			}
			default: {return 'Looks like something is wrong!'}
		}
}