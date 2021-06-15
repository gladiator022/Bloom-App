import React, { Component } from 'react'
import Sidebar from './Sidebar'
import WelcomeContain from './Welcome-contain'

class Welcome extends Component {
    render() {
        return (
            <div className="welcome">
                <Sidebar/>
                <WelcomeContain/>
            </div>
           
        )
    }
}

export default Welcome
