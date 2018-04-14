import React from 'react';
import DOMPurify from 'dompurify';
import Header from './../../styled-components/header';
import P from './../../styled-components/p';

const Weak = props => {
  const title = { __html: DOMPurify.sanitize(props.q.title) };
  const reason = { __html: DOMPurify.sanitize(props.q.reason) };
  return (
    <React.Fragment>
      <Header t="50px" b="50px" dangerouslySetInnerHTML={title} />
      <P dangerouslySetInnerHTML={reason} />
    </React.Fragment>
  );
};

export default Weak;
