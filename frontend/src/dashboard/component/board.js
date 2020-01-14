import React from 'react';
import {withRouter} from 'react-router-dom';
import { MDBIcon } from 'mdbreact';
import gotoboard from '../action/gotoboard';
import stared from '../action/stared';
import {connect} from 'react-redux';


const mapDispatchProps = (dispatch) => ({
	gotoboard: (collectionid,history) => dispatch(gotoboard(collectionid,history)),
	stared: (id,show) => dispatch(stared(id,show))
})

const mapStateToProps = state => ({
	starstateofRedux: state.dashboard.stared
})

class Board extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			starDivClassName: "board_star",
			starColor: "grey",
			show: this.props.starstate=='true'?true:false
		}
		this.gotoboard = this.gotoboard.bind(this);
		this.star = this.star.bind(this);
	}

	gotoboard(){
		this.props.gotoboard(this.props.collectionid,this.props.history);
	}

	star(){
		this.setState({
			starColor: "grey",
			show: !this.state.show
		});
		this.props.stared(this.props.collectionid, this.state.show);
	}

	render(){
		
		return (

			<div className='board_div'>

				<div className='board_back_div'  
					style={{backgroundImage: `url('${this.props.url}')`, 
							backgroundSize: 'cover'
						}} 
					onClick={this.gotoboard} >
					<div className='board_title'>
					
						{this.props.title}

					</div>
				
				</div>
				
				<div className={this.state.show==true?"board_star_show":"board_star"}
					onClick={this.star} 
					>
					<MDBIcon far icon="star" style={{color: this.state.show==true?"yellow":"grey"}}/>
				</div>
			</div>

		)
	}
}


export default connect(mapStateToProps, mapDispatchProps)(withRouter(Board));