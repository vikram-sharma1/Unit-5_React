import { useContext } from "react"
import { CartContex } from "../../contexts/CartContext"


export const Button = () => {

    const {handleChange} = useContext(CartContex)

    return <button onClick={() => {
        handleChange(1)
    }}>Add to cart</button>

}