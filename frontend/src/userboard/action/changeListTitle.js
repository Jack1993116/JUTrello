import setAuthToken from "./setAuthToken";
import axios from "axios";

const changeListTitle = (title) => dispatch => {

    dispatch({type:"addlist", newlisttitle: title});

};

export default changeListTitle;