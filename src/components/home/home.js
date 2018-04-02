import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Container, Row, Col, Button } from 'reactstrap';

import LogoDark from './../../assets/LITEM_LOGO_FINAL.svg';
import './home.css';

@inject('RootStore')
@observer
class Home extends Component {
  componentWillMount() {
    this.props.RootStore.UIStore.handleFadeIn();
  }
  handleClick = e => {
    this.props.history.push(e.target.name);
  };
  render() {
    return (
      <Container className="home">
        <Row>
          <Col>
            <img className="home-logo" src={LogoDark} alt="Litem Logo" />
            <h3>Free tools and guides for injured cyclists to exercise their rights</h3>
            <Button color="primary" size="lg" onClick={this.handleClick} name="quiz">
              Get Started
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
