import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import { IndexLinkContainer } from 'react-router-bootstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink } from 'reactstrap';
import './menu.css';

@inject('RootStore')
@observer
class Menu extends Component {
  componentWillMount() {
    this.props.RootStore.UIStore.handleFadeIn();
  }

  handleNavbarBrandClick = () =>
    !this.props.RootStore.UIStore.navBarIsOpen
      ? this.props.history.push('/')
      : this.props.RootStore.UIStore.closeNavBar();

  render() {
    return (
      <Navbar dark expand={false}>
        <NavbarBrand />
        <NavbarToggler onClick={this.props.RootStore.UIStore.toggleNavBar} aria-label="menu" />
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
            <IndexLinkContainer key="2" to="/case-tool">
              <NavLink onClick={() => this.props.RootStore.UIStore.setCurrentSection('caseTool')}>Case Tool</NavLink>
            </IndexLinkContainer>
            <IndexLinkContainer key="3" to="/valuer">
              <NavLink onClick={() => this.props.RootStore.UIStore.setCurrentSection('valuer')}>Valuation Tool</NavLink>
            </IndexLinkContainer>
            <IndexLinkContainer key="4" to="/contact">
              <NavLink onClick={() => this.props.RootStore.UIStore.setCurrentSection('contact')}>Get in Touch</NavLink>
            </IndexLinkContainer>
            <Link to="/" className="nav-link" onClick={() => localStorage.clear()}>
              Start Fresh
            </Link>
          </Nav>
          <div className="menu-filler" />
        </Collapse>
      </Navbar>
    );
  }
}

export default Menu;
