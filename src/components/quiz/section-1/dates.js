import React from 'react';
import DOMPurify from 'dompurify';
import Header from './../../styled-components/header';
import Date from './../../styled-components/date';

const Dates = props => {
  const title = { __html: DOMPurify.sanitize(props.q.title) };

  return (
    <React.Fragment>
      <Header t="50px" b="50px" dangerouslySetInnerHTML={title} />
      <Date value={props.value} onChange={e => props.callback(e.target.value, props.q.nxtQId)} />
    </React.Fragment>
  );
};
export default Dates;
