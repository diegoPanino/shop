import {useState,useEffect,useRef} from 'react'

export function getAuth(){
	const storage = window.localStorage
	const isLogged = storage.getItem('username') && storage.getItem('email') ? true : false
	return isLogged
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