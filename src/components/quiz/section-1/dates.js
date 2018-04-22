import React from 'react';
import DOMPurify from 'dompurify';
import 'react-datez/dist/css/react-datez.css';
import { ReactDatez } from 'react-datez';

import Header from './../../styled-components/header';
//import Date from './../../styled-components/date';

class Dates extends React.Component {
  state = {
    date: ''
  };
  handleChange = value => {
    this.setState({ date: value }, () => this.props.callback(this.state.date, this.props.q.nxtQId));
  };
  render() {
    const title = { __html: DOMPurify.sanitize(this.props.q.title) };
    return (
      <React.Fragment>
        <Header t="50px" b="50px" dangerouslySetInnerHTML={title} />
        <ReactDatez
          name="date"
          handleChange={this.handleChange}
          value={this.state.date}
          allowPast
          allowFuture={false}
        />
      </React.Fragment>
    );
  }
}
export default Dates;
