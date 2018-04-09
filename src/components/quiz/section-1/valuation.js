import React from 'react';
import DOMPurify from 'dompurify';

const Valuation = props => {
  const title = { __html: DOMPurify.sanitize(props.q.title) };
  const finTravel =
    props.allQs.valFinancialDets.answered[0] === undefined || isNaN(props.allQs.valFinancialDets.answered[0])
      ? 0
      : props.allQs.valFinancialDets.answered[0];
  const finTreatment =
    props.allQs.valFinancialDets.answered[1] === undefined || isNaN(props.allQs.valFinancialDets.answered[1])
      ? 0
      : props.allQs.valFinancialDets.answered[1];
  const finEarnings =
    props.allQs.valFinancialDets.answered[2] === undefined || isNaN(props.allQs.valFinancialDets.answered[2])
      ? 0
      : props.allQs.valFinancialDets.answered[2];
  const finMedication =
    props.allQs.valFinancialDets.answered[3] === undefined || isNaN(props.allQs.valFinancialDets.answered[3])
      ? 0
      : props.allQs.valFinancialDets.answered[3];
  const finRepairs =
    props.allQs.valFinancialDets.answered[4] === undefined || isNaN(props.allQs.valFinancialDets.answered[4])
      ? 0
      : props.allQs.valFinancialDets.answered[4];
  const finCare =
    props.allQs.valFinancialDets.answered[5] === undefined || isNaN(props.allQs.valFinancialDets.answered[5])
      ? 0
      : props.allQs.valFinancialDets.answered[5];
  const totalFin = finTravel + finTreatment + finEarnings + finMedication + finRepairs + finCare;
  const totalInjury = props.injuries.reduce((a, b) => ({
    injuryValue: a.injuryValue + b.injuryValue
  }));
  const totalLoss = totalFin + totalInjury.injuryValue;
  return (
    <div className="advice">
      <h4>Here is your valuation</h4>
      <div className="text-justify">
        <p>
          <strong>SUMMARY</strong>
        </p>
        <p>
          The overall value of your claim is in the region of <strong>£{totalLoss}</strong>. This is made from the value
          of your injury and your financial losses. Valuing a case is not an exact science and (were the case to go to
          trial) a different judge might award a different amount.
        </p>
        <p>
          This figure is to give you a guide for what your case might be worth, from the information given and settling
          on the basis of this information is at your own risk.
        </p>
        <p>
          <strong>VALUE OF INJURY</strong>
        </p>
        {props.allQs.valFractureArm.answered === 'valAnsFractureForearm' && (
          <div>
            <h6>FOREARM</h6>
            <p>
              Serious fractures of one or both forearms where there is significant permanent residual disability whether
              functional or cosmetic.<br />£34,340 to £52,490
            </p>
            <p>
              Fractures of the Forearm<br />£5,810 to £16,830
            </p>
          </div>
        )}

        <p>You suffered from the following injuries:</p>
        <ul>
          {props.injuries.map((item, i) => {
            return (
              <li key={i}>
                {item.txt} which lasted for {item.injuryDuration} {item.injuryDuration < 2 ? 'day' : 'days'}.
              </li>
            );
          })}
        </ul>
        <p>Your injury is worth around £{totalInjury.injuryValue}.</p>
        <p>
          <strong>FINANCIAL LOSSES</strong>
        </p>
        {finTravel + finTreatment + finEarnings + finMedication + finRepairs + finCare === 0 ? (
          <div>
            <p>You indicated that you had no financial losses:</p>
          </div>
        ) : (
          <div>
            <p>You indicated that you have the following financial losses:</p>
            <ul>
              {finTravel !== 0 && <li>Travel - £{finTravel}</li>}
              {finTreatment !== 0 && <li>Treatment - £{finTreatment}</li>}
              {finEarnings !== 0 && <li>Lost earnings - £{finEarnings}</li>}
              {finMedication !== 0 && <li>Medical expenses - £{finMedication}</li>}
              {finRepairs !== 0 && <li>Damage to property - £{finRepairs}</li>}
              {finCare !== 0 && <li>Care and assistance - £{finCare}</li>}
            </ul>
            <p>Your total losses are £ {totalFin}.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Valuation;
