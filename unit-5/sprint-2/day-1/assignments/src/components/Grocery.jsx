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

  const deletgroc = (id) => {

  }

  return (
    <div className="Grocery">
      <GroceryInput addto = {addto} />
        <div id="output">
            {groceryData.map((e) => (
                <GroceryList value={e} key={e.id} />
        ))}</div>
      
    </div>
  );
}

export default Grocery;
