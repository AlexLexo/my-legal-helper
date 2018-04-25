import React from 'react';
import { observer, inject } from 'mobx-react';
import DOMPurify from 'dompurify';
import Header from './../../styled-components/header';
import Btn from './../../styled-components/btn';
import BtnGroup from './../../styled-components/btn-group';

const Buttons = inject('RootStore')(
  observer(props => {
    const title = { __html: DOMPurify.sanitize(props.q.title) };
    return (
      <BtnGroup>
        <Header center t="40px" dangerouslySetInnerHTML={title} />
        {props.q.btnvalues.map((item, i) => {
          return (
            <Btn
              b="15px"
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
    );
  })
);
export default Buttons;
