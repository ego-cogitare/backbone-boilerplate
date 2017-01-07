import Backbone from 'backbone';
import template from '../templates/layout.hbs';
import Notificaton from '../components/notification';

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

  show(section, data) {
    switch (section) {
      case 'content':
        this.$('#content-wrapper').empty().append(
          typeof data === 'string' ? data : data.$el
        );
      break;

      case 'sidebar':
        this.$('#sidebar-wrapper').empty().append(
          typeof data === 'string' ? data : data.$el
        );
      break;

      case 'notification':
        this.$('#notification-container').append(
          new Notificaton({
            model: new Backbone.Model(data)
          }).$el
        );
      break;
    }
  }

  render() {
    this.$el.html(template());
  }
}
