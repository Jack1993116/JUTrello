import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { MDBRow, MDBCol } from 'mdbreact';
import { Link } from 'react-router-dom';

import img from '../assets/work.png';

class Teamdiv extends React.Component{
	render(){
		return (
			<div className='section_div'>
				<MDBRow style={{"alignItems":'center'}}>
					<MDBCol md='5' className="order_div_1">
						<h1>Work with any team</h1>
						<p>Whether it’s for work, a side project or even the next family vacation, Trello helps your team stay organized.</p>
						<Link to="/signup">
						<button className='grey_btn' type='button'>Start doing <strong>→</strong></button>
						</Link>
					</MDBCol>
					<MDBCol md='7' className="order_div_2">
						<img src={img} className='header_img'/>
					</MDBCol>
				</MDBRow>
			</div>
		);
	}
}

export default Teamdiv;