import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


import '../dashboard/dashboard.css'
import './userboard.css';

// components
import NavBar from '../dashboard/container/navbar'
import BoardVar from '../userboard/container/baordvar'
import MainBody from '../userboard/container/mainbody'


const mapStateToProps = state => ({
	userboard: state.dashboard.selectedcol
})

const mapDispatchProps = (dispatch) => ({
})


class Userboard extends React.Component{
	constructor(props){
		super(props);
	}
	componentWillMount(){
		console.log(this.props.userboard)
	}
	render(){
		
			return (
			<div style={{backgroundImage:`url('${this.props.userboard.imgurl}')`,minHeight:"100vh", backgroundSize:'cover'}}>
				<NavBar/>
				<BoardVar/>
				<MainBody/>
			</div>

			)
			
	}
}


export default connect(mapStateToProps,mapDispatchProps)(withRouter(Userboard));
