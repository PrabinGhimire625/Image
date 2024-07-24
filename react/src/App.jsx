import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home.jsx'
import {AuthState} from "./context/AuthState.jsx"
import UpdateImage from './pages/UpdateImage.jsx'

const App = () => {
  return (
  <>
    <AuthState>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/updateImage/:id" element={<UpdateImage/>}/>
        </Routes>
      </BrowserRouter>
    </AuthState>
  </>
  )
}

export default App
