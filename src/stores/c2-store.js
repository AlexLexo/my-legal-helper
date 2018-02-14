import { observable, action, useStrict } from 'mobx';
import fire from './../services/fire';
useStrict(true);
const db = fire.database().ref();

class C2Store {
  @observable qNum = 0;
  @observable courseData = [];
  @observable q = {};
  @observable nxtQ = '';
  @observable courseQs = {};
  @observable currentQ = {};
  @observable uid = '';
  @observable answered = '';
  @observable hist = null;

  @action('getCourse')
  getCourse = (uid, courseData, hist) => {
    db
      .child(`courses/c2/qs`)
      .once('value')
      .then(
        action(snapshot => {
          this.courseQs = snapshot.val();
        })
      )
      .then(() => {
        this.uid = uid;
        this.hist = hist;
        this.qNum = 0;
        this.courseData = courseData.sort(function(x, y) {
          return x.score - y.score;
        });
      })
      .then(() => {
        console.log(this.courseData[0].qId);
        if (this.courseData[0].qId) this.setNxtQ();
      })
      .then(hist.push('c2'));
  };

  @action('setNxtQ')
  setNxtQ = () => {
    this.qNum++;
    if (this.qNum > 9) {
      setTimeout(
        action(() => {
          this.qNum = 0;
          this.hist.push('results');
        }),
        2000
      );
      return;
    }
    this.nxtQ = this.courseData[this.qNum].qId;
    this.q = this.courseData[this.qNum];

    let answers = [
      this.courseQs[this.nxtQ].rightAns,
      this.courseQs[this.nxtQ].wrongAns1,
      this.courseQs[this.nxtQ].wrongAns2,
      this.courseQs[this.nxtQ].wrongAns3
    ];
    answers = answers
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
    this.currentQ = {
      q: this.courseQs[this.courseData[this.qNum].qId],
      ans1: answers[0],
      ans2: answers[1],
      ans3: answers[2],
      ans4: answers[3]
    };
  };

  @action('handleAnswer')
  handleAnswer = givenAns => {
    this.answered = this.courseQs[this.nxtQ].rightAns === givenAns ? 'r' : 'w';
    if (this.answered) {
      setTimeout(
        action(() => {
          this.answered = '';
        }),
        900
      );
    }
    const date = new Date().toString();
    this.q.lastAnsd = this.answered;
    this.q.lastSeen = date;
    this.q.timesAnsd++;
    this.q.timesRight =
      this.answered === 'r' ? this.q.timesRight + 1 : this.q.timesRight;
    this.q.score = this.answered === 'r' ? this.q.score + 3 : this.q.score - 5;
    db.child(`users/${this.uid}/courses/c2/qs`).update({
      [this.courseQs[this.nxtQ].arrayKey]: this.q
    });
    //set next question
    setTimeout(() => {
      this.setNxtQ();
    }, 100);
  };
}
const c2Store = new C2Store();
export default c2Store;
