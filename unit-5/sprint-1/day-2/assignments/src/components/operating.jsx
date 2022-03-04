

function Call(props){
    const list = props.data

    return(
        <div>
            <h1>{props.value}</h1>
            <ul>
            {list.map(e =>{
                    return <li>{e}</li>
            })}
            </ul>
        </div>

    )
}



export default Call