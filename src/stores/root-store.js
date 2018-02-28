import { useStrict } from 'mobx';
import UIStore from './ui-store';
import SessionStore from './session-store';

useStrict(true);
class RootStore {
  constructor() {
    this.UIStore = new UIStore(this);
    this.SessionStore = new SessionStore(this);
  }
}
export default RootStore;
