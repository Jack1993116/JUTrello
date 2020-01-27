import React from "react";
import { withRouter } from "react-router-dom";
import {connect} from "react-redux";

import { MDBCol, MDBIcon} from "mdbreact";
import Createboard from "../component/createboard";
import CreateGroup from "../component/createGroup";

import "../assets/scroll.css";

const mapStateToProps = state => ({
	usercollection: state.dashboard.usercollection,
	stared: state.dashboard.stared
});

class PlusSidePanel extends React.Component{
	constructor(props){
		super(props);
	}

	render(){

		return (
			<div className="right_panel_div">
				<h6>Create</h6>
				<button onClick={this.props.closethis} className="rightCloseBtn">
				<MDBIcon icon="times"/>
				</button>
				<hr/>
				<Createboard 
					groups={this.props.usercollection.groups}
					rerenderParent={this.rerender}
					type="rightpanel"
				/>
				<CreateGroup type="sidePanel"/>
				<div className="create_board_div--rightpanel" onClick={this.modaltoggle}>
					<span><MDBIcon icon="suitcase" /> Create Business Team...</span>
					<p>With Business Class your team has more security, administrative controls, and unlimited Power-Ups.</p>
				</div>
			</div>
			
		);
		
	}
}
export default connect(mapStateToProps, null)(withRouter(PlusSidePanel));