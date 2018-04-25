import React from 'react';
import DOMPurify from 'dompurify';
//import 'react-datez/dist/css/react-datez.css';
//import { ReactDatez } from 'react-datez';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker, isInclusivelyAfterDay } from 'react-dates';
import moment from 'moment';
import Header from './../../styled-components/header';
import Date from './../../styled-components/date';
import BtnGroup from './../../styled-components/btn-group';

class Dates extends React.Component {
  /*state = {
    date: ''
  };*/
  state = {
    date: '',
    focused: false
  };
  handleChange = e => {
    this.setState({ date: e.target.value }, () => this.props.callback(this.state.date, this.props.q.nxtQId));
  };
  render() {
    const title = { __html: DOMPurify.sanitize(this.props.q.title) };
    console.log(this.state);
    return (
      <React.Fragment>
        <Header t="50px" dangerouslySetInnerHTML={title} />
        <BtnGroup>
          <Date value={this.state.date} onChange={e => this.handleChange(e)} />
        </BtnGroup>

        {/*<SingleDatePicker
          date={this.state.date} // momentPropTypes.momentObj or null
          onDateChange={date => this.handleChange(date)} // PropTypes.func.isRequired
          focused={this.state.focused} // PropTypes.bool
          onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
          required
          block
          orientation="vertical"
          withPortal
          isOutsideRange={day => isInclusivelyAfterDay(day, moment())}
        />
        <ReactDatez
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
