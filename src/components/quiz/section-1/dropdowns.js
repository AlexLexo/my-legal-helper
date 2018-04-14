import React from 'react';
//import DOMPurify from 'dompurify';
import Header from './../../styled-components/header';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Dropdowns extends React.Component {
  state = {
    dropdownOpen: false,
    selected: 'please choose an option.',
    resetDropdown: this.props.resetDropdown
  };
  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };
  render() {
    if (this.props.resetDropdown !== this.state.resetDropdown && this.state.selected !== 'please choose an option.')
      this.setState({
        resetDropdown: !this.state.resetDropdown,
        selected: 'please choose an option.'
      });
    return (
      <React.Fragment>
        <Header>{this.props.q.title}</Header>
        <br />
        <Dropdown style={{ width: '80vh', margin: 'auto' }} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle
            style={{
              width: '100%',
              height: '5rem',
              borderRadius: '50px',
              lineHeight: '1.1rem'
            }}
            caret
            color="primary"
          >
            {this.state.selected}
          </DropdownToggle>
          <DropdownMenu style={{ width: '100%', maxWidth: '100%' }}>
            {this.props.q.btnvalues.map((item, i) => {
              return (
                <DropdownItem
                  style={{ width: '100%', whiteSpace: 'normal' }}
                  key={i}
                  onClick={() => {
                    this.props.callback(item.ansId, item.nxtQId);
                    this.setState({ selected: item.ansLabel });
                  }}
                >
                  {item.ansLabel}
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </Dropdown>
      </React.Fragment>
    );
  }
}
export default Dropdowns;
