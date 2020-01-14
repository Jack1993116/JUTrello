import React from 'react';
import {BrowserRouter as Router, withRouter} from 'react-router-dom';
// import { browserHistory } from 'react-router';

import { connect } from 'react-redux';

import {MDBRow, MDBCol, MDBIcon} from 'mdbreact';
import Board from '../component/board';
import Templete from '../component/templete';
import Createboard from '../component/createboard';
import getuserinfo from '../action/getuserinfo';


const mapStateToProps = state => ({
	usercollection: state.dashboard.usercollection,
	stared: state.dashboard.stared
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
			<div style={{padding: "80px 20px 30px 170px"}} className='boardbody_div'>

				<MDBCol size='2'>
					{/*{this.props.stared}*/}
					<ul type='none' className='float-right'>
						<li className='list' onClick={()=>this.setState({board:true,templete:false,home:false})}>
							<MDBIcon icon="columns" />  board
						</li>
						<li className='list' onClick={()=>this.setState({board:false,templete:true,home:false})}>
							<MDBIcon fab icon="flipboard" />  templetes
						</li>
						<li className='list' onClick={()=>this.setState({board:false,templete:false,home:true})}>
							<MDBIcon icon="house-damage" />  home
						</li>
					</ul>

					<ul type='none' className='float-right'>
						<li className='list'>
							<div>TEAMS <button type='button' className='right none_btn'><MDBIcon icon="plus" /></button></div>
						</li>
						{
							this.props.usercollection.groups.map(row=>{
								return (<li className='list' key={row._id}>
									<MDBIcon icon="user-friends" /> {row.groupname}
								</li>)
							})
						}
					</ul>
				</MDBCol>

				<MDBCol size='10' style={{paddingLeft: '50px'}}>
					<div style={{display: this.state.board===false?"none":""}}>
						<div className='dashboard_sub_title'
								style={{display: this.props.stared==""?"none":""}}>
							<MDBIcon far icon="star" /> Starred Boards
						</div>

						<ul type="none" style={{display: this.state.board===false?"none":"flex",flexWrap: 'wrap'}}>

							{
								this.props.usercollection.collections.map(row=>{
									if (this.props.stared.indexOf(row._id)!=(-1)) {
										return (
											<li style={{display:"inline"}} key={`stared${row._id}`}>
												<Board 
													url={row.imgurl} 
													title={row.title} 
													collectionid={row._id} 
													starstate='true'/>
											</li>
											);
									}
								})
							}

						</ul>


						<div className='dashboard_sub_title'>
							<MDBIcon far icon="user" /> Personal Boards
						</div>
						{this.props.stared}
						<ul type="none" style={{display: this.state.board===false?"none":"flex",flexWrap: 'wrap'}}>

							{
								this.props.usercollection.collections.map(row=>{

									if (this.props.stared.indexOf(row._id) == (-1)) {
										return (
											<li style={{display:"inline"}} key={row._id}>
												<Board url={row.imgurl} 
															title={row.title} 
															collectionid={row._id} 
															starstate='false' />
											</li>
										)
									} else {
										return (
											<li style={{display:"inline"}} key={row._id}>
												<Board url={row.imgurl} 
															title={row.title} 
															collectionid={row._id} 
															starstate='true' />
											</li>
										)
									}
									
								})
							}

							<li>
								<div style={{display:"inline"}}>
									<Createboard groups={this.props.usercollection.groups}/>
								</div>
							</li>

						</ul>

						<div className='dashboard_sub_title' >
							<MDBIcon icon="users" /> Group Boards
							<button className='nav_btn fontgrey'>
								Boards
							</button>
							<button className='nav_btn fontgrey'>
								<MDBIcon icon="user" /> members
							</button>
							<button className='nav_btn fontgrey'>
								<MDBIcon icon="cog" /> Settings
							</button>
							<button className='nav_btn fontgrey'>
								<MDBIcon icon="briefcase" /> Upgrade
							</button>
						</div>

					</div>

					<div style={{display: this.state.templete===false?"none":""}}>
						<ul type="none" style={{display: this.state.templete===false?"none":"flex",flexWrap: 'wrap'}}>
							<li style={{display:"inline"}} key='1'>
								<Templete url="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/641x960/9c0a570b328ab427f18a15bfd2ffd838/photo-1568313081041-dbd174f69e3b.jpg" avatar="https://trello-logos.s3.amazonaws.com/993e0e3c1aa46cabf6261b33e599d7ce/50.png" title="Email Workflow" auther="Tomas Jane" about="If you work in email marketing, you know that getting a great email out the door is no easy task."/>
							</li>
							<li style={{display:"inline"}} key='2'>
								<Templete url="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/641x960/9c0a570b328ab427f18a15bfd2ffd838/photo-1568313081041-dbd174f69e3b.jpg" avatar="https://trello-logos.s3.amazonaws.com/993e0e3c1aa46cabf6261b33e599d7ce/50.png" title="Email Workflow" auther="Tomas Jane" about="If you work in email marketing, you know that getting a great email out the door is no easy task."/>
							</li>
							<li style={{display:"inline"}} key='3'>
								<Templete url="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/641x960/9c0a570b328ab427f18a15bfd2ffd838/photo-1568313081041-dbd174f69e3b.jpg" avatar="https://trello-logos.s3.amazonaws.com/993e0e3c1aa46cabf6261b33e599d7ce/50.png" title="Email Workflow" auther="Tomas Jane" about="If you work in email marketing, you know that getting a great email out the door is no easy task."/>
							</li>
						</ul>
					</div>
				</MDBCol>
			</div>
		);
		
	}
}
export default connect(mapStateToProps, mapDispatchProps)(withRouter(Boardbody));