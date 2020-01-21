const initstate = {
	boardId: "",
	boardTitle: "",
	boardImgurl: "",
	boardColor: "",
	boardContents: {}
}

const reducer = (state = initstate, action) => {
	switch(action.type){

		case "dragdrop" : {
			state.boardContents[action.source.droppableId].splice(action.source.index,1);
			state.boardContents[action.destination.droppableId].splice(action.destination.index,0,action.draggableId);

			return {...state};
		}; break;

		case "addlist" : {
			let newlist = {};
			newlist[action.title] = [""];
			console.log(newlist)
			return {...state, 
				boardContents: {...state.boardContents, ...newlist}
			};
		}; break;

		case "addcontent" : {
			console.log(action.title)
			console.log(action.content)
			state.boardContents[action.title].push(action.content);
			console.log(state)
			return {...state};
		}; break;

		case "initUserBoardState" : {
			return { 
				boardId: action.info._id,
				boardTitle: action.info.title,
				boardImgurl: action.info.imgurl,
				boardColor: action.info.color,
				boardContents: action.info.contents
			 };
		}; break;

		default: return state;
		
	}
}

export default reducer;