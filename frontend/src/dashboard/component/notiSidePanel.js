import React from "react";
import { withRouter } from "react-router-dom";
import {connect} from "react-redux";

import { MDBCol, MDBIcon} from "mdbreact";
import Createboard from "../component/createboard";
import CreateGroup from "../component/createGroup";

import "../assets/scroll.css";

class NotiSidePanel extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		
		return (
			<div className="right_panel_div">
				<h6>Notifications</h6>
				<button onClick={this.props.closethis} className="rightCloseBtn">
				<MDBIcon icon="times"/>
				</button>
				<hr/>
				<div style={{width: "400px"}}>
					<label style={{float: "left", textDecoration: "underline"}}>View All</label>
					<label style={{float: "right", textDecoration: "underline"}}>Mark All as Read</label>
				</div>
			</div>
			
		);
		
	}
}
export default withRouter(NotiSidePanel);