import { useParams } from "react-router-dom"
import { useEffect } from "react"


export const ProductDetails = () => {

    const {id} = useParams()

    useEffect(() => {
        console.log("Mounted")
    },[])


    return <div>Product Details : {id}</div>

}