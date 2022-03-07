import { useState } from "react";

// import {BookCount} from "./totalCount"


function Inkpens() {

    const [inkPen, inkPenCounter] = useState(78)

    const incredecre = (value) => {
        inkPenCounter(inkPen + value)
    }


    return (
        <div className="items">
        <span>Inkpens:</span>
        <button className="addInpen" onClick={()=>incredecre(1)}>
            +
        </button>
        <button className="remInpen" onClick={()=>incredecre(-1)}>
            -
        </button>
        <span className="totalInkpens">{inkPen}</span>
        {/* <BookCount count = {inkPen}/> */}
    </div>
    );
  }
  
  export default Inkpens;
  