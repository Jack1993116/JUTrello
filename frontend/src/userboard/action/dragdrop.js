
const dragdrop = (destination,source,draggableId) => dispatch => {

    dispatch({type:'dragdrop',destination: destination,source: source,draggableId: draggableId });

};

export default dragdrop;