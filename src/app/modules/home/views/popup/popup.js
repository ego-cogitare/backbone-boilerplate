import Backbone from 'backbone';
import template from '../../templates/popup/popup.hbs';

export default class extends Backbone.View {
  constructor(props) {
    super(props);
    this.render();
  }

  get events() {
    return {
      'click .js-close': function() {
        console.log('Cancel button clicked');
      }
    }
  }

  render() {
    this.$el.html(template(this.model.attributes));
  }
}
