import React from 'react';

import './dashboard.css';

// components
import NavBar from './container/navbar'
import Boardbody from './container/boardbody'


class Dashboard extends React.Component{
	render(){
		// if (!localStorage.token) {
		// 	return "can not get dashboard. log in and try."
		// }
		return (
			<div style={{backgroundColor:'#fafbfc',minHeight:"100vh"}}>
				<NavBar bgcolor="#026aa7"/>
				<Boardbody />
			</div>
		)
	}
}


export default Dashboard;
