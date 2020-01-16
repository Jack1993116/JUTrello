
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

		if ((this.state.title!="")&&(this.state.description!="")) {
			this.setState({
				continue: true
			})
		} else {
			this.setState({
				continue: false
			})
		}

	}

	inputdescription(e){

		this.setState({
			description: e.target.value
		})

		if ((this.state.title!="")&&(this.state.description!="")) {
			this.setState({
				continue: true
			})
		} else {
			this.setState({
				continue: false
			})
		}

	}

	creategroup(){

		if (this.state.continue) {
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
			<div>
				TEAMS 
				<button type='button' className='right none_btn' onClick={this.modaltoggle}>
					<MDBIcon icon="plus" />
				</button>
			</div>
			<MDBModal isOpen={this.state.modal} toggle={this.modaltoggle} size='lg'>
				<MDBModalBody>
					<MDBRow>
						<MDBCol size='6'>
						 <h6>Group Title</h6>
						 <input type="text" className="groupTitle" onChange={this.inputtitle}/>
						 <h6>Group Description</h6>
						 <textarea className="groupDesc" onChange={this.inputdescription}/>
						 <button 
						 	type="button" 
						 	className="groupContinue" 
						 	onClick={this.creategroup}>
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

	