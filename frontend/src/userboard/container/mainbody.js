import React from 'react';
import {MDBIcon} from 'mdbreact';
import List from '../component/list';
import AddList from '../component/addlist';
import "../../dashboard/assets/scroll.css";

class MainBody extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="mainbody_div scrollbar scrollbar-info" >
				<List/>
				<AddList/>
			</div>			
		)
	}
}


export default MainBody;