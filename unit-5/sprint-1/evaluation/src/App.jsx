// import logo from './logo.svg';
import './App.css';

import Books from "./components/Books"
import Pens from './components/Pens';
import Notebooks from './components/Notebooks';
import Inkpens from './components/Inkpens';

function App() {
  return (
    <div className="App">
      <Books/>
      <Pens/>
      <Notebooks/>
      <Inkpens/>
      <div className="total">148</div>
      
    </div>
  );
}

// count()
// function count(){
//   let count = document.querySelector(".totalPens").innerHTML
//   console.log('count:', count)

// }



export default App;
