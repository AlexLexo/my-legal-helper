import React from 'react';

import Container from './../styled-components/container';
import Header from './../styled-components/header';

class feedback extends React.Component {
  state = {
    checked1: false,
    checked2: false,
    checked3: false
  };
  handleFeedback = console.log(this.state);
  render() {
    return (
      <Container>
        <Header>Feedback</Header>
        <form>
          <input
            type="radio"
            checked={this.state.checked1}
            value="Very useful"
            onClick={() =>
              this.setState({
                checked1: true,
                checked2: false,
                checked3: false
              })
            }
          />
          <input
            type="radio"
            checked={this.state.checked2}
            value="Useful"
            onClick={() =>
              this.setState({
                checked1: false,
                checked2: true,
                checked3: false
              })
            }
          />
          <input
            type="radio"
            checked={this.state.checked3}
            value="Not very useful"
            onClick={() =>
              this.setState({
                checked1: false,
                checked2: false,
                checked3: true
              })
            }
          />
          <input type="button" onClick={this.handleFeedback} />
        </form>
      </Container>
    );
  }
}

export default feedback;
