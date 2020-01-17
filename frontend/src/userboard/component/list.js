import React, {Component} from 'react';
import {render} from 'react-dom';
import { connect } from "react-redux";
import arrayMove from 'array-move';

import AddContent from "./addcontent";


const mapStateToProps = state => ({
	boardId: state.userboard.boardId,
	boardTitle: state.userboard.boardTitle,
	boardImgurl: state.userboard.boardImgurl,
	boardColor: state.userboard.boardColor,
	boardContents: state.userboard.boardContents
});

class List extends Component {
	constructor(props){
		super(props);
		this.onSortEnd=this.onSortEnd.bind(this);
	}
	onSortEnd = ({oldIndex, newIndex}) => {
		// this.setState(({contents}) => ({
		// 			contents: arrayMove(contents, oldIndex, newIndex)
		// 		}));
		// const clone = (obj) => Object.assign({}, obj);
		// const renameKey = (object, key, newKey) => {
		//   const clonedObj = clone(object);
		//   const targetKey = clonedObj[key];
		//   delete clonedObj[key];
		//   clonedObj[newKey] = targetKey;
		//   return clonedObj;
		// };
		// let newcontents = renameKey(this.state.contents,oldIndex,"newIndex");
		// this.setState({
		// 	contents: newcontents
		// })
		// console.log(this.state.contents)
	};
	render() {
		console.log(this.props.boardContents);
		return (
			<div className='list_container_div'>
				{
					Object.keys(this.props.boardContents).map(key => {
						
						 return (<div className='list_div'>
 											<div className='list_title_div'>
 												{key}
 											</div>
 												{this.props.boardContents[key]}
 												<AddContent key={key} title={key}/>
 										</div>);
					})
				}
				</div>
			);
	}
}


export default connect(mapStateToProps,null)(List);