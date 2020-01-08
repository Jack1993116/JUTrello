import React from 'react';
import { browserHistory } from 'react-router';
import { Link, withRouter } from "react-router-dom";

import './dashboard.css';
import { connect } from 'react-redux';

// components
import NavBar from './container/navbar'
import Boardbody from './container/boardbody'


class Dashboard extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		// if (!localStorage.token) {
		// 	return "can not get dashboard. log in and try."
		// }
		return (
			<div style={{backgroundColor:'#fafbfc',minHeight:"100vh"}}>
				<NavBar/>
				<Boardbody />
			</div>
		)
	}
}


export default Dashboard;
