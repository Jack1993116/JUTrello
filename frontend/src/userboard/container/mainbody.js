import React from 'react';
import {MDBIcon} from 'mdbreact';
import List from '../component/list';
import AddList from '../component/addlist';

class MainBody extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="mainbody_div">
				<List/>
				<AddList/>
			</div>			
		)
	}
}


export default MainBody;