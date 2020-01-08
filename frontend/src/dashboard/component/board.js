import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';


class Board extends React.Component{
	constructor(props){
		super(props);
		
	}
	change(e){
		this.setState({
			seach: e.target.value
		})
	}
	render(){
		return (
			<div className='board_div'>
				<div className='board_title'>
					group
				</div>
				<div className='board_star'>*</div>
			</div>
			
		)
	}
}


export default Board;