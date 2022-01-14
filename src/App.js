import './app.scss';
import React, { useEffect, useState } from "react"
import Header from './component/Header.js'
import MainNavigationBar from './component/MainNavigationBar.js'
import CartPage from './component/CartPage.js'
import LogInForm from './component/LogInForm.js'
import SignUpForm from './component/SignUpForm.js'
import RequireAuth from './component/RequireAuth.js'
import UserInfoPage from './component/UserInfoPage.js'
import ShopHistoryPage from './component/ShopHistoryPage.js'
import WishListPage from './component/WishListPage.js'
import DashboardPage from './component/DashBoardPage.js'
import Test from './component/Test.js'
import {Route , Routes , Outlet , useLocation} from 'react-router-dom'


export default function App(){
  return (
      <Routes>
        <Route path = '/' element = { <Layout/> }>
          <Route path = 'cart' element = { <CartPage/> }/>
          <Route path = 'login' element = { <LogInForm/> }/>
          <Route path = 'signup' element = { <SignUpForm/> }/>
          <Route path = 'user' element = { 
                                      <RequireAuth> 
                                        <DashboardPage/>
                                      </RequireAuth>
                                    }
          >
            <Route path = 'info' element = { 
                                        <RequireAuth> 
                                          <UserInfoPage/>
                                        </RequireAuth>
                                      } 
            />
            <Route path = 'history' element = { 
                                        <RequireAuth> 
                                          <ShopHistoryPage/>
                                        </RequireAuth>
                                      } 
            />
            <Route path = 'wishlist' element = { 
                                        <RequireAuth> 
                                          <WishListPage/>
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

