import React from 'react';
import Header from './../../styled-components/header';
import Date from './../../styled-components/date';

const Dates = props => {
  return (
    <React.Fragment>
      <Header>{props.q.title}</Header>
      <br />
      <Date value={props.value} onChange={e => props.callback(e.target.value, props.q.nxtQId)} />
    </React.Fragment>
  );
};
export default Dates;
