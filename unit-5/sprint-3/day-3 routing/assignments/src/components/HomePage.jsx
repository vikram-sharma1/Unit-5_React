import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";


export const HomePage = () => {

const [data, setData] = useState([])

 useEffect(()=>{
   getdata()
 },[])

 const getdata = () => {
  axios.get("http://localhost:3001/products").then((res)=>{
    setData([...res.data])
    
    
  })
 }
//  console.log(data)

 
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "175px",
        }}
      >
        {/* Iterate over products and show links */}
        {data.map((el) => {
          return <Link to={`/products/${el.id}`} key={el.id}>



          <div>
            <h1>{el.name}</h1>
            <img src={el.src} alt="hello" />
          </div>
          </Link>;

          // return <h1>{el}</h1>
        })}
      </div>
    </>
  );
};
