import { observable, action, useStrict } from 'mobx';

useStrict(true);
export default class MobxUIStore {
  constructor(rootStore) {
    this.RootStore = rootStore;
  }
  @observable fadeIn = '';
  @observable navBarIsOpen = false;
  @observable currentSection = 'valuer';
  @observable printing = false;

  @action('toggleNavBar') toggleNavBar = () => (this.navBarIsOpen = !this.navBarIsOpen);
  @action('closeNavBar') closeNavBar = () => (this.navBarIsOpen = false);
  @action('setCurrentSection')
  setCurrentSection = x => {
    this.currentSection = x;
    this.RootStore.SessionStore.setInitialQ();
  };

  @action('handleFadeIn')
  handleFadeIn = () => {
    this.fadeIn = '';
    this.fadeIn = 'fadeIn';
    setTimeout(
      action(() => {
        this.fadeIn = '';
      }),
      1000
    );
  };
}
