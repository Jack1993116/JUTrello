import React from "react";
import {BrowserRouter as Router, withRouter} from "react-router-dom";
// import { browserHistory } from "react-router";

import { connect } from "react-redux";

import {MDBRow, MDBCol, MDBIcon} from "mdbreact";
import Board from "../component/board";
import Templete from "../component/templete";
import Createboard from "../component/createboard";
import CreateGroup from "../component/createGroup";

import getuserinfo from "../action/getuserinfo";


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
		this.rerender = this.rerender.bind(this);
	}

	rerender(){
		this.forceUpdate();
	}

	async componentWillMount(){
		await this.props.getuserinfo(this.props.history);
	}


	render(){

		return (
			<div style={{padding: "80px 20px 30px 170px"}} className="boardbody_div">

				<MDBCol size="2">
					{/*{this.props.stared}*/}
					<ul type="none" className="float-right">
						<li className="list" 
								onClick={()=>this.setState({board:true,templete:false,home:false})}
								key="boardlist"
								style={{backgroundColor: this.state.board?"#e4f0f6":""}}>
							<MDBIcon icon="columns" />  board
						</li>
						<li className="list" 
								onClick={()=>this.setState({board:false,templete:true,home:false})} 
								key="templatelist"
								style={{backgroundColor: this.state.templete?"#e4f0f6":""}}>
							<MDBIcon fab icon="flipboard" />  templates
						</li>
						<li className="list" 
								onClick={()=>this.setState({board:false,templete:false,home:true})} 
								key="homelist"
								style={{backgroundColor: this.state.home?"#e4f0f6":""}}>
							<MDBIcon icon="house-damage" />  home
						</li>
					</ul>

					<ul type="none" className="float-right">
						<li className="list" key="createGroup">
							<CreateGroup />
						</li>
						{
							this.props.usercollection.groups.map(row=>{
								return (<li className="list" key={`grouplist${row._id}`}>
									<MDBIcon icon="user-friends" /> {row.name}
								</li>)
							})
						}
					</ul>
				</MDBCol>

				<MDBCol size="10" style={{paddingLeft: "50px"}}>
					<div style={{display: this.state.board===false?"none":""}}>
						<div className="dashboard_sub_title"
								style={{display: this.props.stared==""?"none":""}}>
							<MDBIcon far icon="star" /> Starred Boards
						</div>

						<ul type="none" style={{display: this.state.board===false?"none":"flex",flexWrap: "wrap"}}>

							{

								this.props.stared.map(starone => {

									return(

										this.props.usercollection.collections.map(row=>{
											if (starone==row._id) {
												return (
													<li style={{display:"inline"}} key={`stared${row._id}`}>
														<Board 
															url={row.imgurl} 
															title={row.title} 
															collectionid={row._id}
															color={row.color} 
															key={`staredboard${row._id}`}
															/>
													</li>
													);
											}
										})

									)
									
								})
								
							}

						</ul>


						<div className="dashboard_sub_title">
							<MDBIcon far icon="user" /> Personal Boards
						</div>
						
						<ul type="none" style={{display: this.state.board===false?"none":"flex",flexWrap: "wrap"}}>

							{
								this.props.usercollection.collections.map(row=>{

									if (this.props.stared.indexOf(row._id) == (-1)) {
										return (
											<li style={{display:"inline"}} key={row._id}>
												<Board url={row.imgurl} 
															title={row.title} 
															collectionid={row._id} 
															color={row.color} 
															key={`board${row._id}`}
															 />
											</li>
										)
									} else {
										return (
											<li style={{display:"inline"}} key={row._id}>
												<Board url={row.imgurl} 
															title={row.title} 
															collectionid={row._id} 
															color={row.color}  
															/>
											</li>
										)
									}
									
								})
							}

							<li key="createboard">
								<div style={{display:"inline"}}>
									<Createboard 
										groups={this.props.usercollection.groups}
										rerenderParent={this.rerender}
										type="square"
									/>
								</div>
							</li>

						</ul>


						{
							this.props.usercollection.groups.map(grouprow => {
								return (
									<>
										<div className="dashboard_sub_title" >
											<MDBIcon icon="users" /> { grouprow.name }
											<button className="nav_btn fontgrey">
												Boards
											</button>
											<button className="nav_btn fontgrey">
												<MDBIcon icon="user" /> members ( {grouprow.members.length} )
											</button>
											<button className="nav_btn fontgrey">
												<MDBIcon icon="cog" /> Settings
											</button>
											<button className="nav_btn fontgrey">
												<MDBIcon icon="briefcase" /> Upgrade
											</button>
										</div>

										<ul type="none" style={{display: this.state.board===false?"none":"flex",flexWrap: "wrap"}}>

											<li key={`creategroupboard${grouprow._id}`}>
												<div style={{display:"inline"}}>
													<Createboard 
														groups={this.props.usercollection.groups}
														rerenderParent={this.rerender}
														type="square"
													/>
												</div>
											</li>

										</ul>
										</>
									)
							})
						}

					</div>

					<div style={{display: this.state.templete===false?"none":""}}>
						<ul type="none" style={{display: this.state.templete===false?"none":"flex",flexWrap: "wrap"}}>
							<li style={{display:"inline"}} key="1">
								<Templete url="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/641x960/9c0a570b328ab427f18a15bfd2ffd838/photo-1568313081041-dbd174f69e3b.jpg" avatar="https://trello-logos.s3.amazonaws.com/993e0e3c1aa46cabf6261b33e599d7ce/50.png" title="Email Workflow" auther="Tomas Jane" about="If you work in email marketing, you know that getting a great email out the door is no easy task."/>
							</li>
							<li style={{display:"inline"}} key="2">
								<Templete url="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/641x960/9c0a570b328ab427f18a15bfd2ffd838/photo-1568313081041-dbd174f69e3b.jpg" avatar="https://trello-logos.s3.amazonaws.com/993e0e3c1aa46cabf6261b33e599d7ce/50.png" title="Email Workflow" auther="Tomas Jane" about="If you work in email marketing, you know that getting a great email out the door is no easy task."/>
							</li>
							<li style={{display:"inline"}} key="3">
								<Templete url="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/641x960/9c0a570b328ab427f18a15bfd2ffd838/photo-1568313081041-dbd174f69e3b.jpg" avatar="https://trello-logos.s3.amazonaws.com/993e0e3c1aa46cabf6261b33e599d7ce/50.png" title="Email Workflow" auther="Tomas Jane" about="If you work in email marketing, you know that getting a great email out the door is no easy task."/>
							</li>
						</ul>
					</div>

					<div style={{display: this.state.home===false?"none":""}}
								className="home_list">
						<div className="home_list_div">
							<div className="home_list_div-img">
							</div>
							<div className="home_list_div-text">
								<h4>Stay on track and up to date</h4>
								<p style={{fontSize: "16px"}}>
									Invite people to boards and cards, leave comments, add due dates, and we'll show the most important activity here.
								</p>
							</div>
						</div>
						<div className="home_list_link">
							<h6 style={{padding: "5px 20px"}}>Links</h6>
							<Createboard 
										groups={this.props.usercollection.groups}
										rerenderParent={this.rerender}
										type="bar"
									/>
						</div>
					</div>
					

				</MDBCol>
			</div>
		);
		
	}
}
export default connect(mapStateToProps, mapDispatchProps)(withRouter(Boardbody));