
const addcontent = (content,title) => dispatch => {

    dispatch({type:'addcontent',title: title,content: content });

};

export default addcontent;