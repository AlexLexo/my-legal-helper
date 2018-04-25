import React from 'react';

//import Feedback from './../feedback/feedback';

import Container from './../styled-components/container';
import P from './../styled-components/p';
import Title from './../styled-components/title';
import Link from './../styled-components/link';
import List from './../styled-components/list';

import { pageView, handleNavClick } from './../../services/ga-helpers';

class PostCase extends React.Component {
  componentDidMount() {
    pageView(window.location.pathname);
  }
  render() {
    return (
      <Container dark>
        <Title t="30px" dark>
          Action Plan
        </Title>
        <P dark>Now that we have given you some advice about your case, the next steps are to:</P>
        <List.OrderedList dark>
          <List.Item>write to the defendant (click next).</List.Item>
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
        <P dark b="70px">
          Alternatively, if you would like to get some further advice from a solicitor or if you have any questions,
          feel free to drop us an email at info@litem.co.uk.
        </P>
        {/*<Feedback />*/}
      </Container>
    );
  }
}
export default PostCase;
