import React, { Component } from 'react';
// import logo from './logo.svg';
import './app.css';
//import { Button } from 'reactstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import UserLogin from './UserLogin';
import RetrievePassword from './RetrievePassword';
import RetrievePasswordSent from './RetrievePasswordSent';
import ChangePassword from './ChangePassword';
import ChangePasswordSuccess from './ChangePasswordSuccess';
import Register from './Register';
import NotFound from './404';

export default class App extends Component {
  render() {
    return (

        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={UserLogin} />
            <Route exact path="/RetrievePassword" component={RetrievePassword} />
            <Route exact path="/RetrievePasswordSent" component={RetrievePasswordSent} />
            <Route exact path="/ChangePassword" component={ChangePassword} />
            <Route exact path="/ChangePasswordSuccess" component={ChangePasswordSuccess} />
            <Route exact path="/Register" component={Register} />

            
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>


        

    );
  }
}
