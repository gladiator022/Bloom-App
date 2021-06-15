import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
            <div className="main">
                <div className="headline">
                    <h1>Focus On Knowledge</h1>
                </div>
                <div className="alert">
                    <p>Time for Revisions</p>
                </div>
                <div className="get-started">
                    <a href="/" className="btn">Get Started</a>
                    <i className="fas fa-arrow-right fa-lg"></i>
                </div>
                <div className="contrib">
                    <p>Become a contributor by signing up now</p>
                </div>
                
        </div>
        )
    }
}

export default Home
