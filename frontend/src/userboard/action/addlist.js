import setAuthToken from './setAuthToken';
import axios from 'axios';

const addlist = (title,id) => dispatch => {

    dispatch({type:'addlist', title: title});

};

export default addlist;