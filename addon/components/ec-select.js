import Ember from 'ember';
import layout from '../templates/components/ec-select';

const {
  Component,
  A
} = Ember;

export default Component.extend({
  layout,
  classNames: ['cs-select'],
  classNameBindings: ['csActive','style'],
  csActive: false,
  children: A(),
  actions: {
    toggleSelect() {
      this.toggleProperty('csActive');
    }
  },
  didInsertElement() {
    this._super(...arguments);
    let _children = this.get('children');
    this.$('option').each((index, el) => {
      _children.pushObject(el.value);
    });
    this.set('children', _children);
  }
});
