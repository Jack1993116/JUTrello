import React from "react";
import {connect} from "react-redux";
import { withRouter} from "react-router-dom";

import "./dashboard.css";

import getuserinfo from "./action/getuserinfo";


// components
import NavBar from "./container/navbar";
import Boardbody from "./container/boardbody";

const mapDispatchProps = (dispatch) => ({
	getuserinfo: (history) => dispatch(getuserinfo(history))
});

class Dashboard extends React.Component{

	async componentWillMount(){
		await this.props.getuserinfo(this.props.history);
	}

	render(){
		return (
			<div style={{backgroundColor:"#fafbfc",minHeight:"100vh"}}>
				<NavBar bgcolor="#026aa7"/>
				<Boardbody />
			</div>
		);
	}
}


export default connect(null, mapDispatchProps)(withRouter(Dashboard));
