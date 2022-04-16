
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>

        
        <Link to='/'  ><button className='buttNav'>HomePage</button></Link>
        <Link to='/add-city'><button className='buttNav'>Add-City</button></Link>
        <Link to='/add-country'><button className='buttNav'>Add-Country</button></Link>

        
        
    </div>
  )
}

export default Navbar