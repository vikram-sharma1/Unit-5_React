import { useState } from "react";
import GroceryInput from "./GroceryInput";
import GroceryList from "./GroceryList";
import { nanoid } from 'nanoid'

function Grocery() {
  const [groceryData, setGroceryData] = useState([]);

  const addto = (data) => {

    const toggle = {
      id:nanoid(),
      title : data,
      status : false,
    }
    setGroceryData([...groceryData,toggle])
  }

  const deletgroc = (data) => {

    let x = groceryData.filter((e) => {
        return e.id != data
    })

    // console.log(id)

    setGroceryData([...x])

  }

  return (
    <div className="Grocery">
      <GroceryInput addto = {addto} />
        <div id="output">
            {groceryData.map((e) => (
                <GroceryList value={e} key={e.id}  value2 = {deletgroc} />

        ))}</div>
      
    </div>
  );
}

export default Grocery;
