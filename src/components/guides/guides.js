import React from 'react';
import { pageView } from './../../services/ga-helpers';
import Container from './../styled-components/container';
import Header from './../styled-components/header';
import Title from './../styled-components/title';
import Accordion from './../accordion/accordion';
import P from './../styled-components/p';
import List from './../styled-components/list';

const guide1 = {
  title: 'What if the defendant denies liability?',
  body: (
    <React.Fragment>
      <P dark>
        If the defendant denies liability then you need to get evidence together to support your case. See 'What
        evidence do I need' for more details.
      </P>
      <P dark>
        Ask the defendant to give you a copy of any documents they have taken into consider in denying liability so you
        can assess the prospects of success.
      </P>
      <P dark>
        If they keep denying liability after you've given them any further evidence, and you still think you have a
        strong case after you have seen their evidence, then it may be a good idea to instruct a solicitor.
      </P>
    </React.Fragment>
  )
};
const guide2 = {
  title: 'What evidence do I need?',
  body: (
    <React.Fragment>
      <P dark>The evidence needed will depend on the circumstances but could include the following:-</P>
      <List.UnorderedList dark>
        <List.Item>getting the police report.</List.Item>
        <List.Item>contacting any witnesses and getting them to write down what they saw.</List.Item>
        <List.Item>
          asking the defendant for photographs / damage report to show where the point of impact was.
        </List.Item>
        <List.Item>
          requesting CCTV from the council. They may only release this to the insurance company due to data protection
          issues. The council often delete footage so you should request this as quickly as possible.
        </List.Item>
      </List.UnorderedList>
      <P dark>
        You will also need evidence for your injuries and financial losses. Evidence for your injuries might be
        photographs of injuries, medical records or a medical report (see 'obtaining medical evidence' below).
      </P>
      <P dark>
        For your financial losses you will need receipts or invoices to show the costs you incurred. If you have lost
        earnings and you are employed it is normal to provide payslips for 12 weeks before the incident and then for the
        period you were off work to show your average earnings.
      </P>
      <P dark>
        If your employer has paid you sick pay or your insurer has paid for your vehicle damage, or a medical insurer
        has paid for treatment, you may have a duty to recover their losses from the defendants as well as your own.
        This is called a 'subrogated claim' and you should write to your employer / insurer to check if you have to
        recover the money they've spent.
      </P>
    </React.Fragment>
  )
};
const guide3 = {
  title: 'What are the usual steps in a case?',
  body: (
    <React.Fragment>
      <P dark>Below is an overview of the usual steps in a straightforward case:</P>
      <List.UnorderedList dark>
        <List.Item>Send a letter to the defendant or their insurers notifying them of the claim.</List.Item>
        <List.Item>Receive a response saying whether they admit or deny that they are liable.</List.Item>
        <List.Item>For denials of liability see the separate section.</List.Item>
        <List.Item>
          If they admit liability you have won the case and can focus on valuing your claim. If you are ready to settle
          you can value your case and put forward an offer or invite the defendant to make an offer. If you are not
          ready to settle you can still request a payment for a 'reasonable portion' of the likely value of your
          injuries and financial losses whilst the rest of the case goes ahead. This is called an interim payment.
        </List.Item>
        <List.Item>
          To value the case accurately you should ask the insurer to instruct a medical expert to draft a report. For
          more details see the section called 'obtaining medical evidence'. You should also start putting together the
          details of your financial losses. You can then use our valuation tool to give you an idea of what your case is
          worth
        </List.Item>
        <List.Item>
          Once you have the medical evidence you can value your injury and finalise details of your financial losses and
          send these to the defendants to invite their offers, along with any documents to prove your losses. If they do
          not make an offer, or they make an offer that is too low, you may want to make an offer (see relevant
          section).
        </List.Item>
        <List.Item>
          - If you are unable to negotiate settlement you should consider issuing court proceedings. There are risks
          involved, so if it gets to this stage you may want to involve a solicitor to get a view as to how good the
          case is and whether they will act for you.
        </List.Item>
      </List.UnorderedList>
    </React.Fragment>
  )
};
const guide4 = {
  title: 'What happens if it was partially my fault?',
  body: (
    <React.Fragment>
      <P dark>
        The defendant may admit liability but say that your actions contributed to the severity of your injuries. For
        instance, if you did not wear a seatbelt it is common for a court to deduct around 15% of your damages due to
        the increase in harm which you could have avoided by taking reasonable steps. If so, your damages will be
        reduced by the proportion you are at fault (i.e. if you are 15% to blame and the value of your case is £1,000
        you would receive £150 less).
      </P>
    </React.Fragment>
  )
};
const guide5 = {
  title: 'How long do most cases last?',
  body: (
    <React.Fragment>
      <P dark>
        Sometimes you can just pick up the phone to an insurance company and they will make an offer you are happy with
        and you can settle straight away. Other times they will fight the case and you will need to go to trial,
        sometimes several years down the line. Most cases are somewhere between the two.
      </P>
      <P dark>
        In general, the time will be determined by two factors a) how obvious it is that the defendant is at fault and
        b) how straightforward your injury and financial losses are.
      </P>
    </React.Fragment>
  )
};
const guide6 = {
  title: 'What if the case involves a child?',
  body: (
    <React.Fragment>
      <P dark>If a child is injured their parents or guardians can pursue a claim on their behalf.</P>
      <P dark>
        In all cases where the injured person is under 18 a court has to approve any award. This is to check that the
        case settles for the right amount. For this reason, it is normal to instruct a lawyer in these cases.
      </P>
      <P dark>
        Any compensation awarded to the child will be placed into the court fund and invested until they turn 18.
      </P>
      <P dark>
        The general rule is that you have three years from the date of the incident to issue a claim in the court.
        However, children have until their 21st birthday to issue a claim.
      </P>
    </React.Fragment>
  )
};
const guide7 = {
  title: 'Obtaining medical evidence',
  body: (
    <React.Fragment>
      <P dark>
        In straightforward cases you may prefer to settle without medical evidence as this can delay the process.
        However, getting a medical report gives you peace of mind. The medical expert will examine you to assess your
        injuries and assess the impact of any ongoing symptoms from which you may be suffering.
      </P>
      <P dark>
        The medical report needs to be from an independent expert (i.e. someone who hasn't previously treated you).
        Sometimes the defendants will not settle the case without a medical report. The cost of the expert is normally
        paid by the defendant if they have admitted liability.
      </P>
      <P dark>The type of expert will depend on the injury you suffered. Examples are as follows:</P>
      <List.UnorderedList dark>
        <List.Item>GP - if you have suffered a minor injury.</List.Item>
        <List.Item>Orthopaedic surgeon – if you have suffered a fracture or more severe soft tissue injury.</List.Item>
        <List.Item>Plastic surgeon – if you have a scar.</List.Item>
        <List.Item>Dental surgeon – if you have damaged your teeth.</List.Item>
      </List.UnorderedList>
      <P dark>
        You may not always like what is in the report. However, the expert is completely independent and must state
        their professional medical opinion as they see it.
      </P>
    </React.Fragment>
  )
};
const guide8 = {
  title: 'How much for my damaged bike?',
  body: (
    <React.Fragment>
      <P dark>
        If the case wins the defendant will be liable to pay for the damage to your bike. You should get a damage report
        from a bike shop you trust.
      </P>
      <P dark>
        If the bike is written off then you will be entitled to the replacement cost not the new cost. In other words,
        the value of the bike if you were buying it in the age and condition it was in at the time of the incident.
      </P>
    </React.Fragment>
  )
};
const guide9 = {
  title: 'Settling the case',
  body: (
    <React.Fragment>
      <P dark>
        Negotiating the case an important part of the process. It is sensible to try and be balanced and think what an
        observer would think is reasonable.
      </P>
      <P dark>
        Compensation payments are not taxable for UK residents. Once you have reached agreement the defendants should
        pay the money within 2/3 weeks.
      </P>
      <P dark>
        It is good to finish the case so you can move on with your life. However, if you settle the case you cannot get
        more money at a later stage. Settling the case if you are still suffering from your injury brings the risk of
        undersetting as you do not know how long your injury will last for. This risk is increased if you do not have an
        expert opinion on how long the injuries will last.
      </P>
      <P dark>
        If you receive a compensation payment as part of a personal injury claim, then this can affect your entitlement
        to receive certain means tested benefits. Various options are available to protect compensation amounts,
        including setting up a Personal Injury Trust. You can get guidance on this from the Citizen's Advice Bureau.
      </P>
    </React.Fragment>
  )
};
const guide10 = {
  title: 'The importance of being honest',
  body: (
    <React.Fragment>
      <P dark>
        It is important to be honest in your case and not lie or exaggerate. If an element of your claim is found to be
        “fundamentally dishonest” you might not be able to continue with your case. You may also have to pay the other
        side's legal costs.
      </P>
      <P dark>
        If you issue court proceedings then further potential risks arise. Please see the section on issuing proceedings
        for more details.
      </P>
      <P dark>As explained in the offers section there are risks attached to any offers made by the defendant.</P>
      <P dark>
        It is worth remembering that if the case loses you will not be paid any of your expenses in bringing the case.
      </P>
    </React.Fragment>
  )
};

const Guides = props => {
  pageView(window.location.pathname);
  return (
    <Container dark>
      <Title center dark t="50px">
        Guides
      </Title>
      <Header center dark b="20px">
        Here are our guides to help you settle your case. Please let us know if you think we have missed something.
      </Header>
      <Accordion dark id="guide1" content={guide1} />
      <Accordion dark id="guide2" content={guide2} />
      <Accordion dark id="guide3" content={guide3} />
      <Accordion dark id="guide4" content={guide4} />
      <Accordion dark id="guide5" content={guide5} />
      <Accordion dark id="guide6" content={guide6} />
      <Accordion dark id="guide7" content={guide7} />
      <Accordion dark id="guide8" content={guide8} />
      <Accordion dark id="guide9" content={guide9} />
      <Accordion dark id="guide10" content={guide10} />
    </Container>
  );
};

export default Guides;
