import React from 'react'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Orders from './pages/orders/Orders'
import Add from './pages/add/Add'
import List from './pages/lists/List'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';

const url = "https://ecommerce-app-back-end.onrender.com";

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Navbar/>

      <hr />
      <div className='app-content'>
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add url={url}/>} />
          <Route path="/list" element={<List url={url}/>} />
          <Route path="/orders" element={<Orders url={url}/>} />
        </Routes>
      </div>
      
    </div>
  )
}

export default App
