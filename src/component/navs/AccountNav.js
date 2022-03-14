import React,{useState,useRef,useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import {Link,Outlet,useLocation} from 'react-router-dom'
import {CSSTransition} from 'react-transition-group'


export default function AccountNav({user}){
	const location = useLocation()
	const [activeKey,setActiveKey] = useState(location.pathname)
	const [showInfoMenu,setShowInfoMenu] = useState(true)
	const infoMenuRef = useRef(null)

	useEffect(()=>{
		if(location.pathname.includes('info') && location.hash.length === 0){
			setActiveKey('info')
			setShowInfoMenu(true)
		}
	},[location])

	const onSelectHandler = key => {
		if(key.includes('info')) setShowInfoMenu(true)
		else setShowInfoMenu(false)
		setActiveKey(key)
	}

	return (
		<Container className={(activeKey === 'info') ?
		 'justify-content-center border border-start-0 border-bottom-0 border-secondary rounded navBarCornerLeft' :
		 'justify-content-center border border-start-0 border-bottom-0 border-secondary rounded'}>
			<Row xs = {1} sm = {2} >
				<Col xs = {1} sm = {3} className = 'ps-0 drop'>
					<Nav activeKey = {activeKey} onSelect = {onSelectHandler} className = 'flex-column accNavBar' >
						<Nav.Item>
							<Nav.Link as = {Link} to = 'user/info' eventKey = 'info' onClick = {()=>window.scroll(0,0)}
									  className = 'border-end border-secondary fs-2 text-center m-0 accountNavLink' >
									  My details
							</Nav.Link>
							<CSSTransition in = {showInfoMenu} timeout = {500}  unmountOnExit = {true} appear = {true}
										   className = 'subMenuAccAni' nodeRef = {infoMenuRef} >
								<div ref = {infoMenuRef}>
								<Nav.Link href = '#info/Email' 
									className = 'border-end border-secondary fs-5 text-center p-0 m-0 accountNavLink subAccountNavLink'>
									Email
								</Nav.Link>
								<Nav.Link href = '#info/Password' 
									className = 'border-end border-secondary fs-5 text-center p-0 m-0 accountNavLink subAccountNavLink'>
									Password
								</Nav.Link>
								<Nav.Link href = '#info/Address' 
									className = 'border-end border-secondary fs-5 text-center p-0 m-0 accountNavLink subAccountNavLink'>
									Address
								</Nav.Link>
								</div>
							</CSSTransition>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link as = {Link} to = 'user/history' eventKey = '/user/history'
									  className = 'border-end border-secondary fs-2 text-center m-0 accountNavLink' >
									  My Shop
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link as = {Link} to = 'user/wishlist' eventKey = '/user/wishlist'
									  className = 'border-end border-secondary fs-2 text-center m-0 accountNavLink' >
									  Wishlist
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link as = {Link} to = 'user/logout' eventKey = '/user/logout'
									  className = 'border-end border-secondary fs-2 text-center m-0 accountNavLink' >
									  Logout
							</Nav.Link>
					</Nav.Item>
					</Nav>
				</Col>
				<Col sm = {9} className = 'py-2 align-items-center'>
					<Outlet context = {user}/>
				</Col>
			</Row>
		</Container>
		)
}



/*<StaggeredMotion defaultStyles = {showInfoMenu ? 
															[{h:0,o:0},{h:0,o:0},{h:0,o:0}] : 
															[{h:30,o:1},{h:30,o:1},{h:30,o:1}] }
											styles = {prevInterpolateStyles => prevInterpolateStyles.map((_,i)=>{
												return i === 0
												? showInfoMenu ? 
													{h: spring(30),o:spring(1)} :
													{h:spring(0),o:spring(1)}
												: showInfoMenu ? 
													{h:spring(prevInterpolateStyles[i-1].h),o:spring(1)} :
													{h:spring(prevInterpolateStyles[i-1].h),o:spring(0)}
												})}
							>
							{interpolatingStyles =>
								<div>
									{interpolatingStyles.map((style,i)=>
										<Nav.Link  href={`#info/${subMenu[i]}`} key = {`${i}${subMenu[i]}`} 
										style = {{height: style.h,opacity:style.o}}
										className = 'border-end border-secondary fs-5 text-center p-0 m-0 accountNavLink subAccountNavLink' >
											{subMenu[i]}
										</Nav.Link>
								)}
								</div>
							}
							</StaggeredMotion>*/