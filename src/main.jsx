import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { IdProvider } from './IdContext.jsx';
import Main from './components/details/Main.jsx';
import About from './components/about/About.jsx';
import Pricing from './components/pricing/Pricing.jsx';
import Login from './components/login/Login.jsx';
import AccountPage from './components/account/AccountPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <IdProvider>
<Router>
  <Routes>
    <Route path='/' element = {<App/>} />
    <Route path='/details' element = {<Main/>} />
    <Route path='/about' element = {<About />} />
    <Route path='/pricing' element = {<Pricing />} />
    <Route path='/login' element = {<Login />} />
    <Route path='/myaccount' element = {<AccountPage />} />
  </Routes>
</Router>
</IdProvider>
)
