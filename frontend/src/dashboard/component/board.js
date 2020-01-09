import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { MDBIcon } from 'mdbreact';


class Board extends React.Component{
	constructor(props){
		super(props);
		
	}
	render(){
		return (
			<div className='board_div'  style={{backgroundImage: `url('${this.props.url}')`, backgroundSize: 'cover'}}>
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


export default Board;