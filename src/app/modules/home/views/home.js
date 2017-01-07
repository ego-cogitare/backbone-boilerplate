import Backbone from 'backbone';
import template from '../templates/home.hbs';

export default class extends Backbone.View {
  constructor(props) {
    super(props);
    this.render();
  }

  render() {
    this.$el.html(template(this.model.attributes));
  }
}
