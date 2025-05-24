import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home.jsx'
import SingIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import Profile from './pages/Profile.jsx'
import About from './pages/About.jsx'


export default function App() {
  return (
    <>
      <h3 className='text-red-600'>Appaaa</h3>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/sign-in' element={<SingIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
