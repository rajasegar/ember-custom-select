import Ember from 'ember';


export default Ember.Controller.extend({
  csStyle: 'cs-skin-border',
  actions: {
    toggleStyle(key) {
      this.set('csStyle',`cs-skin-${key}`);
    }
  }
});
