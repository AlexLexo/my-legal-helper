import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { clicked } from './../../services/ga-helpers';
import styled from 'styled-components';

const MenuButton = styled.button`
  z-index: 100;
  font-size: 20px;
  width: 3em;
  height: 3em;
  border: none;
  border-radius: 100%;
  position: fixed;
  top: 10px;
  right: 10px;
  margin-left: auto;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  &:focus {
    outline: none;
    background-color: rgba(0, 0, 0, 0);
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0);
  }
  &:active {
    outline: none;
    background-color: rgba(0, 0, 0, 0);
  }

  &:before,
  &:after,
  & span {
    content: '';
    display: block;
    background-color: ${props => props.theme.colors.color1};
    height: 0.25em;
    width: 1.5em;
    transition: transform 0.4s;
    transform: translateZ(0);
    position: absolute;
    left: 0.75em;
    transform-origin: 50% 50%;
  }

  &:before {
    transform: ${props => (props.active ? 'rotate(45deg) scaleX(0.75)' : 'translate3d(0,-0.5em,0)')};
    transition: transform 0.7s;
  }

  &:after {
    transform: ${props => (props.active ? 'rotate(-45deg) scaleX(0.75)' : 'translate3d(0,0.5em,0)')};
    transition: transform 0.7s;
  }

  & span {
    opacity: ${props => (props.active ? 0 : 1)};
    transform: ${props => (props.active ? 'scaleX(0)' : 'scaleX(1)')};
    transition: opacity 0.15s, transform 0.15s;
  }
  @media (max-width: 599px) {
    top: 2px;
    right: 2px;
  }
`;

/*const Menu = styled.nav`
  position: absolute;
  z-index: 99;
  left: 0;
  top: 0;
  height: 100%;
  transition: width 0.2s;
  width: ${props => (props.menuOpen ? '100%' : '0')};
  background-color: ${props => props.theme.colors.color3};
  overflow: hidden;
  & a {
    transition: opacity 0.4s;
    opacity: ${props => (props.menuOpen ? '1' : '0')};
    width: 100%
    text-decoration: none;
    color: white;
    font-size: 2em;
    background-color: ${props => props.theme.colors.color3};
    text-transform: uppercase;
    display: flex;
    align-items: center;
    height: 10%;
    padding-Left: 10%;
    }
  }
`;*/
const Menu = styled.nav`
  position: absolute;
  z-index: 99;
  left: 0;
  top: 0;
  height: 100%;
  transition: width 0.2s;
  width: ${props => (props.menuOpen ? '100%' : '0')};
  background-color: ${props => props.theme.colors.color3};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: space-around;
  padding-top: 50px;
  & a, span {
    transition: opacity 0.4s;
    opacity: ${props => (props.menuOpen ? '1' : '0')};
    color: white;
    font-size: 2em;
    width: 100%
    text-decoration: none;
    text-transform: uppercase;
    font-family: 'Quicksand';
    @media (max-width: 900px) {
      padding-top: 5%;
      padding-Left: 25%;
      }
    @media (max-width: 1199px) {
      padding-top: 5%;
      padding-Left: 25%;
      }
    @media (min-width: 1200px) {
    padding-top: 5%;
    padding-Left: 25%;
    }
  }
  }
  @media print {
    display: none;
  }
`;

class NavBar extends Component {
  state = {
    menuOpen: false
  };

  onMenuButtonClick = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <React.Fragment>
        <MenuButton active={this.state.menuOpen} onClick={this.onMenuButtonClick}>
          <span />
        </MenuButton>
        <Menu menuOpen={this.state.menuOpen} onClick={this.onMenuButtonClick}>
          <span />
          <Link to="/" id="menu home" onClick={e => clicked(e.target.id)}>
            Home
          </Link>
          <Link to="/tool-hub" id="menu case" onClick={e => clicked(e.target.id)}>
            Do I have a good case?
          </Link>
          <Link
            to="/pre-valuer-tool"
            id="menu valuer"
            style={{ textDecoration: 'none' }}
            onClick={e => clicked(e.target.id)}
          >
            How much is my case worth?
          </Link>
          <Link to="/guides" id="menu guides" onClick={e => clicked(e.target.id)}>
            Legal Guides
          </Link>
          <Link to="/contact" id="menu contact" onClick={e => clicked(e.target.id)}>
            Get in Touch
          </Link>
          <Link
            style={{ color: '#42506b' }}
            to="/"
            id="menu start fresh"
            onClick={e => {
              clicked(e.target.id);
              localStorage.clear();
              this.props.RootStore.SessionStore.setUserObj();
            }}
          >
            Start Fresh
          </Link>
        </Menu>
      </React.Fragment>
    );
  }
}

export default NavBar;
