import Backbone from 'backbone';
import template from '../templates/todoItem.hbs';

export default class extends Backbone.View {
  constructor(props) {
    super(props);
  }

  get ui() {
    return {
      done: '.js-done'
    };
  }

  get events() {
    return {
      [`click ${this.ui.done}`]: function(e) {
        this.model.set('done', $(this.ui.done).is(':checked'));
      }
    };
  }

  get tagName() {
    return 'li';
  }

  get className() {
    return 'todo-item';
  }

  render() {
    this.$el.html(template(this.model.attributes));
    return this;
  }
}
