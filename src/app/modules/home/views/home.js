import Backbone from 'backbone';
import template from '../templates/home.hbs';

export default class extends Backbone.View {
  constructor(props) {
    super(props);
    this.render();
  }

  get events() {
    return {
      'click .js-success': function() {
        window.layout.show('notification', {
          type: 'success',
          title: 'Success',
          message: 'Success message'
        });
      },
      'click .js-info': function() {
        window.layout.show('notification', {
          type: 'info',
          title: 'Info',
          message: 'Info message'
        });
      },
      'click .js-warning': function() {
        window.layout.show('notification', {
          type: 'warning',
          title: 'Warning',
          message: 'Warning message'
        });
      },
      'click .js-error': function() {
        window.layout.show('notification', {
          type: 'danger',
          title: 'Error',
          message: 'Error message'
        });
      },
      'click .js-popup-default': function() {
        this.trigger('popup:open', { type: 'default' });
      },
      'click .js-popup-success': function() {
        this.trigger('popup:open', { type: 'success' });
      },
      'click .js-popup-info': function() {
        this.trigger('popup:open', { type: 'info' });
      },
      'click .js-popup-warning': function() {
        this.trigger('popup:open', { type: 'warning' });
      },
      'click .js-popup-danger': function() {
        this.trigger('popup:open', { type: 'danger' });
      },
    };
  }

  render() {
    this.$el.html(template(this.model.attributes));
  }
}
