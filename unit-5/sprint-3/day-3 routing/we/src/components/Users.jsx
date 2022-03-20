import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"



export const Users = ()=>{

    // console.log("kist")

    const [list, setList] = useState([])

    useEffect(()=>{
        axios.get("https://reqres.in/api/users").then(({data})=>{
            // console.log(res.data)
            setList([...data.data])
        })
    },[])


    return <div>{list.map((e)=>(

        <div>
            <Link to={`/users/${e.id}`} key={e.id}>{e.id}.{e.first_name}</Link>
        </div>
    ))}</div>
}