import React from 'react';
import DOMPurify from 'dompurify';
//import 'react-datez/dist/css/react-datez.css';
//import { ReactDatez } from 'react-datez';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker, isInclusivelyAfterDay } from 'react-dates';
import moment from 'moment';
import Header from './../../styled-components/header';
//import Date from './../../styled-components/date';

class Dates extends React.Component {
  /*state = {
    date: ''
  };*/
  state = {
    date: null,
    focused: false
  };
  handleChange = value => {
    this.setState({ date: value }, () => this.props.callback(this.state.date, this.props.q.nxtQId));
  };
  render() {
    const title = { __html: DOMPurify.sanitize(this.props.q.title) };
    console.log(this.state);
    return (
      <React.Fragment>
        <Header t="50px" b="50px" dangerouslySetInnerHTML={title} />
        <div style={{ paddingLeft: '40%' }}>
          <SingleDatePicker
            date={this.state.date} // momentPropTypes.momentObj or null
            onDateChange={date => this.handleChange(date)} // PropTypes.func.isRequired
            focused={this.state.focused} // PropTypes.bool
            onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
            orientation="vertical"
            required
            isOutsideRange={day => isInclusivelyAfterDay(day, moment())}
          />
        </div>
        {/*<ReactDatez
          name="date"
          handleChange={this.handleChange}
          value={this.state.date}
          allowPast
          allowFuture={false}
        />*/}
      </React.Fragment>
    );
  }
}
export default Dates;
