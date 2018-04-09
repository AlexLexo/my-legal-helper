import React from 'react';
//import DOMPurify from 'dompurify';
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
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret color="primary">
          {this.state.selected}
        </DropdownToggle>
        <DropdownMenu>
          {this.props.q.btnvalues.map((item, i) => {
            return (
              <DropdownItem
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
    );
  }
}
export default Dropdowns;
/*import React from 'react';
//import DOMPurify from 'dompurify';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Dropdowns extends React.Component {
  state = {
    dropdownOpen: false,
    selected: 'please choose an option.'
  };
  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };
  render() {
    return (
      <Dropdown group isOpen={this.state.dropdownOpen} toggle={this.toggle} className="btn btn-primary">
        <button onClick={this.toggle}>
          {this.props.q.btnvalues.map((item, i) => {
            return (
              <button
                className="dropdown-item"
                key={i}
                onClick={() => {
                  this.props.callback(item.ansId, item.nxtQId);
                  this.setState({ selected: item.ansId });
                }}
              >
                {item.ansLabel}
              </button>
            );
          })}
        </button>
      </Dropdown>
    );
  }
}
export default Dropdowns;
*/
