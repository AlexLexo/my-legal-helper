import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Contact from './../contact/contact';

import LogoDark from './../../assets/IMAGES/LITEM_LOGO_PORTRAIT_FINAL.svg';
import imgOne from './../../assets/IMAGES/img-one.svg';
import imgTwo from './../../assets/IMAGES/img-two.svg';
import imgThree from './../../assets/IMAGES/img-three.svg';
import imgQuestionMark from './../../assets/IMAGES/img-question-mark.svg';
import imgPoundSign from './../../assets/IMAGES/img-pound-sign.svg';
import imgLetter from './../../assets/IMAGES/img-letter.svg';
import imgTick from './../../assets/IMAGES/img-tick.svg';
import './home.css';

@inject('RootStore')
@observer
class Home extends Component {
  componentWillMount() {
    this.props.RootStore.UIStore.handleFadeIn();
  }
  handleClick = e => {
    this.props.history.push(e.target.name);
  };
  render() {
    return (
      <React.Fragment>
        <div className="home-landing">
          <img alt="Litem Logo" className="home-landing-logo" src={LogoDark} />
          <h3>Free tools and guides for injured cyclists to exercise their rights</h3>
          <button className="btn btn-primary btn-get-started" onClick={this.handleClick} name="quiz">
            Get Started
          </button>
        </div>

        <div className="container-fluid home-why-use-litem">
          <h1>Why use Litem?</h1>
          <div className="row">
            <div className="col-xl-4">
              <img alt="Selling Point 1" className="home-why-use-litem-imgs" src={imgOne} />
              <h3>
                Your private data stays on your device so you can be confident that your details will never be passed
                on.
              </h3>
            </div>
            <div className="col-xl-4">
              <img alt="Selling Point 2" className="home-why-use-litem-imgs" src={imgTwo} />
              <h3>
                Litem is free. Lawyers take 25%. Try us first to keep your<br />full damages.
              </h3>
            </div>
            <div className="col-xl-4">
              <img alt="Selling Point 3" className="home-why-use-litem-imgs" src={imgThree} />
              <h3>Our straight-forward process makes it easy for you to settle your own case.</h3>
            </div>
            {/*<h3>Use our process to settle your case:</h3>
              <div className="row">
                <div className="col-12">
                  <button
                    type="button"
                    className="btn btn-primary btn-home-why-use-litem"
                    onClick={e => this.handleClick(e)}
                    name="case-tool"
                  >
                    Do I have a case? / write a letter (takes 5 mins)
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-home-why-use-litem"
                    onClick={e => this.handleClick(e)}
                    name="valuer"
                  >
                    What is my case worth (takes 3 mins)
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-home-why-use-litem"
                    onClick={e => this.handleClick(e)}
                    name="valuer"
                  >
                    Or would you prefer to read our guides
                  </button>
              </div>
              </div>*/}
          </div>
        </div>
        <div className="container-fluid home-our-process">
          <h1>Use our process to settle your case:</h1>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 home-our-process-imgs-container">
              <img alt="Our Process 1" className="home-our-process-imgs" src={imgQuestionMark} />
              <h3>Do I have a good case?</h3>
            </div>
            <div className="col-12 col-md-6 col-lg-3 home-our-process-imgs-container">
              <img alt="Our Process 2" className="home-our-process-imgs" src={imgPoundSign} />
              <h3>What is my case worth?</h3>
            </div>
            <div className="col-12 col-md-6 col-lg-3 home-our-process-imgs-container">
              <img alt="Our Process 3" className="home-our-process-imgs" src={imgLetter} />
              <h3>Write to the defendant.</h3>
            </div>
            <div className="col-12 col-md-6 col-lg-3 home-our-process-imgs-container">
              <img alt="Our Process 4" className="home-our-process-imgs" src={imgTick} />
              <h3>Use our guides to settle your case.</h3>
            </div>
          </div>
        </div>

        <div className="faqs">
          <h1> FAQs </h1>
          <h3>IS MY DATA SAFE?</h3>
          <p>
            Yes, our website is designed to be 100% secure. None of your personal data leaves your device so you can be
            confident that it cannot be accessed by us or anyone else.
          </p>
          <h3>WHO ARE WE?</h3>
          <p>
            Litem was built by a team who are passionate about access to justice and putting the law in the hands of
            injured people. All the legal advice has been checked by an expert.
          </p>
          <h3>WHY IS LITEM FREE?</h3>
          <p>
            Litem was built on the principle that injured people shouldn't have to pay for advice. Our team have given
            their time without charge because they believe in access to justice.
          </p>
          <h3>DO I NEED A LAWYER?</h3>
          <p>
            You should speak with a lawyer if your case is complex e.g. if the defendants want to fight the case or you
            have suffered serious injury. However, most cases can be settled without instructing a solicitor. Our tools
            and guides provide everything you need to settle your injury case directly with the defendant's insurer.
          </p>
          <h3>HOW ACCURATE IS LITEM?</h3>
          <p>
            A lot of time has been taken to make our advice as accurate as possible. However, we offer a free legal
            information service and it is not as accurate as instructing a lawyer. If you have a query or would like us
            to suggest a law firm then feel free to get in touch and we will send you some suggestions. We are not paid
            to recommend these law firms and we will never pass your details on to anyone.
          </p>
          <button
            type="button"
            className="btn btn-primary btn-get-started"
            onClick={() => this.props.history.push(`quiz`)}
            name="caseTool"
          >
            Get Started
          </button>
        </div>
        <Contact />
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
