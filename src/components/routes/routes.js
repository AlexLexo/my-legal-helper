import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

import Menu from './../menu/menu';
import Home from './../home/home';
import FAQs from './../faqs/faqs';
import Login from './../login/login';
import Quiz from './../quiz/quiz';
import Section1 from './../quiz/section-1/section-1';
import NotFound from './../not-found/not-found';

import PrivateRoute from './private-route';
import fire from './../../services/fire';

@inject('UIStore', 'SessionStore')
@observer
class Routes extends Component {
  componentDidMount() {
    this.removeListener = fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.SessionStore.handleSignedIn(true, user);
      } else {
        this.props.SessionStore.handleSignedIn(false, null);
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
              <PrivateRoute authed={this.props.SessionStore.signedIn} exact path="/quiz" component={Quiz} />
              <PrivateRoute authed={this.props.SessionStore.signedIn} exact path="/section1" component={Section1} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
