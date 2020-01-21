import React from "react";
import {BrowserRouter as Router, withRouter} from "react-router-dom";
import { connect } from "react-redux";

import {MDBRow, MDBCol, MDBModal, MDBModalBody, MDBIcon, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from "mdbreact";

import createboard from "../action/createboard";
import imagesgallery from "../assets/images.json";


const mapDispatchProps = (dispatch) => ({
	createboard: (createinfo,history) => dispatch(createboard(createinfo,history))
});



class Createboard extends React.Component{

	constructor(props){
		super(props);
		this.state={
			modal: false,
			title:"",
			group:"",
			imgurl:"",
			groupname: "",
			secure: "private"
		}
		this.modaltoggle=this.modaltoggle.bind(this);
		this.inputtitle = this.inputtitle.bind(this);
		this.inputgroup = this.inputgroup.bind(this);
		this.inputsec = this.inputsec.bind(this);
		this.createboard = this.createboard.bind(this);
		this.inputimage = this.inputimage.bind(this);
	}

	inputimage(e){
		this.setState({
			imgurl: e.target.getAttribute("value")
		})
	}

	inputsec(e){

		this.setState({
			secure: e.target.value
		});

	}

	modaltoggle(){

		this.setState({
			modal: !this.state.modal
		});

	}

	inputtitle(e){

		this.setState({
			title: e.target.value
		});

	}

	inputgroup(e){
		
		this.setState({
			group: e.target.value,
			groupname: e.target.getAttribute("groupname")
		});

	}

	createboard(){
		const createinfo = {
			title: this.state.title,
			imgurl: this.state.imgurl,
			group: this.state.group,
			secure: this.state.secure
		}
		if (this.state.title === "") {
			return;
		}
		this.props.createboard(createinfo, this.props.history);
		this.modaltoggle();
		this.props.rerenderParent();
	}

	render(){
		return (
			<>
			{
				this.props.type==="square" && 
				<div className="create_board_div" onClick={this.modaltoggle}>
					<div style={{margin:"auto"}}>
						Create new
					</div>
				</div>
			}
			{
				this.props.type==="bar" && 
				<div className="create_board_div--bar" onClick={this.modaltoggle}>
						<MDBIcon icon="plus" className="createboard-btn"/> Create board
				</div>
			}
			
			<MDBModal isOpen={this.state.modal} toggle={this.modaltoggle} >
				<MDBModalBody >
					<MDBRow>
						<MDBCol size="7" 
										className="modal_input_info"
										style={{backgroundImage: "url('https://trello-backgrounds.s3.amazonaws.com/SharedBackground/641x960/9c0a570b328ab427f18a15bfd2ffd838/photo-1568313081041-dbd174f69e3b.jpg')", backgroundSize:"cover", height: "auto"}}>
							<input type="text" placeholder="Add title" className="board_modal_input" onChange={this.inputtitle}/>
							<button className="cross_btn" onClick={this.modaltoggle}><MDBIcon icon="times" /></button>

{/* select group drop down */}
								<MDBDropdown size="sm">
						      <MDBDropdownToggle color="rgba(255,255,255,0.7)"  className="create_dropdown">
						        <span className="create_board_dropdown-text">
						        {this.state.group == "" && <span>No team</span> || 
						      		this.state.group !== "" && <span>{this.state.groupname}</span>}&nbsp;&nbsp;<MDBIcon icon="chevron-down" /></span>
						      </MDBDropdownToggle>
						      <MDBDropdownMenu basic >
						      	{
											this.props.groups.map(row=>{
												return (
													<MDBDropdownItem onClick={this.inputgroup} value={row._id} groupname={row.name}>{row.name}</MDBDropdownItem>
													)
											})
										}
						      </MDBDropdownMenu>
						    </MDBDropdown>

{/* select private drop down */}
							<MDBDropdown size="sm">
						      <MDBDropdownToggle color="rgba(255,255,255,0.7)" className="create_dropdown">
						        <span className="create_board_dropdown-text">
						        	<MDBIcon icon="unlock-alt" />&nbsp;&nbsp;
						        	{
						        		this.state.secure == "private" && <span>Private</span> || <span>Public</span>
						        	}
						        </span>
						      </MDBDropdownToggle>
						      <MDBDropdownMenu basic >

						      	<MDBDropdownItem onClick={this.inputsec} value="private">
							      	
							      		<span style={{color: "red"}}><MDBIcon icon="unlock-alt" color="danger"/></span> Private<br/>
							      		<span style={{fontSize: "12px"}}>Only board members can see and edit this board.</span>

						      	</MDBDropdownItem>

						      	<MDBDropdownItem onClick={this.inputsec} value="public">
							      	
							      		<span style={{color: "green"}}><MDBIcon icon="globe-americas" color="green"/></span> Public<br/>
							      		<span style={{fontSize: "12px"}}>Anyone on the internet (including Google) can see this board.<br/>Only board members can edit.</span>
						      	</MDBDropdownItem>

						      </MDBDropdownMenu>
					    </MDBDropdown>

							
							
						</MDBCol>
						<MDBCol size="5">
							<ul style={{width: "170px", padding: "10px"}} type="none">
							{
								imagesgallery.imgurl.map((row,index) => {
									return (
											<li style={{display:"inline-block",margin: "5px"}} key={`imgGallery${index}`}>
												<div 	className="modal_image_gallery" 
															style={{backgroundImage: `url("${row}")`}}
															value={row}
															onClick={this.inputimage}
												></div>
											</li>
										);
								})
							}
								
							</ul>
						</MDBCol>
					</MDBRow>

					<MDBRow style={{textAlign: "center",alignItems: "center"}}>
						<button className="create_board_btn" onClick={this.createboard}>create board</button>
						<a href="/dashboard" className="start_temp_a">start with a template</a>
					</MDBRow>

				</MDBModalBody>
			</MDBModal>
			</>
		)
	}
}

export default connect(null,mapDispatchProps)(withRouter(Createboard));

	