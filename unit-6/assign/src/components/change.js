import {useState} from 'react'

export const Change =()=>{
    const [data,setData] =useState({
        player1:"",
        player2:"",
        status : false
    })

    const handleChange=(e)=>{
        const {id,value}=e.target;
        setData({...data,[id]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setData({...data,status:true})
    }


    return(
        <div>
            <form onSubmit ={handleSubmit}>
                <input type="text" id="player1" value={data.player1} onChange={handleChange}/>
                <input type="text" id="player2" value={data.player2} onChange={handleChange}/>
                <input type="submit" placeholder="submit"/>
            </form>
            {data.status ? (<p>Hello</p>):(<p>No hello</p>)}

        </div>
    )
}