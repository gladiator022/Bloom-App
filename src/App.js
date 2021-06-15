import React, { Component } from 'react';

//import Home from './components/Home';
//import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import './styles/fontawesome-free-5.15.1-web/css/fontawesome.css'
import './styles/fontawesome-free-5.15.1-web/css/brands.css'
import './styles/fontawesome-free-5.15.1-web/css/solid.css'
import './styles/bootstrap.css'
import './styles/welcome.css'
import './App.css';
import './styles/wlco_contain.css'
import Profile from './components/Profile';


class App extends Component {
	render(){
		return (
			<div>
				<Profile/>
				
			  	{/*<Navbar/><Welcome/> 
				<Home/>*/}
			</div>
		  );
	}
  
}

export default App;
