import Backbone from 'backbone';
import TodoItemView from './todoItem';
import template from '../templates/todosList.hbs';
import 'iCheck';
import 'iCheck/skins/all.css';

export default class extends Backbone.View {
  constructor(props) {
    super(props);
    this.listenTo(this.collection, 'update reset', this.render);
    this.render();
  }

  get ui() {
    return {
      todo: '.js-todo',
      todosList: '.js-todos-list',
      todoAdd: '.js-todo-add',
      filter: '.js-filter'
    };
  }

  get events() {
    return {
      [`click ${this.ui.todoAdd}`]: 'addTodo',
      [`keydown ${this.ui.todo}`]: function(e) {
        if (e.which === 13) {
          this.addTodo();
        }
      },
      [`click ${this.ui.filter}`]: function() {
        const undone = this.collection.filter((todo) => !todo.get('done'));
        this.collection.reset(undone);
      }
    };
  }

  addTodo() {
    const title = $(this.ui.todo).val();
    if (title.trim() === '') {
      return false;
    }
    this.trigger('todo:add', title);
  }

  render() {
    // Render todos layout
    this.$el.html(template());

    // Set focus to input todo title filed
    this.$(this.ui.todo).focus();

    // Rendering and show todos list
    this.$(this.ui.todosList).append(
      this.collection.map((model) => new TodoItemView({ model }).$el)
    );

    // Apply icheck plugin
    $('input[type="checkbox"]').icheck({
      checkboxClass: 'icheckbox_minimal-blue',
      radioClass: 'iradio_minimal-blue'
    });
  }
}
