import Backbone from 'backbone';
import template from '../templates/home.hbs';

export default class extends Backbone.View {
  render() {
    this.$el.html(template({
      title: 'Home',
      content: 'Lorem ipsum...'
    }));
    return this;
  }
}
