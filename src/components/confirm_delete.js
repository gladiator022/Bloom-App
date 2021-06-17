import React, { Component } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import delet from '../images/welcome.png'

class confirmDel extends Component {
    render() {
        return (
            <div className="welcome">
                <Sidebar/>
                <div className='wlc_contain'>
                    <Header/>
                    <div className='contain'>
                        <img id='delete' src={delet} alt=''/>
                    </div>
                    <div className='crtpaper'>
                        <p>You don't have any paper yet</p>
                        <button className="btn btn-primary">Create Paper</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default confirmDel
