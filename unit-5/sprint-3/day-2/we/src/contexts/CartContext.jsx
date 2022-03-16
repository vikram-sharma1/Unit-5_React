import { createContext } from "react"


const CartContex = createContext()


export const CartContexProvider = ({children}) => {

    return <CartContex.Provider value={0}>
        {children}
    </CartContex.Provider>

}