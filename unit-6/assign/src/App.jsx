import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import {AddCountry} from "./components/AddCountry/addCountry"
import {AddCity} from "./components/AddCity/addCity"
import { Navbar } from "./components/Navbar/navbar";
import {Home} from "./components/Hompage/Homepage"
import {CityUpdate} from  "./components/update/cityupdate"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route exact path="/add-country" element={<AddCountry/>}/>
          <Route exact path="/add-city" element={<AddCity/>}/>
          <Route path="/update/:id" element={<CityUpdate />} />
      </Routes>
    </div>
  );
}

export default App;
