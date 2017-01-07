import Backbone from 'backbone';
import template from '../templates/layout.hbs';

export default class LayoutView extends Backbone.View {

  get className() {
    return 'hold-transition skin-blue sidebar-mini layout-boxed';
  }

  get ui() {
    return {
      sidebarMenu: '.js-sidebar-menu'
    };
  }

  get events() {
    return {
      [`click ${this.ui.sidebarMenu} LI`]: function(e) {
        $(`${this.ui.sidebarMenu} LI`).removeClass('active');
        $(e.currentTarget).addClass('active');
      }
    };
  }

  show(section, view) {
    switch (section) {
      case 'content':
        this.$('#content-wrapper').empty().append(
          typeof view === 'string' ? view : view.$el
        );
      break;

      case 'sidebar':
        this.$('#sidebar-wrapper').empty().append(
          typeof view === 'string' ? view : view.$el
        );
      break;
    }
  }

  render() {
    this.$el.html(template());
  }
}
