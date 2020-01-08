import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { MDBRow, MDBCol } from 'mdbreact';
import Howworks from './howworks';

class Howdiv extends React.Component{
	render(){
		return (
			<div className="slider_div">
				<div style={{'textAlign': 'center'}}>
					<h1>See how it works</h1>
					<p>Go from idea to action in seconds with Trello’s <br/> intuitively simple boards, lists, and cards.</p>
				</div>
				<Howworks />
			</div>
		);
	}
}

export default Howdiv;
					