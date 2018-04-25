import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import BtnGetStarted from './../styled-components/btn-get-started';
import P from './../styled-components/p';
import Header from './../styled-components/header';
import Title from './../styled-components/title';
import Container from './../styled-components/container';
import LogoLanding from './../styled-components/logo-landing';
import ImgNumber from './../styled-components/img-number';
import ImgSymbol from './../styled-components/img-symbol';
import Link from './../styled-components/link';
import Footer from './../styled-components/footer';

import { pageView, handleNavClick } from './../../services/ga-helpers';

import Contact from './../contact/contact';
import LogoDark from './../../assets/IMAGES/LITEM_LOGO_PORTRAIT_FINAL.svg';
import imgOne from './../../assets/IMAGES/img-one.svg';
import imgTwo from './../../assets/IMAGES/img-two.svg';
import imgThree from './../../assets/IMAGES/img-three.svg';
import imgQuestionMark from './../../assets/IMAGES/img-question-mark.svg';
import imgPoundSign from './../../assets/IMAGES/img-pound-sign.svg';
import imgLetter from './../../assets/IMAGES/img-letter.svg';
import imgTick from './../../assets/IMAGES/img-tick.svg';

@inject('RootStore')
@observer
class Home extends Component {
  componentWillMount() {
    this.props.RootStore.UIStore.handleFadeIn();
  }

  componentDidMount() {
    pageView(window.location.pathname);
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <LogoLanding alt="Litem Logo" src={LogoDark} />
          <Header center t="4.5vh" b="4.5vh">
            Helping injured cyclists with free legal tools and guides
          </Header>
          <BtnGetStarted
            t="20px"
            b="30px"
            onClick={e => handleNavClick(e, this.props.history)}
            id="get started home1"
            name="tool-hub"
          >
            Start
          </BtnGetStarted>
        </Container>
        <Container style={{ backgroundColor: 'white' }}>
          <Title center t="70px" b="10px">
            Why use Litem?
          </Title>
          <ImgNumber alt="Selling Point 1" src={imgOne} />
          <Header center t="20px">
            Litem is free. Lawyers take 25%. Try us first to save an average of £800 in legal fees.
          </Header>
          <ImgNumber alt="Selling Point 2" src={imgTwo} />
          <Header center t="20px">
            Your private data stays on your device so you can be confident that your details will never be passed on.
          </Header>
          <ImgNumber alt="Selling Point 3" src={imgThree} />
          <Header center t="20px">
            Our straight-forward process makes it easy for you to settle your own case.
          </Header>
        </Container>

        <Container>
          <Title center t="50px" b="50px">
            Use our process to settle your case:
          </Title>
          <ImgSymbol alt="Our Process 1" src={imgQuestionMark} />
          <Header center t="10px" b="40px">
            Do I have a good case?
          </Header>
          <ImgSymbol alt="Our Process 2" src={imgPoundSign} />
          <Header center t="10px" b="40px">
            What is my case worth?
          </Header>
          <ImgSymbol alt="Our Process 3" src={imgLetter} />
          <Header center t="10px" b="40px">
            Write to the defendant.
          </Header>
          <ImgSymbol alt="Our Process 4" src={imgTick} />
          <Header center t="10px" b="50px">
            Use our guides to settle your case.
          </Header>
        </Container>

        <Container style={{ backgroundColor: 'white' }}>
          <Title center t="50px">
            {' '}
            FAQs{' '}
          </Title>
          <Header center t="20px" b="10px">
            IS MY DATA SAFE?
          </Header>
          <P>
            Yes, our website is designed to be 100% secure. None of your personal data leaves your device so you can be
            confident that it cannot be accessed by us or anyone else.
          </P>
          <Header center t="20px" b="10px">
            WHO ARE WE?
          </Header>
          <P>
            Litem was built by a team who are passionate about access to justice and putting the law in the hands of
            injured people. All the legal advice has been checked by an expert.
          </P>
          <Header center t="20px" b="10px">
            WHY IS LITEM FREE?
          </Header>
          <P>
            Litem was built on the principle that injured people shouldn't have to pay for advice. Our team have given
            their time without charge because they believe in access to justice.
          </P>
          <Header center t="20px" b="10px">
            DO I NEED A LAWYER?
          </Header>
          <P>
            You should speak with a lawyer if your case is complex e.g. if the defendants want to fight the case or you
            have suffered serious injury. However, most cases can be settled without instructing a solicitor. Our tools
            and guides provide everything you need to settle your injury case directly with the defendant's insurer.
          </P>
          <Header center t="20px" b="10px">
            HOW ACCURATE IS LITEM?
          </Header>
          <P b="20px">
            A lot of time has been taken to make our advice as accurate as possible. However, we offer a free legal
            information service and it is not as accurate as instructing a lawyer. If you have a query or would like us
            to suggest a law firm then feel free to get in touch and we will send you some suggestions. We are not paid
            to recommend these law firms and we will never pass your details on to anyone.
          </P>
          <br />
          <br />
          <BtnGetStarted
            b="50px"
            onClick={e => handleNavClick(e, this.props.history)}
            id="get started home2"
            name="tool-hub"
          >
            Start
          </BtnGetStarted>
        </Container>
        <Contact id="home contact form" history={this.props.history} />
        <footer
          style={{
            backgroundColor: '#42506b',
            paddingLeft: '10px',
            paddingTop: '20px',
            paddingBottom: '20px'
          }}
        >
          <Footer.P dark>
            Litem is an online service providing legal information.<br />It is not a substitute for a lawyer’s advice
            about your case.
          </Footer.P>
          <p style={{ color: '#3cc', height: '0.3rem' }}>Contact:</p>
          <p style={{ color: '#fccf4d', height: '0.5rem', paddingLeft: '10px' }}>info@litem.co.uk</p>
          <p style={{ color: '#fccf4d', paddingLeft: '10px' }}>@litem_law</p>
          <Link dark id="tsandcs" name="tsandcs" onClick={e => handleNavClick(e, this.props.history)}>
            Terms
          </Link>
          <br />
          <Link dark id="privacy-policy" name="privacy-policy" onClick={e => handleNavClick(e, this.props.history)}>
            Privacy Policy
          </Link>
          <Footer.P dark>(C) 2018 Litem Ltd. All rights reserved</Footer.P>
        </footer>
      </React.Fragment>
    );
  }
}

export default Home;
