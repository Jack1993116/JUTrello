import React from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";

import { MDBCol, MDBIcon} from "mdbreact";
import Board from "../component/board";
import Templete from "../component/templete";
import Createboard from "../component/createboard";
import CreateGroup from "../component/createGroup";

import "../assets/scroll.css";

const mapStateToProps = state => ({
	usercollection: state.dashboard.usercollection,
	stared: state.dashboard.stared
});


class RightPlus extends React.Component{

	render(){

		return (
			<div>
				
			</div>
		);
		
	}
}
export default connect(mapStateToProps, null)(withRouter(BoardSidePanel));