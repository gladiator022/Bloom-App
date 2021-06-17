import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Profile from '../images/front_img.png'
import logo from '../images/Bloom.png'
import '../styles/signup.css'
class SignUp extends Component {
    render() {
        return (
            <div className='welcome'>
                <div id='side' >
                    <div>
                        <h1>Welcome Onboard</h1>
                        <h1>Let's Revise</h1>
                    </div>
                </div>
                <div id='contain'>
                    <div className='wlcmfamily'>
                        <div className='' id = 'logo1'>
                            <div><img src = {logo} alt="" /></div>
                        </div>
                        <div>
                            <h4>Welcome to Family</h4>
                            <h5>Let's glow together</h5>
                            <p>kkldldldjl</p>
                        </div>
                    </div>
                    <div className=' container signupform'>
                        <div className="row">
                            <div className ='col-md-12'>    
                                <i className="fa fa-car" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="row">
                            <div className ='col-md-12'>
                            <i className="fa fa-car" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="row">
                            <div className ='col-md-12'>
                            <i className="fa fa-car" aria-hidden="true"></i>
                            <input></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className ='col-md-12'>
                            <i className="fa fa-car" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="row">
                            <div className ='col-md-12'>
                            <i classname="fa fa-car" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div className='signupsubmit'>

                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp
