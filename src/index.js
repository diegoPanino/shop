import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
  	<BrowserRouter>
  		<App />
  	</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CartPage from './component/CartPage.js'
import AccountPage from './component/AccountPage.js'
import UserInfoPage from './component/UserInfoPage.js'
import ShopHistoryPage from './component/ShopHistoryPage.js'
import WishListPage from './component/WishListPage.js'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter , Route , Routes , Outlet} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<App/>}/>
        <Route path = '/cart' element = {<CartPage/>}/>
        <Route path = '/login' element = {<AccountPage/>}/>
        <Route path = '/user' element = {<UserInfoPage/>}/>
        <Route path = '/history' element = {<ShopHistoryPage/>}/>
        <Route path = '/wishlist' element = {<WishListPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/