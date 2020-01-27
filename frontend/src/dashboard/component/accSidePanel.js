import React from "react";
import { withRouter } from "react-router-dom";
import {connect} from "react-redux";

import { MDBCol, MDBIcon} from "mdbreact";
import Createboard from "../component/createboard";
import CreateGroup from "../component/createGroup";

import "../assets/scroll.css";

class AccSidePanel extends React.Component{
	constructor(props){
		super(props);
		this.state={
			useremail: "default",
		}
		this.logout = this.logout.bind(this);
	}

	logout(){
		if(localStorage.token){
			localStorage.removeItem("token");
		}
		if(localStorage.trellouseremail){
			localStorage.removeItem("trellouseremail");
		}
		this.props.history.push("/");

	}

	componentWillMount(){
		if (localStorage.trellouseremail) {
			this.setState({
				useremail: localStorage.trellouseremail,
			})
		}
	}

	render(){
		
		return (
			<div className="right_panel_div">
				<h6>{this.state.useremail}</h6>
				<button onClick={this.props.closethis} className="rightCloseBtn">
				<MDBIcon icon="times"/>
				</button>
				<hr/>
				<div className="account_div">
					Profile and Visibility
				</div>
				<div className="account_div">
					Activity
				</div>
				<div className="account_div">
					Cards
				</div>
				<div className="account_div">
					Settings
				</div>
				<hr/>
				<div className="account_div">
					Help
				</div>
				<div className="account_div">
					Shortcuts
				</div>
				<hr/>
				<div className="account_div" onClick={this.logout}>
					Log Out
				</div>
				
			</div>
			
		);
		
	}
}
export default connect(null,null)(withRouter(AccSidePanel));