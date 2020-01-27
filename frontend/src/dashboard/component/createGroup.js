
import React from 'react';
import {BrowserRouter as Router, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

import {MDBRow, MDBCol,MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBIcon} from 'mdbreact';

import creategroup from '../action/creategroup';

const mapDispatchProps = (dispatch) => ({
	creategroup: (groupinfo) => dispatch(creategroup(groupinfo))
});

class CreateGroup extends React.Component{

	constructor(props){
		super(props);
		this.state={
			modal: false,
			title:"",
			description:"",
			continue: false
		}
		this.modaltoggle=this.modaltoggle.bind(this);
		this.inputtitle = this.inputtitle.bind(this);
		this.inputdescription = this.inputdescription.bind(this);
		this.creategroup = this.creategroup.bind(this);
	}

	modaltoggle(){

		this.setState({
			modal: !this.state.modal
		})
	}

	inputtitle(e){

		this.setState({
			title: e.target.value
		})

		if ((e.target.value == "") || (this.state.description == "")) {
			this.setState({
				continue: false
			})
		} else {
			this.setState({
				continue: true
			})
		}

	}

	inputdescription(e){

		this.setState({
			description: e.target.value
		})

		if ((this.state.title=="") || (e.target.value=="")) {
			this.setState({
				continue: false
			})
		} else {
			this.setState({
				continue: true
			})
		}

	}

	creategroup(){

		if ((this.state.title !== "") && (this.state.description !== "")) {
			const groupinfo = {
				title: this.state.title,
				description: this.state.description,
			};
			this.modaltoggle();
			this.props.creategroup(groupinfo,this.props.history);
			this.setState({
				modal: false,
				title:"",
				description:"",
				continue: false
			})
		}

	}

	render(){
		return (
			<>
			{
				this.props.type==="teamPlus" &&
				<div>
					TEAMS 
					<button type='button' className='right none_btn' onClick={this.modaltoggle}>
						<MDBIcon icon="plus" />
					</button>
				</div>
			}
			{
				this.props.type==="sidePanel" &&
				<div className="create_board_div--rightpanel" onClick={this.modaltoggle}>
					<span><MDBIcon icon="user-friends" /> Create Team...</span>
					<p>A team is a group of boards and people. Use it to organize your company, side hustle, family, or friends.</p>
				</div>
			}
			
			<MDBModal isOpen={this.state.modal} toggle={this.modaltoggle} size='lg'>
				<MDBModalBody>
					<MDBRow style={{backgroundColor: "white",padding: "15px"}}>
						<MDBCol size='6'>
						<h4 style={{fontWeight: "bold",paddingTop: "25px"}}>
							Let's Build a Team
						</h4>
						<p style={{fontWeight: "bolder"}}>Boost your productivity by making it easier for everyone to access boards in one location.</p>
						<label style={{fontSize: "12px"}}>Team Name</label>
						<input type="text" className="groupTitle" onChange={this.inputtitle}/>
						<label style={{fontSize: "12px"}}>This is the name of your company, team or organization.</label>
						<label style={{fontSize: "12px"}}>Team Description Optional</label>

						<textarea className="groupDesc" onChange={this.inputdescription}/>
						<label style={{fontSize: "12px"}}>Get your members on board with a few words about your team.</label>
						
						<button 
						 	type="button" 
						 	className="groupContinue" 
						 	onClick={this.creategroup}
						 	disabled={this.state.continue?false:true}>
						 	Continue
						 </button>
						</MDBCol>
						<MDBCol size='6' className="groupImgDiv" >
							<img src='https://a.trellocdn.com/prgb/dist/images/organization/empty-board.286f8fc83e01c93ed27e.svg' alt="createGroupImg" className="createGroupImg"/>
						</MDBCol>
					</MDBRow>
				</MDBModalBody>
			</MDBModal>
			</>
		)
	}
}

export default connect(null,mapDispatchProps)(withRouter(CreateGroup));

	