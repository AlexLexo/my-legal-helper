import React from 'react';
import moment from 'moment';

const Letter = props => {
  const x = props.allQs;
  const q = props.q;
  const todaysDate = moment().format('Do MMMM YYYY');
  const sufferedWhat =
    x.injured.answered === 'injuredYes'
      ? x.lossesFinancial.answered === 'lossesFinancialYes' ? 'injuries and financial loss' : 'injuries'
      : 'financial loss';
  const writingTo = x.writeWho.answered === 'writeWhoDefendant' ? 'you' : 'your insured';
  const be = x.writeWho.answered === 'writeWhoDefendant' ? 'you were' : 'your insured was';
  const lossOfEarningsA =
    x.lossOfEarnings.answered === 'lossOfEarningsYesTimeOff' && x.lossOfEarningsTo.answered === 'ongoing'
      ? true
      : false;
  const lossOfEarningsB =
    x.lossOfEarnings.answered === 'lossOfEarningsYesTimeOff' && x.lossOfEarningsTo.answered !== 'ongoing'
      ? true
      : false;
  const lossOfEarningsC =
    x.lossOfEarnings.answered === 'lossOfEarningsYesLostJob' && x.lossOfEarningsTo.answered === 'ongoing'
      ? true
      : false;
  const otherFinancialLosses =
    x.lossesMed.answered === 'lossesMedYes' ||
    x.lossesTreatment.answered === 'lossesTreatmentYes' ||
    x.lossesFinancialOther.answered === 'lossesFinancialOtherYes' ||
    x.lossesProperty.answered === 'lossesPropertyYes' ||
    x.lossesTravel.answered === 'lossesTravelYes'
      ? true
      : false;

  return (
    <div className="letter text-justify">
      <p>{todaysDate}</p>
      <p>Dear Sirs</p>
      <p>
        <strong>Name: {props.allQs.cFullName.answered}</strong>
      </p>
      <p>
        <strong>Address: {x.cAddress.answered}</strong>
      </p>
      <p>
        <strong>Incident date: {x.iDate.answered}</strong>
      </p>
      <p>
        <strong>Defendant name: {x.dFullName.answered}</strong>
      </p>
      <p className={x.writeWho.answered === 'writeWhoDefendant' ? 'hide' : ''}>
        <strong>Policy number: {x.dPolicyNumber.answered}</strong>
      </p>
      <p>
        On the above date I suffered {sufferedWhat} in a road traffic incident caused by {writingTo}.
      </p>
      <div className={x.writeWho.answered === 'writeWhoDefendant' ? '' : 'hide'}>
        <p>
          <ins>Insurance</ins>
        </p>
        <p>
          Please confirm the identity of your insurers. Please note that the insurers will need to see this letter as
          soon as possible and it may affect your insurance cover and/or the conduct of any subsequent legal proceedings
          if you do not send this letter to them.
        </p>
      </div>
      <p>
        <ins>Circumstances of Incident</ins>
      </p>
      <p>
        On {x.iDate.answered} I was a cyclist proceeding {x.cDir.answered} along {x.cStreet.answered}. At all material
        times, {be} {q.materialTimes}
      </p>
      <p>
        As I was cycling along {x.cStreet.answered} I was heading {x.cDir.answered}. When I reached the{' '}
        {x.landmark.answered} {q.afterLandmark} As a result I suffered {sufferedWhat}.
      </p>
      <p>
        <ins>Liability</ins>
      </p>
      <p>I am alleging fault against {writingTo} for the following reasons:-</p>
      <ol>
        <li className={q.liability1 ? '' : 'hide'}>{q.liability1}</li>
        <li className={q.liability2 ? '' : 'hide'}>{q.liability2}</li>
        <li className={q.liability3 ? '' : 'hide'}>{q.liability3}</li>
        <li className={q.liability4 ? '' : 'hide'}>{q.liability4}</li>
        <li className={q.liability5 ? '' : 'hide'}>{q.liability5}</li>
        <li className={q.liability6 ? '' : 'hide'}>6. {q.liability6}</li>
        <li className={q.liability7 ? '' : 'hide'}>7. {q.liability7}</li>
        <li className={q.liability8 ? '' : 'hide'}>8. {q.liability8}</li>
        <li className={q.liability9 ? '' : 'hide'}>9. {q.liability9}</li>
        <li className={q.liability10 ? '' : 'hide'}>10. {q.liability10}</li>
        <li className={q.liability11 ? '' : 'hide'}>11. {q.liability11}</li>
      </ol>
      <p>
        {q.liabilityResult} {writingTo}. I trust you will provide a full admission within the 3 month time limit in
        accordance with the Pre-Action Protocol for Personal Injury Claims in the Civil Procedure Rules.
      </p>
      <div className={x.injuryDets.answered ? '' : 'hide'}>
        <p>
          <ins>Injuries</ins>
        </p>
        <p>A description of my injuries is as follows:</p>
        <ul>
          <li className={x.injuryDets.answered ? '' : 'hide'}>{x.injuryDets.answered}</li>
          <li className={x.injuryDets01.answered ? '' : 'hide'}>{x.injuryDets01.answered}</li>
          <li className={x.injuryDets02.answered ? '' : 'hide'}>{x.injuryDets02.answered}</li>
          <li className={x.injuryDets03.answered ? '' : 'hide'}>{x.injuryDets03.answered}</li>
          <li className={x.injuryDets04.answered ? '' : 'hide'}>{x.injuryDets04.answered}</li>
          <li className={x.injuryDets05.answered ? '' : 'hide'}>{x.injuryDets05.answered}</li>
          <li className={x.injuryDets06.answered ? '' : 'hide'}>{x.injuryDets06.answered}</li>
          <li className={x.injuryDets07.answered ? '' : 'hide'}>{x.injuryDets07.answered}</li>
          <li className={x.injuryDets08.answered ? '' : 'hide'}>{x.injuryDets08.answered}</li>
          <li className={x.injuryDets09.answered ? '' : 'hide'}>{x.injuryDets09.answered}</li>
          <li className={x.injuryDets10.answered ? '' : 'hide'}>{x.injuryDets10.answered}</li>
        </ul>
        <p className={x.hospitalWhich.answered ? '' : 'hide'}>
          I received treatment for my injuries at {x.hospitalWhich.answered}.
        </p>
        <p className={x.injured.answered === 'sufferYes' ? '' : 'hide'}>
          I am still suffering from the effects of my injuries.
        </p>
      </div>
      <div className={x.lossesFinancial.answered === 'lossesFinancialYes' ? '' : 'hide'}>
        <p>
          <ins>Loss of Earnings</ins>
        </p>
        <div className={lossOfEarningsA ? '' : 'hide'}>
          <p>
            I am employed as a {x.lossOfEarningsYesTimeOffDets.answered} and have been off work since{' '}
            {x.lossOfEarningsFrom.answered}.
          </p>
          <p>My approximate net weekly income is {x.netWeeklyIncome.answered}.</p>
        </div>
        <div className={lossOfEarningsB ? '' : 'hide'}>
          <p>
            I am employed as a {x.lossOfEarningsYesTimeOffDets.answered} and was off work between{' '}
            {x.lossOfEarningsFrom.answered} and {x.lossOfEarningsTo.answered}.
          </p>
          <p>My approximate net weekly income is {x.netWeeklyIncome.answered}.</p>
        </div>
        <div className={lossOfEarningsC ? '' : 'hide'}>
          <p>
            I was employed as a {x.lossOfEarningsYesTimeOffDets.answered} and have incurred loss of earnings since{' '}
            {x.lossOfEarningsFrom.answered}.
          </p>
          <p>My approximate net weekly income was {x.netWeeklyIncome.answered}.</p>
        </div>
        <div className={'hide'}>
          <p>
            I was employed as {x.lossOfEarningsYesTimeOffDets.answered} and incurred loss of earnings from between{' '}
            {x.lossOfEarningsFrom.answered} and {x.lossOfEarningsTo.answered}.
          </p>
          <p>My approximate net weekly income was {x.netWeeklyIncome.answered}.</p>
        </div>
      </div>
      <div className={otherFinancialLosses ? '' : 'hide'}>
        <p>
          <ins>Other Financial Losses</ins>
        </p>
        <p>I also estimate that I have incurred the following financial losses:</p>
        <ol>
          <li className={x.lossesMedDets.answered ? '' : 'hide'}>{x.lossesMedDets.answered} in medical expenses</li>
          <li className={x.lossesTreatmentDets.answered ? '' : 'hide'}>
            Medical treatment: {x.lossesTreatmentDets.answered}
          </li>
          <li className={x.lossesPropertyDets.answered ? '' : 'hide'}>
            Property damage: {x.lossesPropertyDets.answered}
          </li>
          <li className={x.lossesTravelDets.answered ? '' : 'hide'}>{x.lossesTravelDets.answered} in travel costs</li>
          <li className={x.lossesFinancialOtherDets.answered ? '' : 'hide'}>
            Other expenses: {x.lossesFinancialOtherDets.answered}
          </li>
        </ol>
      </div>
      <div className={x.injuredBy2.answered === 'injuredByRoadDefect' ? '' : 'hide'}>
        <p>
          <ins>Disclosure</ins>
        </p>
        <p>Please provide me with copies of the following documents:</p>
        <ol>
          <li>Records of inspection for 12 months prior to and following the date of the incident.</li>
          <li>
            Details of any other incidents in respect of the stretch of highway in question for 12 months prior to and
            following the date of the incident.
          </li>
          <li>
            Details of any other complaints regarding the stretch of highway in question 12 months prior to and
            following the date of the incident.
          </li>
        </ol>
      </div>
      <p>
        <ins>Finally</ins>
      </p>
      <p>Finally, I expect an acknowledgement of this letter within 21 days.</p>
      <p>Yours faithfully</p>
      <p>{x.cFullName.answered}</p>
    </div>
  );
};

export default Letter;
