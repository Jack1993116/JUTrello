import React from 'react';
import { Link } from 'react-router-dom';

import SVG from '../assets/trello.svg';

class Navbar extends React.Component{
	constructor(props){
		super(props);
	}
		
	render(){
		return (
			<div className='navbar' style={{'backgroundColor': this.props.opacity===1?'#0079bf':'rgba(0,0,0,0)', 'boxShadow': this.props.opacity===1?'0 0 10px black':'none', 'transition':'.8s'}} >
				<a href=''><img src={SVG}  alt="trellosvg" /></a>
				<div className="float right">
				<a href='/login' className='login_a'>Log In </a>
				<Link to="/signup">
				<button type='button' className='nav_signup_btn'>Sign Up</button>
				</Link>
				</div>
			</div>
		);
	}
}

export default Navbar;