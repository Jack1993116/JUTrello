import React, {Component} from "react";
import {render} from "react-dom";
import { connect } from "react-redux";
import arrayMove from "array-move";

import AddContent from "./addcontent";
import ListContent from "./listContent";


const mapStateToProps = state => ({
	boardId: state.userboard.boardId,
	boardTitle: state.userboard.boardTitle,
	boardImgurl: state.userboard.boardImgurl,
	boardColor: state.userboard.boardColor,
	boardContents: state.userboard.boardContents
});

// const mapDispatchProps = dispatch => ({
// 	changeListTitle: (title) => dispatch(changeListTitle(title, id))
// })

class List extends Component {
	constructor(props){
		super(props);

		this.parentrerender = this.parentrerender.bind(this);
		this.changeListTitle = this.changeListTitle.bind(this);
		this.onDragStart = this.onDragStart.bind(this);
	}

	onDragStart(e){
		// console.log(e.target.id)
		// console.log(e.dataTransfer.getdata("text", id)+">>>>");
	}

	changeListTitle(e) {
		if (e.target.value !="") {

		} 
	}

	parentrerender() {
		this.forceUpdate();
	}

	render() {
		console.log(this.props.boardContents);
		return (
			<div className="list_container_div">
				{
					Object.keys(this.props.boardContents).map(key => {
						
						if (key != "default") {
							return (
								<div 
									className="list_div"
									draggable
									onDragStart={(e) => this.onDragStart(e)}
									id = "sdfsdf"
								 >testtext
									<textarea className="list_title_div" onChange={this.changeListTitle}>
										{key}
									</textarea>
										{
											this.props.boardContents[key].map(content => {
												if (content != "") {
													return (
														<ListContent 
															title={content} 
															key={content} 
															
															/>
													);
												}
												
											})
										}
									<AddContent key={this.props.boardId} title={key} parentrerender = {this.parentrerender}/>
								</div>
							);
						}
					 
					})
				}
			</div>
			);
	}
}


export default connect(mapStateToProps,null)(List);