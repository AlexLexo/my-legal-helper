import React from 'react';

import P from './../styled-components/p';
import Title from './../styled-components/title';
import Container from './../styled-components/container';
import Link from './../styled-components/link';

import { pageView, handleNavClick } from './../../services/ga-helpers';

class PostLetter extends React.Component {
  componentDidMount() {
    pageView(window.location.pathname);
  }
  render() {
    return (
      <Container dark>
        <Title dark>Action Plan</Title>
        <P dark>
          Now that we have given you some advice about your case, and prepared a letter for you to send to the defendant
          or their insurer the next steps are to:
          <br />
          <br />
          1. send the letter.
          <br />
          2. find out what your case is worth (<Link
            dark
            id="post case tool valuer"
            name="pre-valuer-tool"
            onClick={e => handleNavClick(e, this.props.history)}
          >
            get a valuation
          </Link>).<br />
          3. chase the defendant for a response.<br />
          4. get more evidence if they deny liability.<br />
          5. consider settling your case if they admit liability.<br />
          <br />
          Alternatively, if you would like to get some further advice from a solicitor or if you have any queries, free
          to drop us an email at info@litem.co.uk.
        </P>
      </Container>
    );
  }
}
export default PostLetter;
