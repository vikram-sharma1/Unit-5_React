import { useContext } from "react"
import { CartContex } from "../../contexts/CartContext"



export const Cart = () => {

    const {cart} = useContext(CartContex)


    return <h1>No. items in cart : {cart} </h1>

}