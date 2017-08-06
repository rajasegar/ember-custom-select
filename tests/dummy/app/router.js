import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('box-select');
  this.route('underline');
  this.route('elastic');
  this.route('slide');
  this.route('overlay');
  this.route('rotate');
  this.route('circular');
});

export default Router;
