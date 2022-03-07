import { useState } from "react";



function Books() {
    const [book, bookCounter] = useState(13)

    const incredecre = (value) => {
        bookCounter(book + value)
    }


    return (
        <div className="items">
        <span>Books:</span>
        <button className="addBook" onClick={()=>incredecre(1)}>
            +
        </button>
        <button className="remBook" onClick={()=>incredecre(-1)}>
            -
        </button>
        <span className="totalBooks">{book}</span>

    </div>
    );
  }
  

  export default Books;
  