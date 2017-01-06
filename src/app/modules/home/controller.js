import Backbone from 'backbone';
import HomeView from './views/home';

export default {
  index: function() {
    window.layout.show('content', new HomeView);
  }
}
