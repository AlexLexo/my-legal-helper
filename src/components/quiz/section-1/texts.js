import React from 'react';
import DOMPurify from 'dompurify';
import Header from './../../styled-components/header';
import Input from './../../styled-components/input';

const Texts = props => {
  console.log(props.value);
  const title = { __html: DOMPurify.sanitize(props.q.title) };
  return (
    <React.Fragment>
      <Header t="50px" dangerouslySetInnerHTML={title} />
      <Input.Input type="text" value={props.value} onChange={e => props.callback(e.target.value, props.q.nxtQId)} />
    </React.Fragment>
  );
};
export default Texts;
