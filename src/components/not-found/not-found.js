import React from 'react';
import { pageView } from './../../services/ga-helpers';
import Container from './../styled-components/container';
import Title from './../styled-components/title';
//import Header from './../styled-components/header';

export default () => {
  pageView(window.location.pathname);
  return (
    <Container>
      <Title>Sorry, page not found!</Title>
    </Container>
  );
};
