import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { IndexLinkContainer } from 'react-router-bootstrap';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink } from 'reactstrap';

import fire from './../../services/fire';

import './menu.css';

@inject('UIStore', 'SessionStore')
@observer
class Menu extends Component {
  /*constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };*/

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
      <Navbar color="inverse" light expand="md" className="navBar">
        <NavbarBrand onClick={() => this.props.history.push('/')}>My Legal Helper</NavbarBrand>
        <NavbarToggler /*onClick={this.toggle}*/ onClick={this.props.UIStore.toggleNavBar} />
        <Collapse isOpen={this.props.UIStore.navBarIsOpen} navbar onClick={this.props.UIStore.toggleNavBar}>
          <Nav className="ml-auto" navbar>
            <IndexLinkContainer to="/">
              <NavLink> Home </NavLink>
            </IndexLinkContainer>
            <IndexLinkContainer to="/faqs">
              <NavLink> FAQs </NavLink>
            </IndexLinkContainer>
            {this.props.SessionStore.signedIn
              ? [
                  <IndexLinkContainer key="1" to="/quiz">
                    <NavLink className="fadeInMenuItem"> Case Tool </NavLink>
                  </IndexLinkContainer>,
                  <IndexLinkContainer key="2" to="/#">
                    <NavLink onClick={this.handleLogout} className="fadeInMenuItem">
                      Logout
                    </NavLink>
                  </IndexLinkContainer>
                ]
              : [
                  <IndexLinkContainer key="3" to="/login">
                    <NavLink className="fadeInMenuItem">Sign in / Sign up</NavLink>
                  </IndexLinkContainer>
                ]}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Menu;
