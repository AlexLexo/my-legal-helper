import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
//import Container from './../styled-components/container';
//import Title from './../styled-components/title';
//import Header from './../styled-components/header';

@inject('RootStore')
@observer
class FAQs extends Component {
  componentWillMount() {
    this.props.RootStore.UIStore.handleFadeIn();
    if (this.props.history.location.pathname === '/faqs') this.props.RootStore.UIStore.setCurrentSection('faqs');
  }
  /*handleClick = e => {
    this.props.history.push(`section1`);
    this.props.RootStore.UIStore.setCurrentSection(e.target.name);
  };*/
  render() {
    return (
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
        <h3>HOW ACCURATE IS LITEM</h3>
        <p>
          A lot of time has been taken to make our advice as accurate as possible. However, we offer a free legal
          information service and it is not as accurate as instructing a lawyer. If you have a query or would like us to
          suggest a law firm then feel free to get in touch<span
            className="span-link"
            onClick={() => this.props.history.push(`contact`)}
          >
            {' '}
            here
          </span>{' '}
          or email us at info@litem.co.uk and we will send you some suggestions. We are not paid to recommend these law
          firms and we will never pass your details on to anyone.
        </p>
        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={() => this.props.history.push(`quiz`)}
          name="caseTool"
        >
          Get Started
        </button>
      </div>
    );
  }
}

export default FAQs;
