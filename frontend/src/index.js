import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { combineReducers } from "redux";

import signupReducer from './signup/reducer/reducer';
import dashboardReducer from './dashboard/reducer/reducer';
import userboardReducer from './userboard/reducer/reducer';


	
// signup reducer: 
	// userinfo: {	
	// 	signEmail: "defaultEmail", 
	// 	signPassword: "defaultPassword" 
// }
// dashboard reducer:
	// {
	// 	usercollection: {collections:[],groups:[]},
	// 	selectedcol: {}
	// }
//  userboard reducer:
	// {

	// }

const rootreducer = combineReducers({
	signup: signupReducer,
	dashboard: dashboardReducer,
	userboard: userboardReducer
})

const store = createStore(rootreducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
