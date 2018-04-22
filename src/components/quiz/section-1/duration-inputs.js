import React from 'react';
import DOMPurify from 'dompurify';
import 'react-datez/dist/css/react-datez.css';
import { ReactDatez } from 'react-datez';
import Container from './../../styled-components/container';
import Header from './../../styled-components/header';

class Duration extends React.Component {
  state = {
    cDOB: '',
    iDate: ''
  };
  handleChangecDOB = value => {
    this.setState({ cDOB: value }, () => this.props.callback('value1', this.state.cDOB, this.props.q.nxtQId));
  };
  handleChangeiDate = value => {
    this.setState({ iDate: value }, () => this.props.callback('value2', this.state.iDate, this.props.q.nxtQId));
  };

  render() {
    const title = { __html: DOMPurify.sanitize(this.props.q.title) };
    return (
      <Container>
        <Header center t="50px" dangerouslySetInnerHTML={title} />
        <div
          className="form-group"
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingTop: '30px',
            fontSize: '1.8em'
          }}
        >
          <label style={{ fontSize: '0.8em' }} htmlFor="cDOB">
            {this.props.q.inputs[0].title}
          </label>
          <br />
          <ReactDatez
            name="cDOB"
            handleChange={this.handleChangecDOB}
            value={this.state.cDOB}
            allowPast
            allowFuture={false}
          />
        </div>
        <div
          className="form-group"
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingTop: '30px',
            fontSize: '1.8em'
          }}
        >
          <label style={{ fontSize: '0.8em' }} htmlFor="iDate">
            {this.props.q.inputs[1].title}
          </label>
          <br />
          <ReactDatez
            name="iDate"
            handleChange={this.handleChangeiDate}
            value={this.state.iDate}
            allowPast
            allowFuture={false}
          />
        </div>
      </Container>
    );
  }
}
export default Duration;
