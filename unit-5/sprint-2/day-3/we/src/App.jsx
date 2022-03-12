import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Stopwatch } from './components/Stopwatch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Stopwatch startTimee={10} endTime={20}/>
    </div>
  )
}

export default App
