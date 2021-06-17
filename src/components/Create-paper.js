import React, { Component } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

class Create_paper extends Component {
    render() {
        return (
            <div className="welcome">
                <Sidebar/>
                <div className='wlc_contain'>
                    <Header/>
                    <div className='contain_paper'>
                        <div className='div_form_paper'>
                                <p>Your Paper</p>
                                <div className='container' id='form_paper'>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <label>Examination</label>
                                            <select id="firstname"type="text" >
                                                <option></option>
                                                <option>maths</option>
                                                <option>maths</option>
                                            </select>
                                        </div> 
                                    </div>
                                    <div className="row" >
                                        <div className="col-sm-7">
                                            <label>Subjects</label>
                                            <select id="firstname"type="text" >
                                                <option></option>
                                                <option>maths</option>
                                                <option>maths</option>
                                            </select>
                                        </div> 
                                        <div className="col-sm-5">
                                        <label>Year</label> 
                                            <input id="lastname" type="date"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <label>Title</label>
                                            <input id="firstname"type="text" />
                                        </div> 
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <label>Slug</label>
                                            <input id="firstname"type="text" />
                                        </div> 
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <label>Description</label>
                                            <input id="firstname"type="text" />
                                        </div> 
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                    <div className='crtpaper'>
                        <button className="btn btn-primary">Create Paper</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Create_paper
