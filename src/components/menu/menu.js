import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { IndexLinkContainer } from 'react-router-bootstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink } from 'reactstrap';
import fire from './../../services/fire';
import './menu.css';

@inject('RootStore')
@observer
class Menu extends Component {
  componentWillMount() {
    this.props.RootStore.UIStore.handleFadeIn();
  }

  handleLogout = e => {
    e.preventDefault();
    fire.auth().signOut();
    this.props.history.push('/');
  };

  handleNavbarBrandClick = () =>
    !this.props.RootStore.UIStore.navBarIsOpen
      ? this.props.history.push('/')
      : this.props.RootStore.UIStore.closeNavBar();

  render() {
    return (
      <Navbar dark expand={false}>
        <NavbarBrand onClick={this.handleNavbarBrandClick}>My Legal Helper</NavbarBrand>
        <NavbarToggler onClick={this.props.RootStore.UIStore.toggleNavBar} />
        <Collapse
          isOpen={this.props.RootStore.UIStore.navBarIsOpen}
          navbar
          onClick={this.props.RootStore.UIStore.toggleNavBar}
        >
          <Nav className="ml-auto" navbar>
            <IndexLinkContainer to="/">
              <NavLink onClick={() => this.props.RootStore.UIStore.setCurrentSection('home')}> Home </NavLink>
            </IndexLinkContainer>
            <IndexLinkContainer to="/faqs">
              <NavLink onClick={() => this.props.RootStore.UIStore.setCurrentSection('faqs')}> FAQs </NavLink>
            </IndexLinkContainer>
            {this.props.RootStore.SessionStore.signedIn
              ? [
                  <IndexLinkContainer key="1" to="/quiz">
                    <NavLink> All Tools </NavLink>
                  </IndexLinkContainer>,
                  <IndexLinkContainer key="2" to="/section1">
                    <NavLink onClick={() => this.props.RootStore.UIStore.setCurrentSection('caseTool')}>
                      Case Tool
                    </NavLink>
                  </IndexLinkContainer>,
                  <IndexLinkContainer key="3" to="/section1">
                    <NavLink onClick={() => this.props.RootStore.UIStore.setCurrentSection('valuer')}>
                      Valuation Tool
                    </NavLink>
                  </IndexLinkContainer>,
                  <IndexLinkContainer key="4" to="/contact">
                    <NavLink onClick={() => this.props.RootStore.UIStore.setCurrentSection('contact')}>
                      Get in Touch
                    </NavLink>
                  </IndexLinkContainer>,
                  <IndexLinkContainer key="5" to="/#">
                    <NavLink onClick={() => this.handleLogout}>Logout</NavLink>
                  </IndexLinkContainer>
                ]
              : [
                  <IndexLinkContainer key="6" to="/login">
                    <NavLink onClick={() => this.props.RootStore.UIStore.setCurrentSection('login')}>
                      Sign in / Sign up
                    </NavLink>
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
