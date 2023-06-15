import './App.css'
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Allusers from './Pages/Allusers';
import Transaction from './Pages/Transaction';
import UserView from './Components/UserView';
import PageNotFound from './Components/404';
import AllTransaction from './Pages/AllTransaction';
const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path={'/'} element={<Home />}/>
      <Route path={'/allusers'} element={<Allusers />}/>
      <Route path={'/transaction'} element={<Transaction />} />
      <Route path="/user/:id" element={<UserView />} />
      <Route path="/history" element={<AllTransaction />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App