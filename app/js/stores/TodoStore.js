'use strict';

import Reflux             from 'reflux';

import Todo               from '../models/Todo';

import TodoActions        from '../actions/TodoActions';

const TodoStore = Reflux.createStore({
  listenables: TodoActions,

  init: function () {
    this.state = [];
    this.trigger(this.state);
  },

  throwError: function (err) {
    this.trigger(err);
  },

  addTodo: function (description, status) {
    this.state.push(new Todo(description, status));
    this.trigger(this.state);
  },

  deleteTodo: function () {
    console.log(this.state);
  },

  clearCompleted: function () {
    this.state.todo = this.state.todo.map((todo) => {
      if (!todo.getStatus()) {
        return todo;
      }
    });
    this.trigger(this.state);
  }
});

export default TodoStore;
