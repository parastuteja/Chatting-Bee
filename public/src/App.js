import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Chat from './pages/Chat'
import { BrowserRouter } from 'react-router-dom'
import SetAvatar from './pages/SetAvatar'

function App() {
  return (
    <BrowserRouter>  <Routes>
      <Route path='/Register'element={<Register/>}></Route>
      <Route path='/Login'element={<Login/>}></Route>
      <Route path='/'element={<Chat/>}></Route>
     <Route path='/SetAvatar'element={<SetAvatar/>}></Route>
    </Routes>
    </BrowserRouter>
  
  )
}

export default App