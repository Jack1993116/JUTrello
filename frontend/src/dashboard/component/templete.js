import React from 'react';
import {BrowserRouter as Router, withRouter} from 'react-router-dom';
import { MDBIcon } from 'mdbreact';
import {connect} from 'react-redux';


const mapDispatchProps = (dispatch) => ({

})


class Templete extends React.Component{
	constructor(props){
		super(props);
		
	}
	render(){
		return (
			<div className='temp_div'>
				<div className='temp_img_div' style={{backgroundImage: `url('${this.props.url}')`, backgroundSize: 'cover'}}></div>

				<div className='temp_avatar' style={{backgroundImage: `url('${this.props.avatar}')`, backgroundSize: 'cover'}}></div>
				<div className='temp_text'>
					<h6>
						{this.props.title}
					</h6>
					{this.props.auther}<br/>
					{this.props.about}
				</div>
			</div>
			
		)
	}
}


export default connect(null,mapDispatchProps)(withRouter(Templete));