import { createContext } from "react"


export const CartContex = createContext()


export const CartContexProvider = ({children}) => {

    return <CartContex.Provider value={1}>
        {children}
    </CartContex.Provider>

}