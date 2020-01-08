import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { MDBRow, MDBCol } from 'mdbreact';

class Builtdiv extends React.Component{
	render(){
		return (
			<div className='section_div'>
			<MDBRow style={{"alignItems":'center'}}>
				<MDBCol md='7' className="order_div_1">
					<h1>Built-In Workflow Automation With Butler</h1>
					<p>Let the robots do the work! Boost productivity by unleashing the power of automation across your entire team with Butler, and remove tedious tasks from your to-do lists with:
					</p>
					<ul style={{"fontSize":"17px", "fontWeight":"bolder", "textAlign":"left"}}>
						<li>Rule-Based Triggers</li>
						<li>Custom Card & Board Buttons</li>
						<li>Calendar Commands</li>
						<li>Due Date Commands</li>
					</ul>
					
				</MDBCol>
				<MDBCol md='5' className="order_div_2">
					<img src='https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/06f0833d33e1d71bbf0858029839b406/butler.png' alt='header_img' className='header_img'/>
				</MDBCol>
			</MDBRow>
			</div>
		);
	}
}

export default Builtdiv;
					