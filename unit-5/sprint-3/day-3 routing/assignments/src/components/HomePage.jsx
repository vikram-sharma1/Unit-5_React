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
    // setData([...])
    console.log(res.data)
  })
 }

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
        {products.map((el) => {
          // return <Link to={``}>{/* Show product image and name */}</Link>;

          return <h1>{el}</h1>
        })}
      </div>
    </>
  );
};
