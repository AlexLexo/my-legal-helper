'use strict';

angular
  .module('mlhApp.caseQCtrl', [])

  .controller('caseQCtrl', [
    '$scope',
    '$rootScope',
    '$translate',
    'questionFactory',
    function($scope, $rootScope, $translate, questionFactory) {
      $scope.todaysDate = moment().format('DD/MM/YYYY');
      $scope.qObj = {};
      $scope.nxtQ = 'iDets1HitAsPassedAdvice';
      ($rootScope.caseObj = {}),
        questionFactory.getNxtQ().then(function(response) {
          let q = response.data;
          $scope.qObj = { 0: q[$scope.nxtQ] };
        });

      $scope.processAnswer = function(thisQId, nxtQuestion, answer) {
        $scope.nxtQ = nxtQuestion;
        answer = answer ? answer : 'unanswered';
        $scope.gotoNxtQ = function() {
          $rootScope.caseObj[thisQId] = answer;
          if (thisQId === 'iDate') {
            var accidentDate = moment($rootScope.caseObj.iDate, 'DD/MM/YYYY');
            var threeYearsAgo = moment().subtract(3, 'years');
            var DOBPlus21 = moment($rootScope.caseObj.cDOB, 'DD/MM/YYYY').add(21, 'years');

            if (moment(accidentDate).isBefore(threeYearsAgo) && moment(DOBPlus21).isBefore(moment())) {
              $scope.nxtQ = 'timeBarred';
            }
          } else if ($scope.nxtQ === 'letterDefendant' || $scope.nxtQ === 'letterInsurer') {
            generateLetter();
          }

          questionFactory.getNxtQ().then(function(response) {
            let q = response.data;
            $scope.qObj = { 0: q[$scope.nxtQ] };
          });
        };
      };

      $scope.gotoPreviousQ = function(thisQId) {
        if (thisQId !== 'cFullName') {
          delete $rootScope.caseObj[thisQId];
          $scope.nxtQ = Object.keys($rootScope.caseObj)[Object.keys($rootScope.caseObj).length - 1];
          questionFactory.getNxtQ().then(function(response) {
            let q = response.data;
            $scope.qObj = { 0: q[$scope.nxtQ] };
          });
        }
      };

      //letter generator
      let generateLetter = function() {
        //general varients
        if ($rootScope.caseObj.writeWho === 'writeWhoDefendant') {
          $scope.writingTo = 'you';
          $scope.be = 'you were';
        } else {
          $scope.writingTo = 'your insured';
          $scope.be = 'your insured was';
        }
        if (
          $rootScope.caseObj.injured === 'injuredYes' &&
          $rootScope.caseObj.lossesFinancial === 'lossesFinancialYes'
        ) {
          $scope.sufferedInjury = true;
          $scope.sufferedFinancial = true;
          $scope.sufferedWhat = 'injuries and financial loss';
        } else if (
          $rootScope.caseObj.injured === 'injuredYes' &&
          $rootScope.caseObj.lossesFinancial === 'lossesFinancialNo'
        ) {
          $scope.sufferedInjury = true;
          $scope.sufferedFinancial = null;
          $scope.sufferedWhat = 'injuries';
        } else if (
          $rootScope.caseObj.injured === 'injuredNo' &&
          $rootScope.caseObj.lossesFinancial === 'lossesFinancialYes'
        ) {
          $scope.sufferedInjury = null;
          $scope.sufferedFinancial = true;
          $scope.sufferedWhat = 'financial loss';
        } else {
          $scope.sufferedInjury = null;
          $scope.sufferedFinancial = null;
          $scope.sufferedWhat = null;
        }
        if ($rootScope.caseObj.suffer === 'sufferYes') {
          $scope.sufferYes = true;
        } else {
          $scope.sufferYes = null;
        }
        if (
          $rootScope.caseObj.lossOfEarnings === 'lossOfEarningsYesTimeOff' &&
          $rootScope.caseObj.lossOfEarningsTo === 'ongoing'
        ) {
          $scope.lossOfEarningsA = true;
          $scope.lossOfEarningsB = null;
          $scope.lossOfEarningsC = null;
          $scope.lossOfEarningsD = null;
        } else if (
          $rootScope.caseObj.lossOfEarnings === 'lossOfEarningsYesTimeOff' &&
          $rootScope.caseObj.lossOfEarningsTo !== 'ongoing'
        ) {
          $scope.lossOfEarningsA = null;
          $scope.lossOfEarningsB = true;
          $scope.lossOfEarningsC = null;
          $scope.lossOfEarningsD = null;
        } else if (
          $rootScope.caseObj.lossOfEarnings === 'lossOfEarningsYesLostJob' &&
          $rootScope.caseObj.lossOfEarningsTo === 'ongoing'
        ) {
          $scope.lossOfEarningsA = null;
          $scope.lossOfEarningsB = null;
          $scope.lossOfEarningsC = true;
          $scope.lossOfEarningsD = null;
          $scope.job =
            'I was employed as {{caseObj.lossOfEarningsYesLostJobDets}} and have incurred loss of earnings from this since {{caseObj.lossOfEarningsFrom}}.';
          $scope.income = 'My approximate net weekly income was ';
        } else if (
          $rootScope.caseObj.lossOfEarnings === 'lossOfEarningsYesLostJob' &&
          $rootScope.caseObj.lossOfEarningsTo !== 'ongoing'
        ) {
          $scope.lossOfEarningsA = null;
          $scope.lossOfEarningsB = null;
          $scope.lossOfEarningsC = null;
          $scope.lossOfEarningsD = true;
          $scope.job =
            'I was employed as {{caseObj.lossOfEarningsYesLostJobDets}} and incurred loss of earnings from this from {{caseObj.lossOfEarningsFrom}} to {{caseObj.lossOfEarningsTo}}.';
          $scope.income = 'My approximate net weekly income was ';
        }
        if (
          $rootScope.caseObj.lossesMed === 'lossesMedYes' ||
          $rootScope.caseObj.lossesTreatment === 'lossesTreatmentYes' ||
          $rootScope.caseObj.lossesFinancialOther === 'lossesFinancialOtherYes' ||
          $rootScope.caseObj.lossesProperty === 'lossesPropertyYes' ||
          $rootScope.caseObj.lossesTravel === 'lossesTravelYes'
        ) {
          $scope.otherFinancialLosses = true;
        } else {
          $scope.otherFinancialLosses = null;
        }

        //which letter template to choose
        //roadDefectLetter
        if ($rootScope.caseObj.injuredBy2 === 'injuredByRoadDefect') {
          $scope.nxtQ = 'roadDefectLetter';
        }
        //injuredByAnimalLetter
        if ($rootScope.caseObj.injuredBy === 'injuredByAnimal') {
          $scope.nxtQ = 'injuredByAnimalLetter';
        }
        //injuredByPedLetter
        if ($rootScope.caseObj.injuredBy === 'injuredByPed') {
          $scope.nxtQ = 'injuredByPedLetter';
        }
        //rearEndedByLetter
        if ($rootScope.caseObj.iDets1 === 'iDets1Rear') {
          $scope.nxtQ = 'rearEndedByLetter';
        }
        //vTurned1RChangingLanesLetter
        if ($rootScope.caseObj.vTurned1 === 'vTurned1RChangingLanes') {
          $scope.nxtQ = 'vTurned1RChangingLanesLetter';
        }
        //vTurned1LChangingLanesLetter
        if ($rootScope.caseObj.vTurned1 === 'vTurned1LChangingLanes') {
          $scope.nxtQ = 'vTurned1LChangingLanesLetter';
        }
        //vDirDetsSameQTurnIntoYouRLetter
        if ($rootScope.caseObj.iDets1 === 'vTurned1RTurning') {
          $scope.nxtQ = 'vDirDetsSameQTurnIntoYouRLetter';
        }
        //vDirDetsSameQTurnIntoYouLLetter
        if ($rootScope.caseObj.iDets1 === 'vTurned1LTurning') {
          $scope.nxtQ = 'vDirDetsSameQTurnIntoYouLLetter';
        }
        //oncomingOvertakingLetter
        if ($rootScope.caseObj.vTurned2 === 'vTurned2Overtaking') {
          $scope.nxtQ = 'oncomingOvertakingLetter';
        }
        //oncomingAcrossPathLetter
        if ($rootScope.caseObj.vTurned2 === 'vTurned2Turning') {
          $scope.nxtQ = 'oncomingAcrossPathLetter';
        }
        //vTurned2ParkingLetter
        if ($rootScope.caseObj.vTurned2 === 'vTurned2Parking') {
          $scope.nxtQ = 'vTurned2ParkingLetter';
        }
        //vTurned2SideRoadLetter
        if ($rootScope.caseObj.vTurned2 === 'vTurned2SideRoad') {
          $scope.nxtQ = 'vTurned2SideRoadLetter';
        }
        //roundaboutLLetter
        if ($rootScope.caseObj.roundabout === 'roundaboutDirL') {
          $scope.nxtQ = 'roundaboutLLetter';
        }
        //iDets1HitAsPassedLetter
        if ($rootScope.caseObj.iDets1 === 'iDets1HitAsPassed') {
          $scope.nxtQ = 'iDets1HitAsPassedLetter';
        }
      };

      //print letter
      $scope.printLetter = function(el) {
        var restorepage = document.body.innerHTML;
        var printcontent = document.getElementById(el).innerHTML;
        document.body.innerHTML = printcontent;
        window.print();
        document.body.innerHTML = restorepage;
      };

      //filters
      $scope.basic_input = item => {
        if (item.type === 'text' || item.type === 'date' || item.type === 'number' || item.type === 'email') {
          return item;
        }
      };
      $scope.dropdown_input = item => {
        if (item.type === 'dropdown') {
          return item;
        }
      };
      $scope.button_input = item => {
        if (item.type === 'button') {
          return item;
        }
      };
      $scope.advice_input = item => {
        if (item.type === 'advice') {
          return item;
        }
      };
      $scope.weak_input = item => {
        if (item.type === 'weak') {
          return item;
        }
      };
      $scope.letter_input = item => {
        if (item.type === 'letter') {
          return item;
        }
      };

      //advice eval functions and variables
      //$scope.showDInsuredNo = $rootScope.caseObj.dInsured === "dInsuredNo";
      //$scope.showDInsuredDoNotKnow = $rootScope.caseObj.dInsured === "dInsuredDoNotKnow";
      //$scope.showDarkLightsNo = $rootScope.caseObj.darkLights === "darkLightsNo";
      //$scope.showWitnessDetsYes = $rootScope.caseObj.witnessDets === "witnessDetsYes";
      //$scope.showDAdmitedLiabilityYesDProsecutedYes = $rootScope.caseObj.dAdmitedLiability === 'dAdmitedLiabilityYes' && $rootScope.caseObj.dProsecuted === 'dProsecutedYes';
      //$scope.showDProsecutedNo = $rootScope.caseObj.dProsecuted === 'dProsecutedNo';
      //$scope.showDAdmitedLiabilityNo = $rootScope.caseObj.dAdmitedLiability === 'dAdmitedLiabilityNo';
      //$scope.showAnimalPetNo = $rootScope.caseObj.animalPet === 'animalPetNo';
      //$scope.showAnimalPetYes = $rootScope.caseObj.animalPet === 'animalPetYes';
      //$scope.showRoundaboutDetsDirLRR = $rootScope.caseObj.roundaboutDirLR === 'roundaboutDirLRR';
      //$scope.showRoundaboutDetsDirLRL = $rootScope.caseObj.roundaboutDirLR === 'roundaboutDirLRL';
      //$scope.showFilteringYes = $rootScope.caseObj.filtering === 'filteringYes';
      //$scope.showFilteringNo = $rootScope.caseObj.filtering === 'filteringNo';
    }
  ]);
