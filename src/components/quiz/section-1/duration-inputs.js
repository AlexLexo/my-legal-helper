import React from 'react';
import DOMPurify from 'dompurify';
import Container from './../../styled-components/container';
import Header from './../../styled-components/header';
import Date from './../../styled-components/date';

const Duration = props => {
  const title = { __html: DOMPurify.sanitize(props.q.title) };
  return (
    <Container>
      <Header center t="50px" dangerouslySetInnerHTML={title} />
      <span
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingTop: '30px',
          fontSize: '1.8em'
        }}
      >
        {props.q.inputs[0].title}
      </span>
      <Date
        id={props.q.inputs[0].qId}
        value={props.value}
        onChange={e => props.callback('value1', e.target.value, props.q.nxtQId)}
      />
      <span
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingTop: '30px',
          fontSize: '1.8em'
        }}
      >
        {props.q.inputs[1].title}
      </span>
      <Date
        id={props.q.inputs[1].qId}
        value={props.value}
        onChange={e => props.callback('value2', e.target.value, props.q.nxtQId)}
      />
    </Container>
  );
};
export default Duration;
