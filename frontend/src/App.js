import React from 'react';
import First from './firstpage/first';
import SignUp from './signup/signup';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
    	<Route exact path="/" component={First}/>
    	<Route path="/signup" component={ () => ( <SignUp type="signup"/> ) }/>
    	<Route path="/login" component={ () => ( <SignUp type="login"/> ) }/>
    </Router>
  );
}

export default App;
