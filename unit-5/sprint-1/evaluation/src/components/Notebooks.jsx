import { useState } from "react";


function Notebooks() {

    const [Notebooks, NotebooksCounter] = useState(44)

    const incredecre = (value) => {
        NotebooksCounter(Notebooks + value)
    }



    return (
        <div className="items">
        <span>Notebooks:</span>
        <button className="addNotebook" onClick={()=>incredecre(1)}>
            +
        </button>
        <button className="remNotebook" onClick={()=>incredecre(-1)}>
            -
        </button>
        <span className="totalNotebooks">{Notebooks}</span>
    </div>
    );
  }
  
  export default Notebooks;
  