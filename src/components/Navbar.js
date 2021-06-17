import React, { Component } from 'react'
import logo from '../images/Bloom.png'
import {Link,NavLink} from 'react-router-dom'
export class Navbar extends Component {
    render() {
        return (
        <nav>
            <div className="logo">
                <img src={logo} alt="logo"/>
                Bloom
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/createpaper">Library</Link></li>
                <li><Link to="/welcome">About</Link></li>
                <li><Link to="/createpaper">Login</Link></li> 
                <li><button><Link to="/profile">Sign up</Link></button></li>  
            </ul>
    </nav>
        )
    }
}

export default Navbar
