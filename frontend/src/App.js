import React from 'react';
import First from './firstpage/first';
import SignUp from './signup/signup';
import Dashboard from './dashboard/dashboard';
import Userboard from './userboard/userboard';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
    	<Route exact path="/" component={First}/>
    	<Route path="/signup" component={ () => ( <SignUp type="signup"/> ) }/>
    	<Route path="/login" component={ () => ( <SignUp type="login"/> ) }/>
    	<Route path="/dashboard" component={ Dashboard }/>
    	<Route path="/usercollection" component={ Userboard }/>
    </Router>
  );
}

export default App;
