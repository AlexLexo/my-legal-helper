import React from 'react';
import DOMPurify from 'dompurify';
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
      </Container>
    );
  }
}
export default Duration;
