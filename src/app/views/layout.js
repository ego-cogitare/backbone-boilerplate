import Backbone from 'backbone';
import $ from 'jquery';
import Layout from '../templates/layout.hbs';

export default class LayoutView extends Backbone.View {

  constructor(options) {
    super(options);
  }

  show(section, view) {
    switch (section) {
      case 'content':
        this.$('#content-wrapper').empty().append(
          typeof view === 'string' ? view : view.render().$el
        );
      break;

      case 'sidebar':
        this.$('#sidebar-wrapper').empty().append(
          typeof view === 'string' ? view : view.render().$el
        );
      break;
    }
  }

  render() {
    this.$el.html(Layout());
    return this;
  }
}
