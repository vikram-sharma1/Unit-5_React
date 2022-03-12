import { useState } from "react";


function GroceryList({value , value2}) {


  const [change, setChange] = useState()



  // console.log({value})

  const fun = (data) =>{
    if(data == true){
      setChange(false)
    }
    else{
      setChange(true)
    }
  }

    return (
      <div className="box">
       {value.title} - {change ? "Done" : "Not Done"}
       <button>Toggle</button>
       <button
          onClick={() => {
              value2(value.id)
          }}
        >Delete </button>
      </div>
    );
  }
  
  export default GroceryList;
