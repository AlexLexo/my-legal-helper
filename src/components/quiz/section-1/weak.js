import React from 'react';
import DOMPurify from 'dompurify';
import Header from './../../styled-components/header';
import P from './../../styled-components/p';
import List from './../../styled-components/list';

/*const rest = (
  <div>
    <P>
      If you would like us to suggest a lawyer who specialises in cycling cases to provide further advice, feel free to
      send us an email at info@litem.co.uk. I'm sorry that we were not able to help you on this occasion. Here are a few
      things to bear in mind for the future:
    </P>
    <List.OrderedList>
      <List.Item>
        If you are in an incident take the defendant's registration. That way you can trace them if needs be.
      </List.Item>
      <List.Item>Take details of any witnesses</List.Item>
      <List.Item>Contact the council ASAP to check if there is any CCTV footage.</List.Item>
      <List.Item>Beware accepting money from the defendant as it may be seen as settling the case.</List.Item>
      <List.Item>Keep records of any money you have spent.</List.Item>
    </List.OrderedList>
  </div>
);*/

/*const crossingOffRoadWeak = (
  <div>
    <P>
      You were injured when you were hit by a vehicle as it was passing. If they failed to leave a safe distance while
      passing then they are likely to be found to blame. Alternatively, if you started overtaking without checking it
      was safe to do so then you might be held at fault. Proving that they are at fault is likely to be difficult.
    </P>
    <P>
      If you would like us to suggest a lawyer who specialises in cycling cases to provide further advice, feel free to
      send us an email at info@litem.co.uk. I'm sorry that we were not able to help you on this occasion. Here are a few
      things to bear in mind for the future:
    </P>
    <List.OrderedList>
      <List.Item>
        If you are in an incident take the defendant's registration. That way you can trace them if needs be.
      </List.Item>
      <List.Item>Take details of any witnesses</List.Item>
      <List.Item>Contact the council ASAP to check if there is any CCTV footage.</List.Item>
      <List.Item>Beware accepting money from the defendant as it may be seen as settling the case.</List.Item>
      <List.Item>Keep records of any money you have spent.</List.Item>
    </List.OrderedList>
  </div>
);*/

const Weak = props => {
  const title = { __html: DOMPurify.sanitize(props.q.title) };
  const reason = { __html: DOMPurify.sanitize(props.q.reason) };
  /*let body = '';
  console.log(props.q.qId);
  switch (props.q.qId) {
    case 'iDets1HitAsPassedWeak':
      body = iDets1HitAsPassedWeak;
      break;
    case 'crossingOffRoadWeak':
      body = crossingOffRoadWeak;
      break;
    default:
      break;
  }*/

  //<div style={{ paddingBottom: '50px' }} dangerouslySetInnerHTML={reason} />
  return (
    <React.Fragment>
      <Header t="50px" center dangerouslySetInnerHTML={title} />
      <P dangerouslySetInnerHTML={reason} />
      <P>
        {props.q.qId === 'hitAndRun' && (
          <React.Fragment>
            <a href="https://www.mib.org.uk" target="_blank" rel="noopener noreferrer">
              www.mib.org.uk
            </a>
            <br />
            <br />
          </React.Fragment>
        )}
        If you would like us to suggest a lawyer who specialises in cycling cases to provide further advice, feel free
        to send us an email at info@litem.co.uk. I'm sorry that we were not able to help you on this occasion. Here are
        a few things to bear in mind for the future:
      </P>
      <List.OrderedList style={{ paddingBottom: '50px' }}>
        <List.Item>
          If you are in an incident take the defendant's registration. That way you can trace them if needs be.
        </List.Item>
        <List.Item>Take details of any witnesses</List.Item>
        <List.Item>Contact the council ASAP to check if there is any CCTV footage.</List.Item>
        <List.Item>Beware accepting money from the defendant as it may be seen as settling the case.</List.Item>
        <List.Item>Keep records of any money you have spent.</List.Item>
      </List.OrderedList>
    </React.Fragment>
  );
};

export default Weak;
