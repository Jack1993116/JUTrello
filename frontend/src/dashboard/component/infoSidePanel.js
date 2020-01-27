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

class InfoSidePanel extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		
		return (
			<div className="right_panel_div" style={{textAlign:"center"}}>
				<h6>Information</h6>
				<button onClick={this.props.closethis} className="rightCloseBtn">
					<MDBIcon icon="times"/>
				</button>
				<hr/>
				<div className="infoSidePanel_div">
					<img src="https://a.trellocdn.com/prgb/dist/images/tips/info-image-02@1x.d554cbf6d240549b8ef0.png"
						 alt="information"/>
					<h5>It’s Easy To Get Your Team Up And Running With Trello Playbooks</h5>
				</div>
				<div>
				</div>
				<div className="rightPanel_tip">
					Get a new tip.
				</div>
				<hr/>
				<div style={{width: "350px", alignText:"center"}}>
					<ul style={{"listStyle": "none", "display": "inline"}}>
						<li style={{'display': 'inline-block',margin: "5px"}}><a href='/'>Developers</a></li>
						<li style={{'display': 'inline-block',margin: "5px"}}><a href='/'>About</a></li>
						<li style={{'display': 'inline-block',margin: "5px"}}><a href='/'>Help</a></li>
						<li style={{'display': 'inline-block',margin: "5px"}}><a href='/'>Legal</a></li>
					</ul>
				</div>
				
			</div>
			
		);
		
	}
}
export default connect(mapStateToProps, null)(withRouter(InfoSidePanel));