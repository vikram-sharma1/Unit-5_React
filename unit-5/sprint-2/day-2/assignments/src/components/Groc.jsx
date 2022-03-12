import { useEffect, useState } from "react"
const axios = require('axios')


export function Groceriesinput(){
    const [text, setText] = useState([""])
    const [groceries, setGroceries] = useState([])
    
    const [page, setPage] = useState(1)

    useEffect(()=>{
        getData()
    }, [page])


    const getData = () => {
        axios.get(`http://localhost:3001/groceries?_limit=3&_page=${page}`).then((res) => {
            setGroceries(res.data)
            // console.log(res.data)
        })
    }






    return (
        <div>
            <input type="text" placeholder="Groceries" onChange={ (e) => {
                setText(e.target.value)
            }}/>
            <button 
                onClick={()=>{

                        // fetch("http://localhost:3001/groceries", {
                        //     method: "POST",
                        //     body:JSON.stringify({title:text, purchased:false}),
                        //     headers:{
                        //         "content-type" : "application/json"
                        //     }

                        // })
                        axios.post("http://localhost:3001/groceries", {title:text}).then(()=>{
                                getData()
                        })

                }}
            >Add Grocery</button>
    <div className="out">
                {groceries.map((e)=>{
                    // console.log(e)
                    return <div  key={e.id}>{
                        e.title}
                        
                        </div>
                })}
                <button onClick={()=> 
                    setPage(page - 1) 
                }>Prev</button>
                <button onClick={()=>{
                    setPage(page + 1)
                }}>Next</button>
    </div>

        </div>

    )

}