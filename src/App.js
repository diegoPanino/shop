import './app.scss';
import React from "react"
import {Route , Routes , Outlet } from 'react-router-dom'
import Header from '@component/header/Header.js'
import MainNavigationBar from '@component/navs/MainNavigationBar.js'
import CartPage from '@pages/cart/CartPage.js'
import LogInForm from '@pages/login/LogInPage.js'
import SignUpForm from '@pages/register/SignUpPage.js'
import RequireAuth from '@component/auth/RequireAuth.js'
import UserInfoPage from '@pages/userInfo/UserInfoPage.js'
import ShopHistoryPage from '@pages/shopHistory/ShopHistoryPage.js'
import WishListPage from '@pages/wishlist/WishListPage.js'
import LogoutPage from '@pages/logout/LogoutPage.js'
import AccountNav from '@component/navs/AccountNav.js'


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
      <Outlet/>
    </>
      )
}

