import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Cart } from './components/cart/Cart'
import { Button } from './components/body/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Cart></Cart>
     <Button></Button>
    </div>
  )
}

export default App
