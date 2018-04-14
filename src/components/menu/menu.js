import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import { IndexLinkContainer } from 'react-router-bootstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink } from 'reactstrap';
import { clicked } from './../../services/ga-helpers';
import './menu.css';

@inject('RootStore')
@observer
class Menu extends Component {
  componentWillMount() {
    this.props.RootStore.UIStore.handleFadeIn();
  }

  /*handleNavbarBrandClick = () =>
    !this.props.RootStore.UIStore.navBarIsOpen
      ? this.props.history.push('/')
      : this.props.RootStore.UIStore.closeNavBar();*/

  render() {
    return (
      <Navbar dark expand={false} className="sticky-top">
        <NavbarBrand />
        <NavbarToggler
          onClick={e => {
            this.props.RootStore.UIStore.toggleNavBar();
            clicked(e.target.id);
          }}
          aria-label="menu"
          id="menu toggler"
        />
        <Collapse
          isOpen={this.props.RootStore.UIStore.navBarIsOpen}
          navbar
          onClick={this.props.RootStore.UIStore.toggleNavBar}
        >
          <Nav className="ml-auto" navbar>
            <IndexLinkContainer to="/">
              <NavLink
                id="menu home"
                onClick={e => clicked(e.target.id) /*this.props.RootStore.UIStore.setCurrentSection('home')*/}
              >
                Home
              </NavLink>
            </IndexLinkContainer>
            {/*<IndexLinkContainer to="/faqs">
              <NavLink onClick={() => this.props.RootStore.UIStore.setCurrentSection('faqs')}> FAQs </NavLink>
    </IndexLinkContainer>*/}
            <IndexLinkContainer key="2" to="/pre-case-tool">
              <NavLink
                id="menu case"
                onClick={e => clicked(e.target.id) /*this.props.RootStore.UIStore.setCurrentSection('caseTool')*/}
              >
                Case Tool
              </NavLink>
            </IndexLinkContainer>
            <IndexLinkContainer key="3" to="/pre-valuer-tool">
              <NavLink
                id="menu valuer"
                onClick={e => clicked(e.target.id) /*this.props.RootStore.UIStore.setCurrentSection('valuer')*/}
              >
                Valuation Tool
              </NavLink>
            </IndexLinkContainer>
            <IndexLinkContainer key="4" to="/guides">
              <NavLink
                id="menu guides"
                onClick={e => clicked(e.target.id) /*this.props.RootStore.UIStore.setCurrentSection('valuer')*/}
              >
                Guides
              </NavLink>
            </IndexLinkContainer>
            <IndexLinkContainer key="5" to="/contact">
              <NavLink
                id="menu contact"
                onClick={e => clicked(e.target.id) /*this.props.RootStore.UIStore.setCurrentSection('contact')*/}
              >
                Get in Touch
              </NavLink>
            </IndexLinkContainer>
            <Link
              to="/"
              id="menu start fresh"
              className="nav-link"
              onClick={e => {
                clicked(e.target.id);
                localStorage.clear();
                this.props.RootStore.SessionStore.setUserObj();
              }}
            >
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
