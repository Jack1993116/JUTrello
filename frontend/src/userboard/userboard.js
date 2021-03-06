import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";


import "../dashboard/dashboard.css";
import "./userboard.css";

// components
import NavBar from "../dashboard/container/navbar";
import BoardVar from "../userboard/container/boardvar";
import MainBody from "../userboard/container/mainbody";


const mapStateToProps = state => ({
	userboard: state.dashboard.selectedcol
})

const mapDispatchProps = (dispatch) => ({
	initUserBoardState: (info) => dispatch({type: "initUserBoardState", info: info})
})


class Userboard extends React.Component{
	constructor(props){
		super(props);
		this.state={
			updated: false
		}
		this.init = this.init.bind(this);
	}

	async init(){
		await this.props.initUserBoardState(this.props.userboard);
	}

	async componentWillMount(){

		if ( !this.props.userboard._id ) {
			
			window.location.href = "/dashboard";
			
		} else {
			console.log(this.props.userboard)
			await this.props.initUserBoardState(this.props.userboard);
		}
	}

	
	render(){
		
		this.init();
		return (

			<div style={{
				backgroundImage:`url("${this.props.userboard.imgurl}")`,
				minHeight:"100vh", 
				backgroundSize: "cover",
    			backgroundPosition: "center",
				backgroundColor: this.props.userboard.color
			}}>
				<NavBar bgcolor="rgba(255,255,255,0.25)"/>
				<BoardVar boardtitle={this.props.userboard.title}/>
				<MainBody/>
			</div>

		)
			
	}
}


export default connect(mapStateToProps,mapDispatchProps)(withRouter(Userboard));
