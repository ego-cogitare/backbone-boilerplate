import Backbone from 'backbone';
import TodosListView from './views/todosList';

export default {
  index: function() {
    const todoListView = new TodosListView({
      collection: new Backbone.Collection()
    });

    todoListView.on('todo:add', function(title) {
      this.collection.add({ title });
    });

    window.layout.show('content', todoListView);
  },
  show: function(id) {
    window.layout.show('content', `Show todo with id: ${id}`);
  }
}
