import React, { Component,Fragment } from 'react'
import logo from '../images/Bloom.png'
import {Link,NavLink} from 'react-router-dom';


class Sidebar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

   
    render() {
        var navitem = document.getElementsByName('nav-item');
            
        return (
            <div className='sidebar'>
                <div className='row logo1'>
                    <div className='col-md-8' id = 'logo1'>
                        <img src = {logo} alt="" />
                        <p >Bloom</p>
                    </div>
                    <div id='arrow'><i className="fa fa-arrow-left" aria-hidden="true"/></div>
                </div> 
                <div className='sidemenu'>
                    <p>Your papers</p>
                    <Fragment>
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <NavLink  to="#">Active link</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  to="#">Link</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="#">Disabled link</NavLink>
                            </li>
                        </ul>
                    </Fragment>
                </div>                                                  
            </div>
        )
    }
}

export default Sidebar
