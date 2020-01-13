import React, {Component} from 'react';
import {render} from 'react-dom';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';


const SortableItem = SortableElement(({value}) => <div className='in_list_div'>{value}</div>);

const SortableList = SortableElement(SortableContainer(({items}) => {
	return (
		<div className='list_div'>
			<div className='list_title_div'>
				title
			</div>
				{items.map((value, index) => (
					<SortableItem index={index} value={value} />
				))}
		</div>
		);
}));

const Content = SortableContainer(({contents}) => {
	return (
		<div className='list_container_div'>
		{Object.keys(contents).map((key, index) => (
				<SortableList items={contents[key]} index={key} />
			))}
		</div>
		);
});

class List extends Component {
	constructor(props){
		super(props);
		this.state={
			contents: {
				done: ["plan","plan","plan","plan","plan"],
				todo: ["talk over", "design","design","design","design"]
			},
			imgurl: "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/641x960/9c0a570b328ab427f18a15bfd2ffd838/photo-1568313081041-dbd174f69e3b.jpg",
			title: "test board",
			_id: "5e189440684ca669cdc16cb6"
		}
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
		return (
				<Content contents={this.state.contents} onSortEnd={this.onSortEnd}/>
			);
	}
}


export default List;