import React from 'react';
import DOMPurify from 'dompurify';
import moment from 'moment';
import Header from './../../styled-components/header';
//import Date from './../../styled-components/date';
//import BtnGroup from './../../styled-components/btn-group';
import Autotab from './../../auto-tab/auto-tab';

class Dates extends React.Component {
  state = {
    day: '',
    month: '',
    year: ''
  };
  handleChange = e => {
    console.log(e.target);
    this.setState({ [e.target.name]: e.target.value }, () =>
      this.props.callback(
        moment(`${this.state.day}${this.state.month}${this.state.year}`, 'DDMMYYYY'),
        this.props.q.nxtQId
      )
    );
  };
  render() {
    const title = { __html: DOMPurify.sanitize(this.props.q.title) };
    console.log(this.state);
    return (
      <React.Fragment>
        <Header t="50px" dangerouslySetInnerHTML={title} />
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '350px',
            textAlign: 'center',
            padding: '1.1rem',
            border: 'inset 1px #CCC',
            background: '#FFF',
            borderRadius: '4px',
            color: '#666'
          }}
        >
          <Autotab
            type="tel"
            name="day"
            maxLength={2}
            hint="DD"
            value={this.state.day}
            onChange={this.handleChange}
            autoFocus
          />
          <Autotab
            type="tel"
            name="month"
            maxLength={2}
            hint="MM"
            value={this.state.month}
            onChange={e => this.handleChange(e)}
          />
          <Autotab
            type="tel"
            name="year"
            maxLength={4}
            hint="YYYY"
            value={this.state.year}
            onChange={e => this.handleChange(e)}
          />
        </div>
        {/*<BtnGroup>
          <Date value={this.state.date} onChange={e => this.handleChange(e)} />
        </BtnGroup>*/}
      </React.Fragment>
    );
  }
}
export default Dates;
