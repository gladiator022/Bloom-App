import React, { Component } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

import ProfileContain from './Profile_contain'

class Profile extends Component {
    render() {
        return (
            <div className="welcome">
                <Sidebar/>
                <ProfileContain/>
            </div>
        )
    }
}

export default Profile
