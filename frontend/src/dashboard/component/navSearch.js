import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {MDBIcon} from 'mdbreact';


class NavSearch extends React.Component{
	constructor(props){
		super(props);
		this.state={
			seach: "",
			show: true
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
				<input type='seach' className='navsearch' onChange={this.change}/>
				<div className='navsearch_div_icon1' style={{color:"black"}}>
					<MDBIcon icon="search"/>
				</div>
				<div className='navsearch_div_icon2' style={{display:"none"}}>
					<MDBIcon icon="times" />
					<MDBIcon icon="location-arrow" />
				</div>
				
			</div>
			
		)
	}
}


export default NavSearch;