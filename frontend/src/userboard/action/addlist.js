
const addlist = (title,id) => dispatch => {

    dispatch({type:'addlist', title: title});

};

export default addlist;