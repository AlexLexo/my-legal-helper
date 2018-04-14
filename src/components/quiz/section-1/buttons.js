import React from 'react';
import Header from './../../styled-components/header';
import Btn from './../../styled-components/btn';
import BtnGroup from './../../styled-components/btn-group';
//import DOMPurify from 'dompurify';

const Buttons = props => {
  return (
    <React.Fragment>
      <Header>{props.q.title}</Header>
      <br />
      <BtnGroup>
        {props.q.btnvalues.map((item, i) => {
          return (
            <Btn
              key={i}
              type="submit"
              onClick={() => {
                props.callback(item.ansId, item.nxtQId);
              }}
            >
              {item.ansLabel}
            </Btn>
          );
        })}
      </BtnGroup>
    </React.Fragment>
  );
};
export default Buttons;
