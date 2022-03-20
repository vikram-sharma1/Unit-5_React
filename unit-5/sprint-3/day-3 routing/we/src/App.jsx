import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Hello } from './components/hello'
import { About } from './components/About'
import { Navbar } from './components/Navbar'
import { ProductDetails } from './components/ProductDetails'
import { Users } from './components/Users'
import { UsersDetails } from './components/UsersDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
        <Routes>

          <Route path='/' element={<Hello />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/users' element={<Users />}></Route>

          <Route path='/users/:id' element={<UsersDetails/>}></Route>

          <Route path='/product/:id' element={<ProductDetails />}></Route>

        </Routes>



    </div>
  )
}

export default App
