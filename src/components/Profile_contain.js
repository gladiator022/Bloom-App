import React, { Component } from 'react'
import Header from './Header'
import Profil from '../images/front_img.png'
 class ProfileContain extends Component {
    render() {
        return (
            <div className='wlc_contain'>
                <Header/>
                <div className='contain'>
                        <div className='your_profile'>
                            <p>Your Profile</p>
                                <img id='Profil' src={Profil} alt=''/>
                                <i id='change_profil' class="fa fa-phone" aria-hidden="true">change</i>
                            <div className='container' id='info_profil'>
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
                    <button className="btn btn-primary">Update Profile</button>
                </div>
            </div>
        )
    }
}

export default ProfileContain
