import React from 'react';
import DOMPurify from 'dompurify';

const Valuation = props => {
  const valuation = { __html: DOMPurify.sanitize(props.q.valuation) };
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
    <div className="weak text-justify">
      <p dangerouslySetInnerHTML={valuation} />
      <p>
        <strong>SUMMARY</strong>
      </p>
      <p>
        The overall value of your claim is in the region of <strong>£{totalLoss}</strong>. This is made from the value
        of your injury and your financial losses. Valuing a case is not an exact science and (were the case to go to
        trial) a different judge might award a different amount.
      </p>
      <p>This figure is to give you a guide for what your case might be worth, from the information given.</p>
      <p>
        <strong>VALUE OF INJURY</strong>
      </p>
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
  );
};

export default Valuation;
