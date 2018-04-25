import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import ReactGA from 'react-ga';

import Navbar from './../styled-components/navbar';
import Home from './../home/home';
import FAQs from './../faqs/faqs';
import Contact from './../contact/contact';
import ToolHub from './../quiz/quiz';
import Section1 from './../quiz/section-1/section-1';
import PreCaseTool from './../pre-case-tool/pre-case-tool';
import PreValuerTool from './../pre-valuer-tool/pre-valuer-tool';
import PreLetterTool from './../pre-letter-tool/pre-letter-tool';
import Guides from './../guides/guides';
import TsAndCs from './../tsandcs/tsandcs';
import PrivacyPolicy from './../privacy-policy/privacy-policy';
import NotFound from './../not-found/not-found';

@inject('RootStore')
@observer
class Routes extends Component {
  componentDidMount() {
    ReactGA.initialize('UA-77504696-3');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route component={Navbar} />
          <div
            className={`noNavBarContainer ${this.props.RootStore.UIStore.navBarIsOpen ? 'show' : 'hide'}`}
            onClick={this.props.RootStore.UIStore.closeNavBar}
          />
          <div className={`${this.props.RootStore.UIStore.fadeIn}`}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/faqs" component={FAQs} />
              <Route exact path="/tool-hub" component={ToolHub} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/case-tool" component={Section1} />
              <Route exact path="/valuer" component={Section1} />
              <Route exact path="/pre-case-tool" component={PreCaseTool} />
              <Route exact path="/pre-valuer-tool" component={PreValuerTool} />
              <Route exact path="/pre-letter-tool" component={PreLetterTool} />
              <Route exact path="/guides" component={Guides} />
              <Route exact path="/tsandcs" component={TsAndCs} />
              <Route exact path="/privacy-policy" component={PrivacyPolicy} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
