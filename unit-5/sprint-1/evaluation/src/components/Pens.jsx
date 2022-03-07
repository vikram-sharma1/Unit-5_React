import { useState } from "react";


function Pens() {

    const [Pens, PensCounter] = useState(10)

    const incredecre = (value) => {
        PensCounter(Pens + value)
    }

    return (
        <div className="items">
        <span>Pens:</span>
        <button className="addPen" onClick={()=>incredecre(1)}>
            +
        </button>
        <button className="remPen" onClick={()=>incredecre(-1)}>
            -
        </button>
        <span className="totalPens">{Pens}</span>
    </div>
    );
  }
  
  export default Pens;
  