import axios from 'axios'
import React, { useState } from 'react'

const AddCountry = () => {

const [country, setCountry] = useState("")

let api = `https://localhost:8080/country`

    // const handleChange = (e) => {

    //     const {id,value} = e.target
    //     setCountry({
    //         ...country,
    //         [id]:value
    //     })
    // }


    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`${api}`,{name:country}).then(()=>{
            alert("Country Added")
            // setCountry({name:""})
        })
    }

  return (
   
    <h1>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <label>Add Country</label>
                 <br />
            <input type="text" 
                id={"country"} 
                value={country.name} 
                // className='countryNameInp' 
                onChange={(e)=>setCountry(e.target.value)}  />
                  <br />
            <input type="submit" value={"Enter"} className='countryNameInp'/>
        </form>
    </h1>
  
  )
}

export default AddCountry