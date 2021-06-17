import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import './styles/fontawesome-free-5.15.1-web/css/fontawesome.css'
import './styles/fontawesome-free-5.15.1-web/css/brands.css'
import './styles/fontawesome-free-5.15.1-web/css/solid.css'
import './styles/bootstrap.css'
import './styles/welcome.css'
import './App.css';
import './styles/wlco_contain.css'
import Profile from './components/Profile';
import CreatePaper from './components/Create-paper';
import confirmDel from './components/confirm_delete'
import SignUp from './components/SignUp';


class App extends Component {
	render(){
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path='/' Component={Home} ><Navbar/><Home/></Route>
					<Route path='/welcome' Component={Welcome} ><Welcome/></Route>
					<Route path='/confirmdel' Component={confirmDel} ><confirmDel/></Route>
					<Route path='/profile' Component={Profile} ><Profile/></Route>
					<Route path='/signup' Component={SignUp} ><SignUp/></Route>
					<Route path='/createpaper' Component={CreatePaper} ><CreatePaper/></Route>
				</Switch>
			</BrowserRouter>
		  );
	}
  
}

export default App;
