import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

import Menu from './../menu/menu';
import Home from './../home/home';
import FAQs from './../faqs/faqs';
import Contact from './../contact/contact';
import Quiz from './../quiz/quiz';
import Section1 from './../quiz/section-1/section-1';
import PreCaseTool from './../pre-case-tool/pre-case-tool';
import PreValuerTool from './../pre-valuer-tool/pre-valuer-tool';
import PreLetterTool from './../pre-letter-tool/pre-letter-tool';
import Guides from './../guides/guides';
import TsAndCs from './../tsandcs/tsandcs';
import NotFound from './../not-found/not-found';

@inject('RootStore')
@observer
class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route component={Menu} />
          <div
            className={`noNavBarContainer ${this.props.RootStore.UIStore.navBarIsOpen ? 'show' : 'hide'}`}
            onClick={this.props.RootStore.UIStore.closeNavBar}
          />
          <div className={`${this.props.RootStore.UIStore.fadeIn}`}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/faqs" component={FAQs} />
              <Route exact path="/quiz" component={Quiz} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/case-tool" component={Section1} />
              <Route exact path="/valuer" component={Section1} />
              <Route exact path="/pre-case-tool" component={PreCaseTool} />
              <Route exact path="/pre-valuer-tool" component={PreValuerTool} />
              <Route exact path="/pre-letter-tool" component={PreLetterTool} />
              <Route exact path="/guides" component={Guides} />
              <Route exact path="/tsandcs" component={TsAndCs} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
