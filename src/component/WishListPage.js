import React from 'react'
//import Container from 'react-bootstrap/Container'
import Header from './Header.js'
import MainNavigationBar from './MainNavigationBar.js'

export default function WishListPage(){
	console.log('wishlist')
	return (
		<>
			<Header />
			<MainNavigationBar />
			<p>WishListPage</p>
		</>
		)
}