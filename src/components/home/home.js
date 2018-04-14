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
          <Title t="50px" b="50px">
            Free tools and guides for injured cyclists to exercise their rights
          </Title>
          <BtnGetStarted onClick={e => handleNavClick(e, this.props.history)} id="get started home1" name="quiz">
            Start
          </BtnGetStarted>
        </Container>

        <Container style={{ backgroundColor: 'white', height: '100%' }}>
          <Title>Why use Litem?</Title>
          <ImgNumber alt="Selling Point 1" src={imgOne} />
          <Header>
            Your private data stays on your device so you can be confident that your details will never be passed on.
          </Header>
          <ImgNumber alt="Selling Point 2" src={imgTwo} />
          <Header>Litem is free. Lawyers take 25%. Try us first to keep your full damages.</Header>
          <ImgNumber alt="Selling Point 3" src={imgThree} />
          <Header>Our straight-forward process makes it easy for you to settle your own case.</Header>
        </Container>
        <Container>
          <Title>Use our process to settle your case:</Title>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 home-our-process-imgs-container">
              <ImgSymbol alt="Our Process 1" className="home-our-process-imgs" src={imgQuestionMark} />
              <Header>Do I have a good case?</Header>
            </div>
            <div className="col-12 col-md-6 col-lg-3 home-our-process-imgs-container">
              <ImgSymbol alt="Our Process 2" className="home-our-process-imgs" src={imgPoundSign} />
              <Header>What is my case worth?</Header>
            </div>
            <div className="col-12 col-md-6 col-lg-3 home-our-process-imgs-container">
              <ImgSymbol alt="Our Process 3" className="home-our-process-imgs" src={imgLetter} />
              <Header>Write to the defendant.</Header>
            </div>
            <div className="col-12 col-md-6 col-lg-3 home-our-process-imgs-container">
              <ImgSymbol alt="Our Process 4" className="home-our-process-imgs" src={imgTick} />
              <Header>Use our guides to settle your case.</Header>
            </div>
          </div>
        </Container>

        <div className="">
          <Title> FAQs </Title>
          <Header>IS MY DATA SAFE?</Header>
          <P>
            Yes, our website is designed to be 100% secure. None of your personal data leaves your device so you can be
            confident that it cannot be accessed by us or anyone else.
          </P>
          <Header>WHO ARE WE?</Header>
          <P>
            Litem was built by a team who are passionate about access to justice and putting the law in the hands of
            injured people. All the legal advice has been checked by an expert.
          </P>
          <Header>WHY IS LITEM FREE?</Header>
          <P>
            Litem was built on the principle that injured people shouldn't have to pay for advice. Our team have given
            their time without charge because they believe in access to justice.
          </P>
          <Header>DO I NEED A LAWYER?</Header>
          <P>
            You should speak with a lawyer if your case is complex e.g. if the defendants want to fight the case or you
            have suffered serious injury. However, most cases can be settled without instructing a solicitor. Our tools
            and guides provide everything you need to settle your injury case directly with the defendant's insurer.
          </P>
          <Header>HOW ACCURATE IS LITEM?</Header>
          <P>
            A lot of time has been taken to make our advice as accurate as possible. However, we offer a free legal
            information service and it is not as accurate as instructing a lawyer. If you have a query or would like us
            to suggest a law firm then feel free to get in touch and we will send you some suggestions. We are not paid
            to recommend these law firms and we will never pass your details on to anyone.
          </P>
          <br />
          <br />
          <BtnGetStarted onClick={e => handleNavClick(e, this.props.history)} id="get started home2" name="quiz">
            Start
          </BtnGetStarted>
        </div>
        <Contact id="home contact form" />
        <footer>
          <p>
            Litem is an online service providing legal information.<br />It is not a substitute for a lawyer’s advice
            about your case.
          </p>
          <p style={{ color: '#3cc', marginTop: '1rem' }}>Contact</p>
          <p style={{ color: '#fccf4d' }}>info@litem.co.uk</p>
          <p style={{ color: '#fccf4d' }}>@litem_law</p>
          <p style={{ color: '#3cc', marginTop: '1rem' }}>Site Map</p>
          <p className="p-link" onClick={() => this.props.history.push(`tsandcs`)}>
            Terms
          </p>
          <p className="p-link" onClick={() => this.props.history.push(`tsandcs`)}>
            Privacy Policy
          </p>
          <p className="p-link" onClick={() => this.props.history.push(`tsandcs`)}>
            Blog
          </p>
          <p>(C) 2018 Litem Ltd. All rights reserved</p>
        </footer>
      </React.Fragment>
    );
  }
}

export default Home;
