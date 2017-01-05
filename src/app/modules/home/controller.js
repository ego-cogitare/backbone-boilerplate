import Backbone from 'backbone';

export default {
  index: function() {
    window.layout.show('content', `
      <h1>Home.</h1>
    `);
  }
}
