import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import './contact.css';

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
      <div className="contact">
        {!this.state.sent ? (
          <div>
            <h1> Get in Touch </h1>
            <h3>Feel free to drop us an email at info@litem.co.uk. Alternatively, please send us a message below.</h3>
            <form onSubmit={this.handleSubmit}>
              <input
                type="email"
                placeholder="Your email address"
                required
                autoComplete="email"
                className="message-title"
                value={this.state.emailAddress}
                onChange={e => this.setState({ emailAddress: e.target.value })}
              />
              <br />
              <input
                type="text"
                placeholder="Message Title"
                required
                className="message-title"
                value={this.state.messageTitle}
                onChange={e => this.setState({ messageTitle: e.target.value })}
              />
              <br />
              <textarea
                placeholder="Your Message"
                rows="10"
                cols="100"
                required
                className="message-body"
                value={this.state.messageBody}
                onChange={e => this.setState({ messageBody: e.target.value })}
              />
              <br />
              <input className="contact-btn btn btn-primary" type="submit" value="send" />
            </form>
          </div>
        ) : (
          <div>
            <h1>Message Sent!</h1>
          </div>
        )}
      </div>
    );
  }
}

export default Contact;
