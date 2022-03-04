import logo from './logo.svg';
import './App.css';

import Call from "./components/operating"

function App() {

    const operating = "Mobile Operating System"
    const data1 = ["Android","BlackBerry","iPhone","Windows Phone"]

    const manufacturers = "Mobile Manufacturers"
    const data2 = ["Samsung","HTC","Micromax","Apple"]


  return(
   
      <div>
        <Call value = {operating} data = {data1}></Call>
        <Call value = {manufacturers} data = {data2}></Call>

      </div>
      
  )
}

export default App;
