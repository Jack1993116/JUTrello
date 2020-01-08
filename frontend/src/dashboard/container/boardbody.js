import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {MDBRow, MDBCol} from 'mdbreact';
import Board from '../component/board';

class Boardbody extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div style={{padding: "30px 150px"}} className='boardbody_div'>
				<MDBCol size='3'>
					<ul type='none' className='float-right'>
						<li className='list'>board</li>
						<li className='list'>templetes</li>
						<li className='list'>home</li>
					</ul>
				</MDBCol>
				<MDBCol size='9' style={{paddingLeft: '50px'}}>
					<ul type="none">
						<li>
							<Board/>
						</li>
					</ul>
				</MDBCol>
			</div>
		);
		
	}
}

export default Boardbody;