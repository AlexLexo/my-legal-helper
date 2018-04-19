import React from 'react';

import Container from './../styled-components/container';
import P from './../styled-components/p';
import Title from './../styled-components/title';
import Link from './../styled-components/link';
import List from './../styled-components/list';

import { pageView, handleNavClick } from './../../services/ga-helpers';

class PostLetter extends React.Component {
  componentDidMount() {
    pageView(window.location.pathname);
  }
  render() {
    return (
      <Container dark>
        <Title center t="50px" dark>
          Action Plan
        </Title>
        <P dark>
          Now that we have given you some advice about your case, and prepared a letter for you to send to the defendant
          or their insurer the next steps are to:
        </P>
        <List.OrderedList dark>
          <List.Item>send the letter.</List.Item>
          <List.Item>
            find out what your case is worth (<Link
              dark
              id="post case tool valuer"
              name="pre-valuer-tool"
              onClick={e => handleNavClick(e, this.props.history)}
            >
              get a valuation
            </Link>).
          </List.Item>
          <List.Item>chase the defendant for a response.</List.Item>
          <List.Item>get more evidence if they deny liability.</List.Item>
          <List.Item>consider settling your case if they admit liability.</List.Item>
        </List.OrderedList>
        <P dark b="50px">
          Alternatively, if you would like to get some further advice from a solicitor or if you have any queries, free
          to drop us an email at info@litem.co.uk.
        </P>
      </Container>
    );
  }
}
export default PostLetter;
