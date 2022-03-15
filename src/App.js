import './app.scss';
import React from "react"
import {Route,Routes,Outlet} from 'react-router-dom'
import Header from '@component/header/Header.js'
import MainNavigationBar from '@component/navs/MainNavigationBar.js'
import Home from '@pages/home/Home.js'
import CartPage from '@pages/cart/CartPage.js'
import LogInForm from '@pages/login/LogInPage.js'
import SignUpForm from '@pages/register/SignUpPage.js'
import RequireAuth from '@component/auth/RequireAuth.js'
import UserInfoPage from '@pages/userInfo/UserInfoPage.js'
import ShopHistoryPage from '@pages/shopHistory/ShopHistoryPage.js'
import WishListPage from '@pages/wishlist/WishListPage.js'
import LogoutPage from '@pages/logout/LogoutPage.js'
import PersistLogin from '@component/persistLogin/PersistLogin.js'
//import AccountNav from '@component/navs/AccountNav.js'

export default function App(){
  return (
        <Routes>
         {/*public route*/}

          <Route path = '/' element = {<Layout />}>  
            <Route index element = { <Home/> }/>
            <Route path = 'cart' element = { <CartPage/> }/>
            <Route path = 'login' element = { <LogInForm/> }/>
            <Route path = 'signup' element = { <SignUpForm/> }/>
            {/*private route*/}
            <Route element = {<PersistLogin/>}>
              <Route element = {<RequireAuth/>}>
                <Route path = 'user/info' element = {<UserInfoPage/>}/>
              </Route>
              <Route element = {<RequireAuth/>}>
                <Route path = 'user/history' element = {<ShopHistoryPage/>}/>
              </Route>
              <Route element = {<RequireAuth/>}>
                <Route path = 'user/wishlist' element = {<WishListPage/>}/>
              </Route>
              <Route element = {<RequireAuth/>}>
                <Route path = 'user/logout' element = {<LogoutPage/>}/>
              </Route>
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

/*
export default function App(){
  return (
      <Routes>
        <Route path = '/' element = { <Layout/> }>
          <Route index element = {<Home />}/>
          <Route path = 'cart' element = { <CartPage/> }/>
          <Route path = 'login' element = { <LogInForm/> }/>
          <Route path = 'signup' element = { <SignUpForm/> }/>
          <Route path = 'user' element = {<RequireAuth/>}>
            <Route path = 'info' element = {<UserInfoPage/>}/>
            <Route path = 'history' element = {<ShopHistoryPage/>}/>
            <Route path = 'wishlist' element = {<WishListPage/>}/>
            <Route path = 'logout' element = {<LogoutPage/>}/>
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
*/

//--------------------------------------------------------------//
/*

export default function App(){
  return (
        <>
        <Header className = 'container-fluid' />        
        <MainNavigationBar />
        <Routes>
        <Route path = '/' element = { <Home/> }/>
        <Route path = 'cart' element = { <CartPage/> }/>
        <Route path = 'login' element = { <LogInForm/> }/>
        <Route path = 'signup' element = { <SignUpForm/> }/>
        <Route element = {<AccountNav/>}>
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
      </Routes>
      </>
  )
}
*/