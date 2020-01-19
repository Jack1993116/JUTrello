import setAuthToken from './setAuthToken';
import axios from 'axios';

const addcontent = (content,title) => dispatch => {

    dispatch({type:'addcontent',title: title,content: content });

};

export default addcontent;