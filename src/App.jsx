import React from 'react'
import Home from './Home'
import Form from './Form'
import Nav from './Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Light from './Light'

const App = () => {
  return (
    <div>

    <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Form' element={<Form/>}/>
            <Route path='/Light' element={<Light/>}/>
        </Routes>

    </BrowserRouter>
       

    </div>
  )
}

export default App