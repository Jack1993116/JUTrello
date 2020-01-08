import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component{
	constructor(props){
		super(props);
		this.state={
			email: ''
		}
	}
	render(){
		return (
			<div className="signup_input_div" style={{"margin": "20px 0px"}}>
				<input className='signup_input' placeholder="Email"/>
				<Link to="/signup">
				<button type='button' className='header_signup_btn' to='/signup'>Sign Up-It's Free!</button>
				</Link>
			</div>		
		);
	}
}

export default Signup;