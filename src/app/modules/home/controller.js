import Backbone from 'backbone';
import HomeView from './views/home';
import PopupView from './views/popup/popup';

export default {
  index: function() {
    // Create default page view
    const homeView = new HomeView({
      model: new Backbone.Model({
        title: 'Home',
        content: `<b>Lorem ipsum dolor sit amet...</b>`
      })
    });

    // Show view on main content section
    window.layout.show('content', homeView);

    // Display popup window
    homeView.on('popup:open', function(data) {
      /**
       * @param data
       * Data will be passed to popup window. Optionally you can pass type field
       * in data object to define popup type.
       * Next data.type values are available:
       *  - success
       *  - info
       *  - warning
       *  - error 
       */
      window.layout.show('popup', new PopupView({
        model: new Backbone.Model({
          title: 'Popup title',
          ...data
        })
      }));
    });
  }
}
