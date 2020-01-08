import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { MDBRow, MDBCol } from 'mdbreact';
import img from '../assets/phone.png';

class Infodiv extends React.Component{
	render(){
		return (
			<div className='section_div'>
			<MDBRow style={{"alignItems":'center'}}>
				<MDBCol md='5'>
					<img src={img} alt='info_img' className='info_img'/>
				</MDBCol>
				<MDBCol md='7' className="order_div_1">
					<h1>Information at a glance</h1>
					<p>Dive into the details by adding comments, attachments, due dates, and more directly to Trello cards. Collaborate on projects from beginning to end.</p>
				</MDBCol>
			</MDBRow>
			</div>
		);
	}
}

export default Infodiv;
					