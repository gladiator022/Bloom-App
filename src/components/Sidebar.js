import React, { Component } from 'react'
import logo from '../images/Bloom.png'
import arrow from '../images/ico_arrow.png'
class Sidebar extends Component {
    render() {
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
                    <div>
                        
                    </div>
                </div>                                                  
            </div>
        )
    }
}

export default Sidebar
