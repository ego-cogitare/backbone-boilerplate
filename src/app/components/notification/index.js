import Backbone from 'backbone';
import template from './template.hbs';
import './styles.css';

export default class extends Backbone.View {
  constructor(props) {
    super(props);
    this.render();
    this.die();
  }

  die() {
    setTimeout(() => {
      this.$el.fadeOut(1000, () => this.remove(this));
    }, 3000);
  }

  get className() {
    return 'alert notification alert-dismissible alert-' + this.model.get('type');
  }

  get events() {
    return {
      'click .close': function() {
        this.remove();
      }
    }
  }

  render() {
    this.$el.html(template(this.model.attributes));
  }
}
