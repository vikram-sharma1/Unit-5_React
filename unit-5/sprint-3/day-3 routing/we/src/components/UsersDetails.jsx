import { useParams } from "react-router-dom"

export const UsersDetails = () => {
    const {id} = useParams()

 

    return <div>User Id : {id}</div>
}