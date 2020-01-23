import setAuthToken from './setAuthToken';
import axios from 'axios';

const gotoboard = (collectionid,history) => dispatch => {
    
        // get collection info using collectionid 
        // receive collection info 
        if (localStorage.token) {
             setAuthToken(localStorage.token);
         }
         axios
        .post("http://localhost:3001/getcollectioninfo",{collectionid: collectionid})
        .then(async res => {
                console.log(res.data.collection);
                await dispatch({type:'gotoboard', selectedcol: res.data.collection });
                history.push('/usercollection');
        })
       
   

};

export default gotoboard;