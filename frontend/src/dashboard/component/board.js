import React from 'react';
import {withRouter} from 'react-router-dom';
import { MDBIcon } from 'mdbreact';
import gotoboard from '../action/gotoboard';
import {connect} from 'react-redux';


const mapDispatchProps = (dispatch) => ({
	gotoboard: (collectionid,history) => dispatch(gotoboard(collectionid,history))
})


class Board extends React.Component{
	constructor(props){
		super(props);
		this.gotoboard = this.gotoboard.bind(this);
	}
	gotoboard(){
		this.props.gotoboard(this.props.collectionid,this.props.history);
	}
	render(){
		return (
			<div className='board_div'  style={{backgroundImage: `url('${this.props.url}')`, backgroundSize: 'cover'}} onClick={this.gotoboard}>
				<div className='board_title'>
					{this.props.title}
				</div>
				<div className='board_star' onClick={()=> alert("star")}>
					<MDBIcon far icon="star"/>
				</div>
			</div>
			
		)
	}
}


export default connect(null,mapDispatchProps)(withRouter(Board));