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
				<Link to='/'><img src={SVG}  alt="trellosvg" /></Link>
				<div className="float right">
				<Link to="/login">
					<a className='login_a'>Log In </a>
				</Link>
				<Link to="/signup">
				<button type='button' className='nav_signup_btn'>Sign Up</button>
				</Link>
				</div>
			</div>
		);
	}
}

export default Navbar;