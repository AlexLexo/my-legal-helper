import React from 'react';
//import DatePicker from 'material-ui/DatePicker';

const Dates = props => {
  return (
    <input
      type="date"
      placeholder={props.q.answered ? props.q.answered : props.q.placeholder}
      value={props.value}
      onChange={e => props.callback(e.target.value, props.q.nxtQId)}
    />
    /*<DatePicker hintText="Portrait Dialog" />*/
  );
};
export default Dates;
