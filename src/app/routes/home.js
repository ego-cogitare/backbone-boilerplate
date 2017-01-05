import Backbone from 'backbone';
import Controller from '../modules/home/controller';

export default class extends Backbone.Router {

  get routes() {
    return {
      '': function() {
        Controller.index();
      },
      'home': function() {
        Controller.index();
      },
    };
  }
}
