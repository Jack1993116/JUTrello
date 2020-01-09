import React from 'react';
import {BrowserRouter as Router, withRouter} from 'react-router-dom';
import { browserHistory } from 'react-router';

import { connect } from 'react-redux';

import {MDBRow, MDBCol} from 'mdbreact';
import Board from '../component/board';
import getuserinfo from '../action/getuserinfo';


const mapStateToProps = state => ({
	usercollection: state.dashboard.usercollection
})
const mapDispatchProps = (dispatch) => ({
	getuserinfo: (history) => dispatch(getuserinfo(history))
})


class Boardbody extends React.Component{
	constructor(props){
		super(props);
	}

	async componentWillMount(){
		await this.props.getuserinfo(this.props.history);
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
							<Board url="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/641x960/9c0a570b328ab427f18a15bfd2ffd838/photo-1568313081041-dbd174f69e3b.jpg" title='test'/>
						</li>
					</ul>	
				</MDBCol>
			</div>
		);
		
	}
}
export default connect(mapStateToProps, mapDispatchProps)(withRouter(Boardbody));