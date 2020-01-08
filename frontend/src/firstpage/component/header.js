import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { MDBRow, MDBCol } from 'mdbreact';
import Signup from './signup';

class Header extends React.Component{
	render(){
		return (
			<div className='header'>
				<MDBRow>
					<MDBCol lg='6' className="header_div1">
					<h1>Trello lets you work more collaboratively and get more done.</h1>
					<p>Trello’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible, and rewarding way.</p>
					</MDBCol>
					<MDBCol lg='6' className='float right header_div2'>
						<img src='https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/308998dcb3ed5ab3d01217a4d24ffa03/hero-a.svg' alt='header_img' className='header_img'/>
					</MDBCol>
					<Signup/>
				</MDBRow>
			</div>
		);
	}
}

export default Header;