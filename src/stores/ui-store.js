import { observable, action, useStrict } from 'mobx';
useStrict(true);
class MobxUIStore {
  @observable fadeIn = '';
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

const UIStore = new MobxUIStore();
export default UIStore;
