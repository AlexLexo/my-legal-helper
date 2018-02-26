import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { IndexLinkContainer } from 'react-router-bootstrap';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink } from 'reactstrap';

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

  handleNavbarBrandClick = () =>
    !this.props.UIStore.navBarIsOpen ? this.props.history.push('/') : this.props.UIStore.closeNavBar();

  render() {
    return (
      <Navbar dark expand={false}>
        <NavbarBrand onClick={this.handleNavbarBrandClick}>My Legal Helper</NavbarBrand>
        <NavbarToggler onClick={this.props.UIStore.toggleNavBar} />
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
                    <NavLink> All Tools </NavLink>
                  </IndexLinkContainer>,
                  <IndexLinkContainer key="2" to="/section1">
                    <NavLink> Case Tool </NavLink>
                  </IndexLinkContainer>,
                  <IndexLinkContainer key="3" to="/valuation">
                    <NavLink> Valuation Tool </NavLink>
                  </IndexLinkContainer>,
                  <IndexLinkContainer key="4" to="/#">
                    <NavLink onClick={this.handleLogout}>Logout</NavLink>
                  </IndexLinkContainer>
                ]
              : [
                  <IndexLinkContainer key="3" to="/login">
                    <NavLink>Sign in / Sign up</NavLink>
                  </IndexLinkContainer>
                ]}
          </Nav>
          <div className="menu-filler" />
        </Collapse>
      </Navbar>
    );
  }
}

export default Menu;
