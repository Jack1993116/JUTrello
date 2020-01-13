import React from 'react';
import {MDBIcon} from 'mdbreact';


class Boardvar extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className='boardbar_div'>
				<div className='left'>
					<button className='nav_btn'>
						<MDBIcon far icon="star" />
					</button>
					<button  className='nav_btn'>
						<strong>Psersonal</strong>
					</button>
					<button  className='nav_btn'>
						<strong><MDBIcon icon="lock" /> Private</strong>
					</button>
					<button  className='nav_btn circle'>
						<strong>J</strong>
					</button>
					<button  className='nav_btn'>
						<strong>Invite</strong>
					</button>
				</div>
				
				<div className='right'>
					<button  className='nav_btn'>
						<strong>
							<MDBIcon icon="toolbox" /> Butler
						</strong>
					</button>
					<button  className='nav_btn'>
						<strong>
							<MDBIcon icon="ellipsis-h" /> Show Menu
						</strong>
					</button>
				</div>
			</div>
			
		)
	}
}


export default Boardvar;