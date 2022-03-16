import { useContext } from "react"
import { CartContex } from "../../contexts/CartContext"



export const Cart = () => {

    const value = useContext(CartContex)


    return <h1>No. items in cart : {value} </h1>

}