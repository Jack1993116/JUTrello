import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {MDBIcon} from 'mdbreact';


class NavSearch extends React.Component{
	constructor(props){
		super(props);
		this.state={
			seach: ""
		}
		this.change=this.change.bind(this);
	}
	change(e){
		this.setState({
			seach: e.target.value
		})
	}
	render(){
		return (
			<div className='navsearch_div'>
				<input type='seach' className='navsearch' onClick={this.change}/>
				<span className='navsearch_span'>
					<MDBIcon icon="search" />
				</span>
			</div>
			
		)
	}
}


export default NavSearch;