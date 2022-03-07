import { useState } from "react";
import GroceryInput from "./GroceryInput";
import GroceryList from "./GroceryList";

function Grocery() {
  const [groceryData, setGroceryData] = useState([]);

  const addto = (data) => {
    setGroceryData([...groceryData,data])
  }

  return (
    <div className="Grocery">
      <GroceryInput addto = {addto} />
        <div id="output">
            {groceryData.map((e) => (
                <GroceryList value={e} />
        ))}</div>
      
    </div>
  );
}

export default Grocery;
