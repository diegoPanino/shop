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