import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

import Menu from './../menu/menu';
import Home from './../home/home';
import FAQs from './../faqs/faqs';
import Login from './../login/login';
import Quiz from './../quiz/quiz';
import Course1 from './../quiz/course1/course1';
import Course2 from './../quiz/course2/course2';
import Results from './../quiz/results/results';
import NotFound from './../not-found/not-found';

import PrivateRoute from './private-route';
import fire from './../../services/fire';

@inject('UIStore', 'SessionStore')
@observer
class Routes extends Component {
  componentDidMount() {
    this.removeListener = fire.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('user is true');
        this.props.SessionStore.setUser(user);
        this.props.SessionStore.handleSignedIn(true);
      } else {
        console.log('user is false');
        this.props.SessionStore.handleSignedIn(false);
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return (
      <BrowserRouter>
        <div className={`app container`}>
          <Route component={Menu} />
          <div className={`${this.props.UIStore.fadeIn}`}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/faqs" component={FAQs} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute
                authed={this.props.SessionStore.signedIn}
                exact
                path="/quiz"
                component={Quiz}
              />
              <PrivateRoute
                authed={this.props.SessionStore.signedIn}
                exact
                path="/c1"
                component={Course1}
              />
              <PrivateRoute
                authed={this.props.SessionStore.signedIn}
                exact
                path="/c2"
                component={Course2}
              />
              <PrivateRoute
                authed={this.props.SessionStore.signedIn}
                exact
                path="/results"
                component={Results}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
