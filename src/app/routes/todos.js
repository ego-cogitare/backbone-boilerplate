import Backbone from 'backbone';
import Controller from '../modules/todos/controller';

export default class extends Backbone.Router {

  get routes() {
    return {
      'todos': function() {
        Controller.index();
      },
      'todos/view/:id': function(id) {
        Controller.show(id);
      }
    };
  }
}
