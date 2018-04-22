import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { observer, inject } from 'mobx-react';
import Container from './../styled-components/container';
import Title from './../styled-components/title';
import Header from './../styled-components/header';
import Btn from './../styled-components/btn';
import ContactForm from './../styled-components/contact-form';

import { pageView } from './../../services/ga-helpers';

@inject('RootStore')
@observer
class Contact extends Component {
  state = {
    messageTitle: '',
    messageBody: '',
    emailAddress: '',
    sent: false
  };

  componentWillMount() {
    this.props.RootStore.UIStore.handleFadeIn();
  }
  componentDidMount() {
    pageView(window.location.pathname);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ sent: true }, () => {
      const message = {
        messageTitle: this.state.messageTitle,
        messageBody: this.state.messageBody,
        emailAddress: this.state.emailAddress
      };
      this.props.RootStore.SessionStore.sendMessage(message);
      this.props.RootStore.UIStore.handleFadeIn();
      this.resetState();
      ReactGA.event({
        category: 'contact form',
        action: `message sent: ${this.props.id}`,
        label: this.props.id
      });
    });
  };
  resetState = () => {
    setTimeout(() => {
      this.setState({
        messageTitle: '',
        messageBody: '',
        emailAddress: '',
        sent: false
      });
    }, 3000);
  };
  render() {
    return (
      <Container notFull dark>
        {!this.state.sent ? (
          <React.Fragment>
            <Title center dark>
              {' '}
              Get in Touch{' '}
            </Title>
            <Header justify dark>
              Feel free to drop us an email at info@litem.co.uk.
            </Header>
            <Header justify dark>
              Alternatively, please send us a message below.
            </Header>
            <form onSubmit={this.handleSubmit}>
              <ContactForm.Input
                type="email"
                placeholder="email"
                t="20px"
                required
                autoComplete="email"
                value={this.state.emailAddress}
                onChange={e => this.setState({ emailAddress: e.target.value })}
              />
              <ContactForm.Input
                type="text"
                t="20px"
                placeholder="name"
                required
                value={this.state.messageTitle}
                onChange={e => this.setState({ messageTitle: e.target.value })}
              />
              <ContactForm.TextArea
                t="20px"
                b="20px"
                placeholder="message"
                rows="10"
                cols="100"
                required
                value={this.state.messageBody}
                onChange={e => this.setState({ messageBody: e.target.value })}
              />
              <Btn b="50px" type="submit">
                Send
              </Btn>
            </form>
          </React.Fragment>
        ) : (
          <Title dark>Message Sent!</Title>
        )}
      </Container>
    );
  }
}

export default Contact;
