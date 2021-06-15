import React, { Component } from 'react'
import logo from '../images/Bloom.png'

export class Navbar extends Component {
    render() {
        return (
        <nav>
            <div className="logo">
                <img src={logo} alt="logo"/>
                Bloom
            </div>
            <div className="bars-to-side-menu">
                <i id="click" className="fas fa-bars manage"></i>
                <div className="side-links" id="side">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Library</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Login</a></li> 
                </div>
            </div>
            <ul className="nav-links">
                <li>Home</li>
                <li>Library</li>
                <li>About</li>
                <li>Login</li>
            <li><button>Sign up</button></li>  
            </ul>
    </nav>
        )
    }
}

export default Navbar
