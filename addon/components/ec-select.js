import Ember from 'ember';
import layout from '../templates/components/ec-select';

const {
  computed,
  Component,
  A
} = Ember;

export default Component.extend({
  layout,
  classNames: ['cs-select'],
  classNameBindings: ['csActive','csStyle', 'customClasses'],
  csActive: false,
  csStyle: computed('style', function() {
    return `cs-skin-${this.get('style')}`;
  }),
  selectedItem: null,
  actions: {
    toggleSelect() {
      this.toggleProperty('csActive');
    },

    onChange(selected) {
      this.set('selectedItem', selected);
      this.send('toggleSelect');
    }
  },
  didInsertElement() {
    this._super(...arguments);
    let _children = this.get('children');
    this.$('option').each((index, el) => {
      let childObj = {
        value: el.value,
        class: el.dataset.class || '',
        text: el.innerText
      };
      _children.pushObject(childObj);
    });
    this.set('children', _children);
  },
  init() {
    this._super(...arguments);
    this.set('children', A());
  }
});
