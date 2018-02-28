import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import './contact.css';

/*@inject('UIStore', 'SessionStore')*/ @inject('RootStore')
@observer
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageTitle: '',
      messageBody: '',
      sent: false
    };
  }
  componentWillMount() {
    this.props.RootStore.UIStore.handleFadeIn();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ sent: true }, () => {
      const message = {
        messageTitle: this.state.messageTitle,
        messageBody: this.state.messageBody,
        date: Date.now()
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
        sent: false
      });
    }, 1000);
  };
  render() {
    return (
      <div className="contact">
        {!this.state.sent ? (
          <div>
            <h1> Get in Touch </h1>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="Message Title"
                required
                className="messageTitle"
                value={this.state.messageTitle}
                onChange={e => this.setState({ messageTitle: e.target.value })}
              />
              <br />
              <textarea
                placeholder="Message Title"
                rows="10"
                cols="50"
                required
                className="messageBody"
                value={this.state.messageBody}
                onChange={e => this.setState({ messageBody: e.target.value })}
              />
              <br />
              <input className="contact-btn btn" type="submit" value="send" />
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
