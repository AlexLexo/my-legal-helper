import React from 'react';

const Email = props => {
  return (
    <input
      type="email"
      placeholder={props.q.answered ? props.q.answered : props.q.placeholder}
      value={props.value}
      onChange={e => props.callback(e.target.value, props.q.nxtQId)}
    />
  );
};
export default Email;
