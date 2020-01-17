import React, {Component} from 'react';
import {render} from 'react-dom';
import { MDBIcon } from "mdbreact";
import { connect } from "react-redux";

import addcontent from "../action/addcontent";


// const mapStateToProps = state => ({
// 	boardinfo: state.dashboard.selectedcol
// });

const mapDispatchProps = (dispatch) => ({
	addcontent: (content,title) => dispatch(addcontent(content,title))
}); 

class AddContent extends Component {
	constructor(props){
		super(props);
		this.state = {
			show: false,
			content: ""
		}

		this.showInput = this.showInput.bind(this);
		this.closeInput = this.closeInput.bind(this);
		this.inputcontent = this.inputcontent.bind(this);
		this.addcontentfunc = this.addcontentfunc.bind(this);
	}

	addcontentfunc() {

		if (this.state.content != "") {
			
			this.props.addcontent(this.state.content,this.props.title);
			// axios and save title to store
		}
		this.closeInput();

	}

	inputcontent(e) {

		this.setState({
			content: e.target.value
		})

	}

	showInput() {

		if ( !this.state.show ) {
			this.setState({
				show: true
			})
		}
		
	}

	closeInput() {

		console.log(this.state.content);
		this.setState({
				show: false,
				content: ""
			})

	}
	
	render() {

		const addlist = <h6 className="board_addCardDiv--title">+ Add a card </h6>;

		const addcontent = 
			<div>
				<textarea className="board_addCardDiv--input" type="text" placeholder="Enter list tilte..." onChange={this.inputcontent} autoFocus/>
				<button className="board_addCardDiv--button" onClick={this.addcontentfunc}>Add Card</button>
				<button className="board_addCardDiv--button" style={{backgroundColor: "rgba(0,0,0,0)", color: "black"}} onClick={this.closeInput}>
					<MDBIcon icon="times" />
				</button>
			</div>;

		return (
				<div onClick = { this.showInput } className="board_addCardDiv">
					{
						this.state.show === false ? addlist:addcontent
					}
				</div>
			);
	}
}


export default connect(null,mapDispatchProps)(AddContent);