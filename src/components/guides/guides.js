import React from 'react';
import ReactGA from 'react-ga';
import Accordion from './../accordion/accordion';

const guide1 = {
  title: 'what if the defendant denies liability',
  body: (
    <div>
      <p>
        If the defendant denies liability then you need to get evidence together to support your case. See 'What
        evidence do I need' for more details.
      </p>
      <p>
        Ask the defendant to give you a copy of any documents they have taken into consider in denying liability so you
        can assess the prospects of success.
      </p>
      <p>
        If they keep denying liability after you've given them any further evidence, and you still think you have a
        strong case after you have seen their evidence, then it may be a good idea to instruct a solicitor.
      </p>
    </div>
  )
};
const guide2 = {
  title: 'what evidence do I need',
  body: (
    <div>
      <p>The evidence needed will depend on the circumstances but could include the following:-</p>
      <ul>
        <li>getting the police report.</li>
        <li>contacting any witnesses and getting them to write down what they saw.</li>
        <li>asking the defendant for photographs / damage report to show where the point of impact was.</li>
        <li>
          requesting CCTV from the council. They may only release this to the insurance company due to data protection
          issues. The council often delete footage so you should request this as quickly as possible.
        </li>
      </ul>
      <p>
        You will also need evidence for your injuries and financial losses. Evidence for your injuries might be
        photographs of injuries, medical records or a medical report (see 'obtaining medical evidence' below).
      </p>
      <p>
        For your financial losses you will need receipts or invoices to show the costs you incurred. If you have lost
        earnings and you are employed it is normal to provide payslips for 12 weeks before the incident and then for the
        period you were off work to show your average earnings.
      </p>
      <p>
        If your employer has paid you sick pay or your insurer has paid for your vehicle damage, or a medical insurer
        has paid for treatment, you may have a duty to recover their losses from the defendants as well as your own.
        This is called a 'subrogated claim' and you should write to your employer / insurer to check if you have to
        recover the money they've spent.
      </p>
    </div>
  )
};
const guide3 = {
  title: 'what are the usual steps in a case',
  body: (
    <div>
      <p>Below is an overview of the usual steps in a straightforward case:</p>
      <ul>
        <li>Send a letter to the defendant or their insurers notifying them of the claim.</li>
        <li>Receive a response saying whether they admit or deny that they are liable.</li>
        <li>For denials of liability see the separate section.</li>
        <li>
          If they admit liability you have won the case and can focus on valuing your claim. If you are ready to settle
          you can value your case and put forward an offer or invite the defendant to make an offer. If you are not
          ready to settle you can still request a payment for a 'reasonable portion' of the likely value of your
          injuries and financial losses whilst the rest of the case goes ahead. This is called an interim payment.
        </li>
        <li>
          To value the case accurately you should ask the insurer to instruct a medical expert to draft a report. For
          more details see the section called 'obtaining medical evidence'. You should also start putting together the
          details of your financial losses. You can then use our valuation tool to give you an idea of what your case is
          worth
        </li>
        <li>
          Once you have the medical evidence you can value your injury and finalise details of your financial losses and
          send these to the defendants to invite their offers, along with any documents to prove your losses. If they do
          not make an offer, or they make an offer that is too low, you may want to make an offer (see relevant
          section).
        </li>
        <li>
          - If you are unable to negotiate settlement you should consider issuing court proceedings. There are risks
          involved, so if it gets to this stage you may want to involve a solicitor to get a view as to how good the
          case is and whether they will act for you.
        </li>
      </ul>
    </div>
  )
};
const guide4 = {
  title: 'Contributory negligence',
  body: (
    <div>
      <p>
        The defendant may admit liability but say that your actions contributed to the severity of your injuries. For
        instance, if you did not wear a seatbelt it is common for a court to deduct around 15% of your damages due to
        the increase in harm which you could have avoided by taking reasonable steps. If so, your damages will be
        reduced by the proportion you are at fault (i.e. if you are 15% to blame and the value of your case is £1,000
        you would receive £150 less).
      </p>
    </div>
  )
};
const guide5 = {
  title: 'how long do most cases last',
  body: (
    <div>
      <p>
        Sometimes you can just pick up the phone to an insurance company and they will make an offer you are happy with
        and you can settle straight away. Other times they will fight the case and you will need to go to trial,
        sometimes several years down the line. Most cases are somewhere between the two.
      </p>
      <p>
        In general, the time will be determined by two factors a) how obvious it is that the defendant is at fault and
        b) how straightforward your injury and financial losses are.
      </p>
    </div>
  )
};
const guide6 = {
  title: 'what if the case involves a child',
  body: (
    <div>
      <p>If a child is injured their parents or guardians can pursue a claim on their behalf.</p>
      <p>
        In all cases where the injured person is under 18 a court has to approve any award. This is to check that the
        case settles for the right amount. For this reason, it is normal to instruct a lawyer in these cases.
      </p>
      <p>Any compensation awarded to the child will be placed into the court fund and invested until they turn 18.</p>
      <p>
        The general rule is that you have three years from the date of the incident to issue a claim in the court.
        However, children have until their 21st birthday to issue a claim.
      </p>
    </div>
  )
};
const guide7 = {
  title: 'obtaining medical evidence',
  body: (
    <div>
      <p>
        In straightforward cases you may prefer to settle without medical evidence as this can delay the process.
        However, getting a medical report gives you peace of mind. The medical expert will examine you to assess your
        injuries and assess the impact of any ongoing symptoms from which you may be suffering.
      </p>
      <p>
        The medical report needs to be from an independent expert (i.e. someone who hasn't previously treated you).
        Sometimes the defendants will not settle the case without a medical report. The cost of the expert is normally
        paid by the defendant if they have admitted liability.
      </p>
      <p>The type of expert will depend on the injury you suffered. Examples are as follows:</p>
      <ul>
        <li>GP - if you have suffered a minor injury.</li>
        <li>Orthopaedic surgeon – if you have suffered a fracture or more severe soft tissue injury.</li>
        <li>Plastic surgeon – if you have a scar.</li>
        <li>Dental surgeon – if you have damaged your teeth.</li>
      </ul>
      <p>
        You may not always like what is in the report. However, the expert is completely independent and must state
        their professional medical opinion as they see it.
      </p>
    </div>
  )
};
const guide8 = {
  title: 'how much for my damaged bike',
  body: (
    <div>
      <p>
        If the case wins the defendant will be liable to pay for the damage to your bike. You should get a damage report
        from a bike shop you trust.
      </p>
      <p>
        If the bike is written off then you will be entitled to the replacement cost not the new cost. In other words,
        the value of the bike if you were buying it in the age and condition it was in at the time of the incident.
      </p>
    </div>
  )
};
const guide9 = {
  title: 'settling the case',
  body: (
    <div>
      <p>
        Negotiating the case an important part of the process. It is sensible to try and be balanced and think what an
        observer would think is reasonable.
      </p>
      <p>
        Compensation payments are not taxable for UK residents. Once you have reached agreement the defendants should
        pay the money within 2/3 weeks.
      </p>
      <p>
        It is good to finish the case so you can move on with your life. However, if you settle the case you cannot get
        more money at a later stage. Settling the case if you are still suffering from your injury brings the risk of
        undersetting as you do not know how long your injury will last for. This risk is increased if you do not have an
        expert opinion on how long the injuries will last.
      </p>
      <p>
        If you receive a compensation payment as part of a personal injury claim, then this can affect your entitlement
        to receive certain means tested benefits. Various options are available to protect compensation amounts,
        including setting up a Personal Injury Trust. You can get guidance on this from the Citizen's Advice Bureau.
      </p>
    </div>
  )
};
const guide10 = {
  title: 'the importance of being honest',
  body: (
    <div>
      <p>
        It is important to be honest in your case and not lie or exaggerate. If an element of your claim is found to be
        “fundamentally dishonest” you might not be able to continue with your case. You may also have to pay the other
        side's legal costs.
      </p>
      <p>
        If you issue court proceedings then further potential risks arise. Please see the section on issuing proceedings
        for more details.
      </p>
      <p>As explained in the offers section there are risks attached to any offers made by the defendant.</p>
      <p>
        It is worth remembering that if the case loses you will not be paid any of your expenses in bringing the case.
      </p>
    </div>
  )
};
const Guides = props => {
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <div className="guides">
      <h1>Guides</h1>
      <h3>
        Here are our guides to help you settle you case. Please let us know if you would like to see a guide which isn't
        shown.
      </h3>
      <Accordion id="guide1" content={guide1} />
      <Accordion id="guide2" content={guide2} />
      <Accordion id="guide3" content={guide3} />
      <Accordion id="guide4" content={guide4} />
      <Accordion id="guide5" content={guide5} />
      <Accordion id="guide6" content={guide6} />
      <Accordion id="guide7" content={guide7} />
      <Accordion id="guide8" content={guide8} />
      <Accordion id="guide9" content={guide9} />
      <Accordion id="guide10" content={guide10} />
    </div>
  );
};

export default Guides;
