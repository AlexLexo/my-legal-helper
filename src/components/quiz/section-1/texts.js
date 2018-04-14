import React from 'react';
import DOMPurify from 'dompurify';
import Header from './../../styled-components/header';

const Texts = props => {
  console.log(props.value);
  const title = { __html: DOMPurify.sanitize(props.q.title) };
  return (
    <React.Fragment>
      <Header t="50px" b="50px" dangerouslySetInnerHTML={title} />
      <input
        type="text"
        value={props.value}
        style={{ maxWidth: '200px', marginLeft: 'auto', marginRight: 'auto' }}
        onChange={e => props.callback(e.target.value, props.q.nxtQId)}
      />
    </React.Fragment>
  );
};
export default Texts;
