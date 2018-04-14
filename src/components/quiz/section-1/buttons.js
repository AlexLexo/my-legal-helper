import React from 'react';
import DOMPurify from 'dompurify';
import Header from './../../styled-components/header';
import Btn from './../../styled-components/btn';
import BtnGroup from './../../styled-components/btn-group';

const Buttons = props => {
  const title = { __html: DOMPurify.sanitize(props.q.title) };
  return (
    <React.Fragment>
      <Header t="50px" b="50px" dangerouslySetInnerHTML={title} />
      <BtnGroup>
        {props.q.btnvalues.map((item, i) => {
          return (
            <Btn
              b="20px"
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
