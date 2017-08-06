import Ember from 'ember';
import bodyClass from '../utils/body-class';

export default Ember.Route.extend({
  afterModel() {
    this._super(...arguments);
    bodyClass('color-5');
  }
});
