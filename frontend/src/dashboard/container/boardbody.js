import React from "react";
import { withRouter} from "react-router-dom";
// import { browserHistory } from "react-router";

import { connect } from "react-redux";

import { MDBCol, MDBIcon} from "mdbreact";
import Board from "../component/board";
import Templete from "../component/templete";
import Createboard from "../component/createboard";
import CreateGroup from "../component/createGroup";

import getuserinfo from "../action/getuserinfo";
import tempateimgJson from "../assets/templateImg.json";
import templatesJson from "../assets/templates.json";


const mapStateToProps = state => ({
	usercollection: state.dashboard.usercollection,
	stared: state.dashboard.stared
});


class Boardbody extends React.Component{
	constructor(props){
		super(props);
		this.state={
			board: true,
			templete: false,
			home: false,
			tempType: "Business"
		}
		this.setTempType = this.setTempType.bind(this);
		this.rerender = this.rerender.bind(this);
	}

	setTempType(e){
		this.setState({
			tempType: e.target.getAttribute("value")
		})
	}

	rerender(){
		this.forceUpdate();
	}

	render(){

		return (
			<div style={{padding: "80px 20px 30px 170px"}} className="boardbody_div">

				<MDBCol size="2">
					{/*{this.props.stared}*/}
						<div className="list" 
								onClick={()=>this.setState({board:true,templete:false,home:false})}
								key="boardlist"
								style={{backgroundColor: this.state.board?"#e4f0f6":""}}>
							<MDBIcon icon="columns" />  board
						</div>
						<div className="list" 
								onClick={()=>this.setState({board:false,templete:true,home:false})} 
								key="templatelist"
								style={{backgroundColor: this.state.templete?"#e4f0f6":""}}>
							<MDBIcon fab icon="flipboard" />  templates
							
						</div>
						{
							this.state.templete &&
							tempateimgJson.map(row => {
								return (
									<div className="list" value={row.title} onClick={this.setTempType}>
										{row.title}
									</div>
								);
							})

						}
						<div className="list" 
								onClick={()=>this.setState({board:false,templete:false,home:true})} 
								key="homelist"
								style={{backgroundColor: this.state.home?"#e4f0f6":""}}>
							<MDBIcon icon="house-damage" />  home
						</div>

						<div className="list" key="createGroup">
							<CreateGroup type="teamPlus"/>
						</div>
						{
							this.props.usercollection.groups.map(row=>{
								return (<div className="list" key={`grouplist${row._id}`}>
									<MDBIcon icon="user-friends" /> {row.name}
								</div>)
							})
						}
				</MDBCol>

				<MDBCol size="10" style={{paddingLeft: "50px"}}>
					<div style={{display: this.state.board===false?"none":""}}>
						<div className="dashboard_sub_title"
								style={{display: this.props.stared==""?"none":""}}>
							<MDBIcon far icon="star" /> Starred Boards
						</div>

						<div type="none" style={{display: this.state.board===false?"none":"flex",flexWrap: "wrap"}}>

							{

								this.props.stared.map(starone => {

									return(

										this.props.usercollection.collections.map(row=>{
											if (starone===row._id) {
												return (
													<div style={{display:"inline"}} key={`stared${row._id}`}>
														<Board 
															url={row.imgurl}
															title={row.title}
															collectionid={row._id}
															color={row.color}
															key={`staredboard${row._id}`}
															type="mainboard"
															/>
													</div>
													);
											}
										})

									)
									
								})
								
							}

						</div>


						<div className="dashboard_sub_title">
							<MDBIcon far icon="user" /> Personal Boards
						</div>
						
						<div type="none" style={{display: this.state.board===false?"none":"flex",flexWrap: "wrap"}}>

							{
								this.props.usercollection.collections.map(row=>{

									if (this.props.stared.indexOf(row._id) === (-1)) {
										return (
											<div style={{display:"inline"}} key={row._id}>
												<Board url={row.imgurl} 
															title={row.title} 
															collectionid={row._id} 
															color={row.color} 
															key={`board${row._id}`}
															type="mainboard"
															 />
											</div>
										)
									} else {
										return (
											<div style={{display:"inline"}} key={row._id}>
												<Board url={row.imgurl} 
															title={row.title} 
															collectionid={row._id} 
															color={row.color}
															key={`board${row._id}`}
															type="mainboard" 
															/>
											</div>
										)
									}
									
								})
							}

							<div key="createboard">
								<div style={{display:"inline"}} key="createboardDiv">
									<Createboard 
										groups={this.props.usercollection.groups}
										rerenderParent={this.rerender}
										type="square"
									/>
								</div>
							</div>

						</div>


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
											<button className="nav_btn fontgrey btn_pink">
												<MDBIcon icon="briefcase" /> Upgrade
											</button>
										</div>

										<div type="none" style={{display: this.state.board===false?"none":"flex",flexWrap: "wrap"}}>

											<div key={`creategroupboard${grouprow._id}`}>
												<div style={{display:"inline"}} key={`creategroupboardDiv${grouprow._id}`}>
													<Createboard 
														groups={this.props.usercollection.groups}
														rerenderParent={this.rerender}
														type="square"
													/>
												</div>
											</div>

										</div>
										</>
									)
							})
						}

					</div>

					<div style={{display: this.state.templete===false?"none":""}}>
						<div style={{paddingLeft: "20px"}}>
								<h4 style={{fontWeight: "bold"}}>{this.state.tempType}</h4>
						</div>
						<div type="none" style={{display: this.state.templete===false?"none":"flex",flexWrap: "wrap"}}>
						
						{
							Object.keys(templatesJson).map(row => {
								if(row == this.state.tempType){
									return templatesJson[row].map((temp,index) => {
										return (
												<div style={{display:"inline"}} key={`${temp}temp${index}`}>
													<Templete key={`${temp}temp${index}`}
															url= {temp.linkImg} 
															avatar={temp.avatar} 
															title={temp.title} 
															auther={temp.auth} 
															about={temp.about}/>
												</div>
											);
									})
								}
							})
						}
							
						</div>
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
export default connect(mapStateToProps, null)(withRouter(Boardbody));