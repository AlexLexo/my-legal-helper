import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';
import fire from './../../services/fire';

import './menu.css';

@inject('UIStore', 'SessionStore')
@observer
class Menu extends Component {
  componentWillMount() {
    this.props.UIStore.handleFadeIn();
  }
  handleLogout = e => {
    e.preventDefault();
    fire.auth().signOut();
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand onClick={() => this.props.history.push('/')}>
              Vocab Learner
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <IndexLinkContainer to="/">
                <NavItem> Home </NavItem>
              </IndexLinkContainer>
              <IndexLinkContainer to="/faqs">
                <NavItem> FAQs </NavItem>
              </IndexLinkContainer>
              {this.props.SessionStore.signedIn
                ? [
                    <IndexLinkContainer key="1" to="/quiz">
                      <NavItem className="fadeInMenuItem"> Quiz </NavItem>
                    </IndexLinkContainer>,
                    <IndexLinkContainer key="2" to="/#">
                      <NavItem
                        onClick={this.handleLogout}
                        className="fadeInMenuItem"
                      >
                        Logout
                      </NavItem>
                    </IndexLinkContainer>
                  ]
                : [
                    <IndexLinkContainer key="3" to="/login">
                      <NavItem className="fadeInMenuItem">
                        Sign in / Sign up
                      </NavItem>
                    </IndexLinkContainer>
                  ]}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Menu;
