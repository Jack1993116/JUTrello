import React from 'react';
import {BrowserRouter as Router, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

import {MDBRow, MDBCol, MDBModal, MDBModalBody, MDBModalHeader} from 'mdbreact';

import createboard from '../action/createboard';


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
		}
		this.modaltoggle=this.modaltoggle.bind(this);
		this.inputtitle = this.inputtitle.bind(this);
		this.inputgroup = this.inputgroup.bind(this);
		this.createboard = this.createboard.bind(this);
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

	}

	inputgroup(e){

		this.setState({
			group: e.target.value=="No team"?"":e.target.value
		})

	}

	createboard(){
		const createinfo = {
			title: this.state.title,
			imgurl: this.state.imgurl,
			group: this.state.group,
		}
		this.props.createboard(createinfo, this.props.history);
		this.modaltoggle();
		this.props.rerenderParent();
	}

	render(){
		return (
			<>
			<div className='create_board_div' onClick={this.modaltoggle}>
				<div style={{margin:'auto'}}>
					Create new
				</div>
			</div>
			<MDBModal isOpen={this.state.modal} toggle={this.modaltoggle} >
				<MDBModalBody style={{backgroundImage: 'url("https://trello-backgrounds.s3.amazonaws.com/SharedBackground/641x960/9c0a570b328ab427f18a15bfd2ffd838/photo-1568313081041-dbd174f69e3b.jpg")', backgroundSize:"cover", height: "auto"}}>
					<MDBRow>
						<MDBCol size="7">
							<input type="text" placeholder='Add title' className="board_modal_input" onChange={this.inputtitle}/>
							<select className="modal_select" onChange={this.inputgroup}>
								
								{/*donot change no team name if it change change the backend to save group*/}
								<option key='0'>No team</option>
								
								{
									this.props.groups.map(row=>{
										return (<option key={row._id}>{row.groupname}</option>)
									})
								}

							</select>
							<select className="modal_select">
								<option key='1'>Private</option>
								<option key='2'>public</option>
							</select>
							<button className='create_board_btn' onClick={this.createboard}>create board</button>
							<a href=''>start with a template</a>
						</MDBCol>
						<MDBCol size="5">
							<ul style={{display:'flex'}} type='none'>
								<li style={{display:'inline'}} key='color1'>
									colors
								</li>
							</ul>
						</MDBCol>
					</MDBRow>
				</MDBModalBody>
			</MDBModal>
			</>
		)
	}
}

export default connect(null,mapDispatchProps)(withRouter(Createboard));

	