import React from 'react';
import Header from './../../styled-components/header';

const Texts = props => {
  console.log(props.value);
  return (
    <React.Fragment>
      <Header>{props.q.title}</Header>
      <input type="text" value={props.value} onChange={e => props.callback(e.target.value, props.q.nxtQId)} />
    </React.Fragment>
  );
};
export default Texts;
