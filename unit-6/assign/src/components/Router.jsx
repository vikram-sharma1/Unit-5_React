import React from 'react'
import { Route,Routes } from 'react-router-dom'
import AddCity from './AddCity'
import AddCountry from './AddCountry'
import Homepage from './Homepage'
import Navbar from './Navbar'

const Router = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element = {<Homepage />}></Route>
        <Route path='/add-city' element = {<AddCity/>}></Route>
        <Route path='/add-country' element = {<AddCountry />}></Route>
    </Routes>
    
    </>
    
  )
}

export default Router