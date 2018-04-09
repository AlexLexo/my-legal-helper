import React from 'react';
/*placeholder={props.q.answered ? props.q.answered : props.q.placeholder}*/
const Texts = props => {
  console.log(props.value);
  return <input type="text" value={props.value} onChange={e => props.callback(e.target.value, props.q.nxtQId)} />;
};
export default Texts;
