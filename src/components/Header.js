import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='your_Account'>
                    your Account
                </div>
                <div className='Username'>
                    <i className="fa fa-user" aria-hidden="true"></i>
                    Username
                </div>
            </div>
        )
    }
}

export default Header
