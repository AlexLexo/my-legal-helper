import React from 'react';
import Accordion from './../../accordion/accordion';

const Advice = props => {
  const allQs = props.allQs;
  const currentAdvice = props.q;
  const generalPoints = {
    title: 'General Points',
    body: (
      <div>
        <p>
          In general terms, there is no legal barrier stopping you from bringing a case. Your case is in time, and you
          have until your 21st birthday or 3 years from the date of the incident in which to issue proceedings in the
          court. If you miss this deadline your case will be time barred. In addition, your case occurred in England or
          Wales so is within this jurisdiction.
        </p>
        {allQs.acceptedMoney.answered === 'acceptedMoneyYes' ? (
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
        {allQs.dInsured.answered === 'dInsuredDoNotKnow' &&
          (allQs.injuredBy.answered === 'injuredByPed' ||
            allQs.injuredBy.answered === 'injuredByBike' ||
            allQs.injuredBy.answered === 'injuredByAnimal') && (
            <div>
              <p>
                You have indicated that you don't know whether the defendant is insured. From a practical point of view,
                it is very difficult to recover damages against{' '}
                {allQs.injuredBy.answered === 'injuredByPed' && 'a pedestrian'}
                {allQs.injuredBy.answered === 'injuredByBike' && 'a cyclist'}
                {allQs.injuredBy.answered === 'injuredByAnimal' && 'an animal owner'} as they are not normally insured
                against such incidents. If they have household insurance this can sometimes cover them. Alternatively,
                you can pursue them for damages personally, although this is challenging and would only be worthwhile if
                they had sufficient money to justify it.
              </p>
              <p>
                However, if they were acting in the course of their employment you may be able to bring a case against
                the company direct. For more information see this guide –{' '}
                <a href="link" target="_blank" rel="noopener noreferrer">
                  link
                </a>.
              </p>
            </div>
          )}
        {allQs.dInsured.answered === 'dInsuredDoNotKnow' &&
          (allQs.injuredBy.answered === 'injuredByDoor' ||
            allQs.injuredBy2.answered === 'injuredByMotorbikeMoped' ||
            allQs.injuredBy2.answered === 'injuredByCarVan') && (
            <div>
              <p>
                You have indicated that you don't know whether the defendant is insured. You can find out if the vehicle
                was insured by searching the insurance database{' '}
                <a href="https://www.askmid.com/askmidenquiry.aspx" target="_blank" rel="noopener noreferrer">
                  here
                </a>). If the defendant was not insured, or did not stop at the scene, you should be able to get
                compensation through the Motor Insurers' Bureau (<a
                  href="https://www.mib.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.mib.org.uk
                </a>). All motor insurance policies contribute to this fund which covers hit and run incidents and those
                caused by uninsured drivers. There are strict time limits which can be found here, along with details on
                how to apply for compensation.
              </p>
              <p>
                However, if they were acting in the course of their employment you may be able to bring a case against
                the company direct. For more information see this guide –{' '}
                <a href="link" target="_blank" rel="noopener noreferrer">
                  link
                </a>.
              </p>
            </div>
          )}

        {allQs.dInsured.answered === 'dInsuredDoNotKnow' &&
          allQs.injuredBy2.answered === 'injuredByBusLorry' && (
            <div>
              <p>
                You have indicated that you don't know whether the defendant is insured. You can find out if the vehicle
                was insured by searching the insurance database{' '}
                <a href="https://www.askmid.com/askmidenquiry.aspx" target="_blank" rel="noopener noreferrer">
                  here
                </a>). If the defendant was not insured, or did not stop at the scene, you should be able to get
                compensation through the Motor Insurers' Bureau (<a
                  href="https://www.mib.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.mib.org.uk
                </a>). All motor insurance policies contribute to this fund which covers hit and run incidents and those
                caused by uninsured drivers. There are strict time limits which can be found here, along with details on
                how to apply for compensation.
              </p>
              <p>
                However, given that they were acting in the course of their employment you should be able to bring a
                case against the company direct. For more information see this guide –{' '}
                <a href="link" target="_blank" rel="noopener noreferrer">
                  link
                </a>.
              </p>
            </div>
          )}
        {allQs.dInsured.answered === 'dInsuredNo' &&
          (allQs.injuredBy.answered === 'injuredByPed' ||
            allQs.injuredBy.answered === 'injuredByBike' ||
            allQs.injuredBy.answered === 'injuredByAnimal') && (
            <div>
              <p>
                You have indicated that the defendant is not insured. From a practical point of view, it is very
                difficult to recover damages against {allQs.injuredBy.answered === 'injuredByPed' && 'a pedestrian'}
                {allQs.injuredBy.answered === 'injuredByBike' && 'a cyclist'}
                {allQs.injuredBy.answered === 'injuredByAnimal' && 'an animal owner'} as they are not normally insured
                against such incidents. If they have household insurance this can sometimes cover them. Alternatively,
                you can pursue them for damages personally, although this is challenging and would only be worthwhile if
                they had sufficient money to justify it.
              </p>
              <p>
                However, if they were acting in the course of their employment you may be able to bring a case against
                the company direct for more information see this guide –{' '}
                <a href="link" target="_blank" rel="noopener noreferrer">
                  link
                </a>.
              </p>
            </div>
          )}
        {allQs.dInsured.answered === 'dInsuredNo' &&
          (allQs.injuredBy.answered === 'injuredByDoor' ||
            allQs.injuredBy2.answered === 'injuredByMotorbikeMoped' ||
            allQs.injuredBy2.answered === 'injuredByCarVan') && (
            <div>
              <p>
                You have indicated that the defendant is not insured. You can find out if the vehicle was insured by
                searching the insurance database{' '}
                <a href="https://www.askmid.com/askmidenquiry.aspx" target="_blank" rel="noopener noreferrer">
                  www.askmid.com/askmidenquiry.aspx
                </a>). If the defendant was not insured, or did not stop at the scene, you should be able to get
                compensation through the Motor Insurers' Bureau (<a
                  href="https://www.mib.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.mib.org.uk
                </a>). All motor insurance policies contribute to this fund which covers hit and run incidents and those
                caused by uninsured drivers. There are strict time limits which can be found here, along with details on
                how to apply for compensation.
              </p>
              <p>
                However, if they were acting in the course of their employment you may be able to bring a case against
                the company direct. For more information see this guide –{' '}
                <a href="link" target="_blank" rel="noopener noreferrer">
                  link
                </a>.
              </p>
            </div>
          )}

        {allQs.dInsured.answered === 'dInsuredNo' &&
          allQs.injuredBy2.answered === 'injuredByBusLorry' && (
            <p>
              You have indicated that the defendant is not insured. You can find out if the vehicle was insured by
              searching the insurance database{' '}
              <a href="https://www.askmid.com/askmidenquiry.aspx" target="_blank" rel="noopener noreferrer">
                here
              </a>). If the defendant was not insured, or did not stop at the scene, you should be able to get
              compensation through the Motor Insurers' Bureau (<a
                href="https://www.mib.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.mib.org.uk
              </a>). All motor insurance policies contribute to this fund which covers hit and run incidents and those
              caused by uninsured drivers. There are strict time limits which can be found here, along with details on
              how to apply for compensation.<br />However, given that they were acting in the course of their employment
              you should be able to bring a case against the company direct. For more information see this guide –{' '}
              <a href="link" target="_blank" rel="noopener noreferrer">
                link
              </a>.
            </p>
          )}

        {allQs.injuredByHireBike.answered === 'injuredByHireBikeYes' ? (
          <p>
            As the defendant was riding a cycle hire bicycle you may be able to bring a claim through the 'third party
            liability' insurance of the company in question, and you should approach them direct.
          </p>
        ) : (
          <p />
        )}
      </div>
    )
  };
  const circumstancesOfIncident = {
    title: 'Circumstances of Incident',
    body: (
      <div>
        {currentAdvice.element2a && <p>{currentAdvice.element2a}</p>}
        {allQs.injuredBy.answered === 'injuredByAnimal' ? (
          allQs.animalPet.answered === 'animalPetNo' ? (
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
          <span />
        )}
        <p>{currentAdvice.filteringYes}</p>
        <p>{currentAdvice.filteringNo}</p>
        {currentAdvice.qId === 'oncomingAcrossPathAdvice' ? (
          allQs.filtering.answered === 'filteringYes' ? (
            <p>
              You were injured when the defendant turned into a side road on their right, going across your path. They
              had a duty to check that it was safe to turn before doing so. However, you were filtering to the left of a
              queue of traffic when approaching a side road on your left. This is seen as a hazardous manoeuvre and,
              although your case is likely to win, a court will normally reduce your damages by around 50% for
              'contributory negligence'. For more information see this guide –{' '}
              <a href="link" target="_blank" rel="noopener noreferrer">
                link
              </a>.
            </p>
          ) : (
            <p>
              You were injured when the defendant turned into a side road on their right, going across your path. They
              had a duty to check that it was safe to turn before doing so. If they failed to do so you should have a
              good case.
            </p>
          )
        ) : (
          <span />
        )}
        {currentAdvice.qId === 'vDirDetsSameQTurnIntoYouRAdvice' ? (
          allQs.filtering.answered === 'filteringYes' ? (
            <p>
              You were injured when the defendant turned into you while turning right. They were travelling in the same
              direction as you. You were filtering to the right of a queue of traffic when approaching a side road on
              your right. This is seen as a hazardous manoeuvre and - although your case is likely to win - you will
              normally have your damages reduced by around 50% for 'contributory negligence'. For more information see
              this guide – link.
            </p>
          ) : (
            <p>
              You were injured when the defendant turned into you while turning right. They were travelling in the same
              direction as you. On that basis it sounds like you should have a good case.
            </p>
          )
        ) : (
          <span />
        )}
        {allQs.pedFiltering.answered === 'pedFilteringYes' && (
          <p>
            You have indicated that you were filtering. If the pedestrian stepped in front of your path from the
            pavement this should not pose a problem. If they were walking between stationary vehicles and stepped into
            your path then they should have been on the lookout for you but there is an argument that you should have
            been aware of pedestrians crossing between the vehicles so you need to take care. As long as you were
            cycling carefully and at a reasonable speed then this should not be an issue.
          </p>
        )}
        {allQs.darkLights.answered === 'darkLightsNo' ? (
          <p>
            As you were not riding with lights, this may pose a problem as the defendants will argue that they were
            unable to see you in order to avoid the incident. Alternatively, it may lead to a reduction in your damages
            for 'contributory negligence'. For more information see this guide –{' '}
            <a href="https://en.wikipedia.org/wiki/Contributory_negligence" target="_blank" rel="noopener noreferrer">
              en.wikipedia.org/wiki/Contributory_negligence
            </a>.
          </p>
        ) : (
          <p />
        )}
        {allQs.witnessDets.answered === 'witnessDetsYes' ? (
          <p>It is helpful that you have a witness who can confirm how the incident occurred.</p>
        ) : (
          <p>
            You have indicated that you do not have the details of any witnesses. This might make it difficult for you
            to prove how the incident occurred.
          </p>
        )}
        {allQs.dAdmitedLiability.answered === 'dAdmitedLiabilityYes' ? (
          allQs.dProsecuted.answered === 'dProsecutedYes' ? (
            <p>
              Given that the defendant has both admitted liability and been prosecuted, your case should be very strong.
            </p>
          ) : (
            <p>Given that the defendant has admitted liability, your case should be very strong.</p>
          )
        ) : allQs.dProsecuted.answered === 'dProsecutedYes' ? (
          <p>Given that the defendant has been prosecuted, your case should be very strong.</p>
        ) : (
          <p />
        )}
      </div>
    )
  };
  const valueOfCase = {
    title: 'Value Of Case',
    body: (
      <div>
        <p>
          If you have sustained an injury and the case succeeds, you will be entitled to damages for this depending on
          the type of injury, its severity and the length of time it lasts. In addition you are entitled to your
          financial losses as a result of the incident. For more details see this guide –{' '}
          <button
            name="valuer"
            onClick={() => {
              props.history.push('valuer');
              props.setSection('valuer');
            }}
          >
            go to valuation tool
          </button>.
        </p>
        <p>
          If you have not sustained an injury and the case succeeds, you will still be entitled to damages for your
          financial losses as a result of the incident.
        </p>
        <strong>Next Steps</strong>
        <p>If you would now like to use the letter writing tool please press the 'next' button below.</p>
        <p>
          Alternatively, feel free to send us a message if you have any queries regarding the advice. We will not pass
          your details on to anyone else.
        </p>
      </div>
    )
  };
  return (
    <div className="advice">
      <h4>Some feedback about your claim</h4>
      <div className="text-justify">
        <Accordion content={generalPoints} />
        <Accordion content={circumstancesOfIncident} />
        <Accordion content={valueOfCase} />
      </div>
    </div>
  );
};

export default Advice;
