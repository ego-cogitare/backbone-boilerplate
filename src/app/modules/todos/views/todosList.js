import $ from 'jquery';
import Backbone from 'backbone';
import TodoItemView from './todoItem';
import template from '../templates/todosList.hbs';

export default class extends Backbone.View {
  constructor(props) {
    super(props);
    this.listenTo(this.collection, 'update reset', this.render);
  }

  get tagName() {
    return 'ul';
  }

  get className() {
    return 'todos-list';
  }

  get ui() {
    return {
      todo: '.js-todo',
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
    this.$el.html(template());

    this.$(this.ui.todo).focus();

    const todos = this.collection.map((todo) => {
      return new TodoItemView({
        model: todo
      }).render().$el;
    });
    this.$('.js-todos-list').append(todos);
    return this;
  }
}
