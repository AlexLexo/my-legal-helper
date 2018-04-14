import React from 'react';
import Header from './../../styled-components/header';
import P from './../../styled-components/p';

const Weak = props => {
  return (
    <React.Fragment>
      <Header>{props.q.title}</Header>
      <P>{props.q.reason}</P>
    </React.Fragment>
  );
};

export default Weak;
