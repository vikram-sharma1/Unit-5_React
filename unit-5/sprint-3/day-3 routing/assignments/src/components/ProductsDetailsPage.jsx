import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { NotFoundPage } from "./NotFoundPage";


export const ProductsDetailsPage = () => {

  const {id} = useParams()
  // console.log({id})
  
  const [product, setProduct] = useState({})
  const [found, setFound] = useState(true)

  useEffect(()=>{
    getdata()
  },[])


  
 
  const getdata = () => {
   axios.get(`http://localhost:3001/products/${id}`).then((res)=>{
    //  console.log("line 16",res.data)
    setProduct(res.data)



    
    setFound(true)
     
   }).catch((err)=>{
    console.log(err)
    setFound(false)

   })
  }
  // console.log("line 24" ,found)

  return (
    <>
     {found==true ? ( <div
        style={{
          display: "flex",
          paddingTop: "50px",
          justifyContent: "center",
          textAlign: "left",
        }}
      >
        <img src={""} alt="" />
        <div className="productDetails" style={{ padding: "20px" }}>
          <div>
            <h2 className="productName">name : {product.name}</h2>
            <h5 className="productPrice">Price : {product.price}</h5>
          </div>
          <h5><img src={product.src} alt="" /></h5>
          <div style={{ width: "700px", paddingLeft: "30px" }}>
            {/* Show Product specification here */}
          </div>
        </div>
      </div>):(
        <div>
          <NotFoundPage/>
        </div>
      )}
    </>
  );
};
