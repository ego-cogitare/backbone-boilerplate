import Backbone from 'backbone';
import template from '../templates/layout.hbs';
import Notificaton from '../components/notification';
import Popup from '../components/popup';

export default class extends Backbone.View {

  constructor(props) {
    super(props);
    this.render();
  }

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

      case 'popup':
        const popupType = data.model && data.model.get('type') ? data.model.get('type') : 'default';
        const popupView = window.layout.popup = new Popup({
          model: new Backbone.Model({ type: popupType })
        });
        // Add view to popup window wrapper
        popupView.$('.modal-content').append(data.$el);

        // Add popup to layout popup section block
        this.$('#popup-container').empty().append(popupView.$el);
      break;
    }
  }

  hide(section) {
    switch (section) {
      case 'popup':
        window.layout.popup && window.layout.popup.remove();
      break;
    }
  }

  render() {
    this.$el.html(template());
  }
}
