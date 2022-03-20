import { Link } from "react-router-dom"


export const Navbar = () => {


    return <nav>

    <div className="navbar">
       <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product/:id">Product Details</Link>
        <Link to="/users">Users</Link>

    </div>

    </nav>

}