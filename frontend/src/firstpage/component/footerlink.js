import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { MDBRow, MDBCol } from 'mdbreact';

class Planing extends React.Component{
	render(){
		return (
			<div className='section_div'>
			<div>
				<select className='lan_select' onChange={this.changelan}>
					<option>English</option>
					<option>Russion</option>
					<option>Chinese</option>
				</select>
			</div>
			<div>
				<ul style={{"listStyle": "none", "display": "inline"}}>
					<li style={{'display': 'inline-block'}}><a href='/' className='footer_a'>Templates</a></li>
					<li style={{'display': 'inline-block'}}><a href='/' className='footer_a'>Pricing</a></li>
					<li style={{'display': 'inline-block'}}><a href='/' className='footer_a'>Apps</a></li>
					<li style={{'display': 'inline-block'}}><a href='/' className='footer_a'>Jobs</a></li>
					<li style={{'display': 'inline-block'}}><a href='/' className='footer_a'>Blog</a></li>
					<li style={{'display': 'inline-block'}}><a href='/' className='footer_a'>Developers</a></li>
					<li style={{'display': 'inline-block'}}><a href='/' className='footer_a'>About</a></li>
					<li style={{'display': 'inline-block'}}><a href='/' className='footer_a'>Help</a></li>
					<li style={{'display': 'inline-block'}}><a href='/' className='footer_a'>Legal</a></li>
					<li style={{'display': 'inline-block'}}><a href='/' className='footer_a'>Cookie Settings</a></li>
					<li style={{'display': 'inline-block'}}><a href='/' className='footer_a'>Privacy</a></li>
				</ul>
			</div>
			<div>
				<img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/6cdbcb3dcf82bba860f1768d184161ee/atlassian-logo-gray-small.svg" width="150" style={{'margin':'30px'}}/>
			</div>
			<div>
				<p>&copy;Copyright 2019. All rights reserved.</p>
			</div>
			</div>
		);
	}
}

export default Planing;
					