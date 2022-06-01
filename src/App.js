import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import signupPage from './pages/signup';
import Apply from './Apply';
import organiser from './pages/organiser';
import candidate from './pages/candidate';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
        <Route path='/signup' component={signupPage} />
        <Route path='/organisation' component={organiser} />
        <Route path='/candidate' component={candidate} />


      </Switch>
    </Router>
  );
}

export default App;
