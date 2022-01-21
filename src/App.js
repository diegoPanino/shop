import './app.scss';
import React from "react"
import Header from './component/Header.js'
import MainNavigationBar from './component/MainNavigationBar.js'
import CartPage from './component/CartPage.js'
import LogInForm from './component/LogInForm.js'
import SignUpForm from './component/SignUpForm.js'
import RequireAuth from './component/RequireAuth.js'
import UserInfoPage from './component/UserInfoPage.js'
import ShopHistoryPage from './component/ShopHistoryPage.js'
import WishListPage from './component/WishListPage.js'
import LogoutPage from './component/LogoutPage.js'
import AccountNav from './component/AccountNav.js'
import {Route , Routes , Outlet } from 'react-router-dom'


export default function App(){
  return (
      <Routes>
        <Route path = '/' element = { <Layout/> }>
          <Route path = 'cart' element = { <CartPage/> }/>
          <Route path = 'login' element = { <LogInForm/> }/>
          <Route path = 'signup' element = { <SignUpForm/> }/>
          <Route element = { 
                                      <RequireAuth> 
                                        <AccountNav/>
                                      </RequireAuth>
                                    }
          >
            <Route path = 'user/info' element = { 
                                        <RequireAuth> 
                                          <UserInfoPage/>
                                        </RequireAuth>
                                      } 
            />
            <Route path = 'user/history' element = { 
                                        <RequireAuth> 
                                          <ShopHistoryPage/>
                                        </RequireAuth>
                                      } 
            />
            <Route path = 'user/wishlist' element = { 
                                        <RequireAuth> 
                                          <WishListPage/>
                                        </RequireAuth>
                                      } 
            />
            <Route path = 'user/logout' element = {
                                        <RequireAuth> 
                                          <LogoutPage/>
                                        </RequireAuth>
                                      }
            />
          </Route>
        </Route>
      </Routes>
  )
}

function Layout(){
	return(
	<>
	  <Header className = 'container-fluid' />        
      <MainNavigationBar />
      <Outlet />
    </>
      )
}

