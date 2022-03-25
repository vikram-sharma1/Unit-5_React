import { store } from "../redux/store"

export const Counter = () => {

    console.log(store.getState())

    return (
        <div>
            <h1>Count : 0</h1>
            <button
                onClick={()=>{
                    // For adding 1 but later on..!!
                }}

            >Add 1</button>
        </div>
    )

}