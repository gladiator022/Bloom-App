import React, { Component } from 'react'
import Header from './Header'
import Welc from '../images/welcome.png'

class Welcome_contain extends Component {
    render() {
        return (
            <div className='wlc_contain'>
                <Header/>
                <div className='contain'>
                    <img id='welc' src={Welc} alt=''/>
                </div>
                <div className='crtpaper'>
                    <p>You don't have any paper yet</p>
                    <button className="btn btn-primary">Create Paper</button>
                </div>
            </div>
        )
    }
}

export default Welcome_contain
