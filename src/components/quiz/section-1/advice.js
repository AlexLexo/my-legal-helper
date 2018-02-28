import React from 'react';

const Advice = props => {
  return (
    <div className="advice">
      <h4>Some feedback about your claim</h4>
      <div className="text-justify">
        <p>
          <strong>General Points</strong>
        </p>
        <p>
          In general terms, there is no legal barrier stopping you from bringing a case. Your case is in time, and you
          have until your 21st birthday or 3 years from the date of the incident in which to issue proceedings in the
          court. If you miss this deadline your case will be time barred. In addition, your case occurred in England or
          Wales so is within this jurisdiction.
        </p>
        {props.userObj.allQs.acceptedMoney.answered === 'acceptedMoneyYes' ? (
          <p>
            However, as you have accepted money from the defendant it may mean that your case is 'settled'. You may
            still be able to bring a case and I suggest you get in touch if you would like further advice on this point.
          </p>
        ) : (
          <p>
            You have not accepted any money from the defendant and please beware doing so as it may mean that your case
            is seen as 'settled' unless it is specified otherwise. If so, you may not be able to recover further
            damages.
          </p>
        )}
        {props.userObj.allQs.dInsured.answered === 'dInsuredYes' ? (
          ''
        ) : props.userObj.allQs.dInsured.answered === 'dInsuredNo' ? (
          <p>
            You have indicated that the defendant is not insured. This can cause a big problem as even if you do have a
            good case you may not be able to get any money from them. However, if they were acting in the course of
            their employment you may be able to bring a case against the company direct. For more information see this
            guide – link.
          </p>
        ) : (
          <p>
            You have indicated that you don't know whether the defendant is insured. If they were using a motor vehicle
            that normally required motor insurance then you should be able to bring a case through the Motor Insurer's
            Bureau (for more information see this guide –{' '}
            <a href="https://www.mib.org.uk/" target="_blank" rel="noopener noreferrer">
              link
            </a>). If not then this can be a big problem as even if you do have a good case you may not be able to get
            any money from the defendant. However, if they were acting in the course of their employment you may be able
            to bring a case against the company direct. For more information see this guide – link.
          </p>
        )}

        <p>
          <strong>Circumstances of Incident</strong>
        </p>
        <p>{props.q.element2a}</p>

        {props.userObj.allQs.injuredBy.answered === 'injuredByAnimal' ? (
          props.userObj.allQs.animalPet.answered === 'animalPetNo' ? (
            <p>
              You were injured by a wild animal whilst cycling. You would need to show that another party is at fault so
              that a case could be brought against them which would be challenging. If you would like further advice
              please send me a message with more detail.
            </p>
          ) : (
            <p>
              You were injured when someone's pet caused you to fall from your bicycle. The owner of the pet should have
              kept control over them, and you should have a good case. An exception is if you were cycling through a
              park or similar. In those circumstances, you may need to show you took appropriate care and could not have
              avoided the incident.
            </p>
          )
        ) : (
          ''
        )}
        <p>{props.q.filteringYes}</p>
        <p>{props.q.filteringNo}</p>
        {props.userObj.allQs.darkLights.answered === 'darkLightsNo' ? (
          <p>
            As you were not riding with lights, this may pose a problem as the defendants will argue that they were
            unable to see you in order to avoid the incident. Alternatively, it may lead to a reduction in your damages
            for 'contributory negligence'. For more information see this guide –{' '}
            <a href="https://en.wikipedia.org/wiki/Contributory_negligence" target="_blank" rel="noopener noreferrer">
              link
            </a>.
          </p>
        ) : (
          ''
        )}
        {props.userObj.allQs.witnessDets.answered === 'witnessDetsYes' ? (
          <p>It is helpful that you have a witness who can confirm how the incident occurred.</p>
        ) : (
          ''
        )}
        {props.userObj.allQs.dAdmitedLiability.answered === 'dAdmitedLiabilityYes' ? (
          props.userObj.allQs.dProsecuted.answered === 'dProsecutedYes' ? (
            <p>
              Given that the defendant has both admitted liability and been prosecuted, your case should be very strong.
            </p>
          ) : (
            <p>Given that the defendant has admitted liability, your case should be very strong.</p>
          )
        ) : props.userObj.allQs.dProsecuted.answered === 'dProsecutedYes' ? (
          <p>Given that the defendant has been prosecuted, your case should be very strong.</p>
        ) : (
          ''
        )}
        <p>
          <strong>Value Of Case</strong>
        </p>
        <p>
          If you have sustained an injury and the case succeeds, you will be entitled to damages for this depending on
          the type of injury, its severity and the length of time it lasts. In addition you are entitled to your
          financial losses as a result of the incident. For more details see this guide – link. If you have not
          sustained an injury and the case succeeds, you will still be entitled to damages for your financial losses as
          a result of the incident.
        </p>
        <p>
          <strong>Next Steps</strong>
        </p>
        <p>If you would now like to use the letter writing tool please press the 'next' button below.</p>
        <p>
          Alternatively, feel free to send me a message if you have any queries regarding the advice. I will not pass
          your details on to anyone else.
        </p>
      </div>
    </div>
  );
};

export default Advice;
