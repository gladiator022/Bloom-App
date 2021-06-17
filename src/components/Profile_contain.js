import React, { Component } from 'react'
import Header from './Header'
import Profile from '../images/front_img.png'
import {Link,NavLink} from 'react-router-dom'
 class ProfileContain extends Component {
    render() {
        return (
            <div className='wlc_contain'>
                <Header/>
                <div className='contain'>
                        <div className='your_profile'>
                            <p>Your Profile</p>
                                <img id='Profile' src={Profile} alt=''/>                            <div className='container' id='info_profil'>
                                <div className="row" >
                                    <div className="col-sm-7">
                                        <label>first</label>
                                        <input id="firstname"type="text" />
                                    </div> 
                                    <div className="col-sm-5">
                                    <label>last</label> 
                                        <input id="lastname" type="text"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <label>About</label>
                                        <input id="firstname"type="text" />
                                    </div> 
                                </div>
                                
                            </div>
                            
                        </div>
                </div>
                <div className='crtpaper'>
                    <button className="btn btn-primary"><Link to="/welcome">Update Profile</Link></button>
                </div>
            </div>
        )
    }
}

export default ProfileContain
