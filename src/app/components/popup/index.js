import Backbone from 'backbone';
import template from './template.hbs';
import './styles.css';

export default class extends Backbone.View {
  constructor(props) {
    super(props);
    this.render();
  }

  get events() {
    return {
      'click .js-close': function() {
        this.remove();
      }
    }
  }

  render() {
    this.$el.html(template(this.model.attributes));
  }
}
