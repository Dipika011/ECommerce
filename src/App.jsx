import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Pages/Signup';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import ProfileCard from './Pages/ProfileCard';
import Cart from './Pages/Cart';
import SimpleSlider from './Pages/SimpleSlider';
import ViewDetails from './Pages/ViewDetails';
const App = () => {

  return (
    <div>

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/home' element={<Home/>}/>
         <Route path='/login' element={<Login/>}/>
          <Route path='/profilecard' element={<ProfileCard />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/simpleslider' element={<SimpleSlider />} />
          <Route path='/details' element={<ViewDetails/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App