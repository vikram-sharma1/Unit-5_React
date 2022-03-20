import { createContext } from "react"
import { useState } from "react"


export const CartContex = createContext()


export const CartContexProvider = ({children}) => {


    const [cart, setCart] = useState(1)

    const handleChange = (value) => {
        setCart(cart + value)
    }

    return <CartContex.Provider value={{cart, handleChange}}>
        {children}
    </CartContex.Provider>

}