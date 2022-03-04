import {useState} from "react"



function Counter(){

    const [counter, setCounter] = useState(0)

    const multiply = () => {
        // console.log("counter :", counter)
        setCounter(counter * 2)
    }

    // const decrease = () => {
    //     if(counter > 0){
    //         setCounter(counter - 1)
    //     }
    // }
 
   const add = (value) => {
        // console.log("counter :", counter)
        setCounter(counter + value)
    }


    return (

        <div>
            <h1>Counter : {counter}</h1>
            <button onClick={
                () => {
                    add(1)
                }
            }>      
                Add 1
            </button>
            <br />
            <button onClick={
                () => {
                    if(counter > 0){
                        add(-1)
                    }
                }
            }>
                remove 1
            </button>
            <br />
            <button onClick={
                () => {
                   multiply()
                }
            }>
                Multiply by 2
            </button>
        </div>        

    )
}

export default Counter