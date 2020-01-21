import React from 'react';
import {withRouter} from 'react-router-dom';
import { MDBIcon } from 'mdbreact';
import gotoboard from '../action/gotoboard';
import stared from '../action/stared';
import {connect} from 'react-redux';


const mapDispatchProps = (dispatch) => ({
	gotoboard: (collectionid,history) => dispatch(gotoboard(collectionid,history)),
	stared: (id,show) => dispatch(stared(id,show)),

})

const mapStateToProps = state => ({
	usercollection: state.dashboard.usercollection,
	starstateofRedux: state.dashboard.stared,
	flag: [1]
})

class Board extends React.Component{
	constructor(props){

		super(props);
		
		this.gotoboard = this.gotoboard.bind(this);
		this.star = this.star.bind(this);
		
	}

	gotoboard(){

		this.props.gotoboard(this.props.collectionid,this.props.history);

	}

	star(){

		this.props.stared(this.props.collectionid);

	}

	render(){
		return (

			<div className='board_div'>

				<div className='board_back_div'  
					style={{backgroundImage: `url('${this.props.url}')`, 
							backgroundSize: 'contain',
							backgroundColor: this.props.color
						}} 
					onClick={this.gotoboard} >
					<div className='board_title'>
					
						{this.props.title}

					</div>
				
				</div>
				{
					this.props.flag.map(row=>{

						if (this.props.starstateofRedux.indexOf(this.props.collectionid) != -1 ) {
							return (
								<div className={"board_star_show"}
									onClick={this.star}
									key = {`board${this.props.collectionid}`} 
									>
									<MDBIcon far icon="star" style={{color: "yellow"}}/>
								</div>
								
								);
						} else {
							return (
								<div className={"board_star"}
									onClick={this.star}
									key = {`board${this.props.collectionid}`} 
									>
									<MDBIcon far icon="star" style={{color: "grey"}}/>
								</div>
							)
						}

					})
				}
				
			</div>

		)
	}
}


export default connect(mapStateToProps, mapDispatchProps)(withRouter(Board));