import React from 'react';
import {MDBIcon} from 'mdbreact';
import List from '../component/list';

class MainBody extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div>
				<List/>
			</div>			
		)
	}
}


export default MainBody;