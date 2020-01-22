
const changeListTitle = (title) => dispatch => {

    dispatch({type:"addlist", newlisttitle: title});

};

export default changeListTitle;