import React from 'react';

import {MDBRow, MDBCol, MDBModal, MDBModalBody, MDBModalHeader} from 'mdbreact';



class Boardmodal extends React.Component{

	constructor(props){
		super(props);
		this.state={
			modal: false
		}
		this.modaltoggle=this.modaltoggle.bind(this);
	}

	modaltoggle(){
		this.setState({
			modal: !this.state.modal
		})
	}

	render(){
		return (
			<>
			<div className='create_board_div' onClick={this.modaltoggle}>
				<div style={{margin:'auto'}}>
					Create new
				</div>
			</div>
			<MDBModal isOpen={this.state.modal} toggle={this.modaltoggle} >
				<MDBModalBody style={{backgroundImage: 'url("https://trello-backgrounds.s3.amazonaws.com/SharedBackground/641x960/9c0a570b328ab427f18a15bfd2ffd838/photo-1568313081041-dbd174f69e3b.jpg")', backgroundSize:"cover", height: "auto"}}>
					<MDBRow>
						<MDBCol size="7">
							<input type="text" placeholder='Add title' className="board_modal_input"/>
							<select className="modal_select">
								<option>No team</option>
								<option>team1</option>
								<option>team2</option>
							</select>
							<select className="modal_select">
								<option>Private</option>
								<option>public</option>
							</select>
							<button className='create_board_btn'>create board</button>
							<a href=''>start with a template</a>
						</MDBCol>
						<MDBCol size="5">
							<ul style={{display:'flex'}} type='none'>
								<li style={{display:'inline'}}>
									<div>colors</div>
								</li>
							</ul>
						</MDBCol>
					</MDBRow>
				</MDBModalBody>
			</MDBModal>
			</>
		)
	}
}

export default Boardmodal;

	