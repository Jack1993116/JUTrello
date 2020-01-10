import React from 'react';
import {BrowserRouter as Router, withRouter} from 'react-router-dom';
import { browserHistory } from 'react-router';

import { connect } from 'react-redux';

import {MDBRow, MDBCol} from 'mdbreact';
import Board from '../component/board';
import Templete from '../component/templete';
import Boardmodal from '../component/boardmodal';
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
		this.state={
			board: true,
			templete: false,
			home: false,
		}
	}

	async componentWillMount(){
		await this.props.getuserinfo(this.props.history);
	}


	render(){
		return (
			<div style={{padding: "30px 150px"}} className='boardbody_div'>
				<MDBCol size='2'>

					User_id:{this.props.usercollection._id}


					<ul type='none' className='float-right'>
						<li className='list' onClick={()=>this.setState({board:true,templete:false,home:false})}>board</li>
						<li className='list' onClick={()=>this.setState({board:false,templete:true,home:false})}>templetes</li>
						<li className='list' onClick={()=>this.setState({board:false,templete:false,home:true})}>home</li>
					</ul>
				</MDBCol>
				<MDBCol size='10' style={{paddingLeft: '50px'}}>
					<ul type="none" style={{display: this.state.board===false?"none":"flex",flexWrap: 'wrap'}}>

						<li style={{display:"inline"}}>
							<Board url="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/641x960/9c0a570b328ab427f18a15bfd2ffd838/photo-1568313081041-dbd174f69e3b.jpg" title='test' collectionid=''/>
						</li>
						<li>
							<div style={{display:"inline"}}>
								<Boardmodal/>
							</div>
						</li>

					</ul>

					<ul type="none" style={{display: this.state.templete===false?"none":"flex",flexWrap: 'wrap'}}>
						<li style={{display:"inline"}}>
							<Templete url="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/641x960/9c0a570b328ab427f18a15bfd2ffd838/photo-1568313081041-dbd174f69e3b.jpg" avatar="https://trello-logos.s3.amazonaws.com/993e0e3c1aa46cabf6261b33e599d7ce/50.png" title="Email Workflow" auther="Tomas Jane" about="If you work in email marketing, you know that getting a great email out the door is no easy task."/>
						</li>
						<li style={{display:"inline"}}>
							<Templete url="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/641x960/9c0a570b328ab427f18a15bfd2ffd838/photo-1568313081041-dbd174f69e3b.jpg" avatar="https://trello-logos.s3.amazonaws.com/993e0e3c1aa46cabf6261b33e599d7ce/50.png" title="Email Workflow" auther="Tomas Jane" about="If you work in email marketing, you know that getting a great email out the door is no easy task."/>
						</li>
						<li style={{display:"inline"}}>
							<Templete url="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/641x960/9c0a570b328ab427f18a15bfd2ffd838/photo-1568313081041-dbd174f69e3b.jpg" avatar="https://trello-logos.s3.amazonaws.com/993e0e3c1aa46cabf6261b33e599d7ce/50.png" title="Email Workflow" auther="Tomas Jane" about="If you work in email marketing, you know that getting a great email out the door is no easy task."/>
						</li>
					</ul>
				</MDBCol>
			</div>
		);
		
	}
}
export default connect(mapStateToProps, mapDispatchProps)(withRouter(Boardbody));