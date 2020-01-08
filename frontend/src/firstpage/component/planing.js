import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { Link } from 'react-router-dom';

import { MDBRow, MDBCol } from 'mdbreact';

class Planing extends React.Component{
	render(){
		return (
			<div className='planing_div'>
				<div style={{"flex":"1"}}>
					<h1>Start Planning Today</h1>
					<p>Sign up and become one of the millions of people<br/> around the world using Trello to get more done.</p>
					<Link to="/signup">
					<button className='header_signup_btn' type='button'>Get Started – It’s Free!</button>
					</Link>
				</div>
			</div>
		);
	}
}

export default Planing;
					