'use strict';

import Reflux             from 'reflux';

import Todo               from '../models/Todo';

import TodoActions        from '../actions/TodoActions';

const TodoStore = Reflux.createStore({
  listenables: TodoActions,

  init: function () {
    this.state = [];
  },

  getInitialState: function () {
    return this.state;
  },

  throwError: function (err) {
    this.trigger(err);
  },

  addTodo: function (description, status, createdAt) {
    this.state.push(new Todo(description, status, createdAt));
    this.trigger(this.state);
  },

  deleteTodo: function (createdAt) {
    this.trigger(
        this.state.filter(function (todo) {
          return todo.createdAt != createdAt;
        })
    );
  },

  clearCompleted: function () {
    this.trigger(
        this.state.filter(function (todo) {
          return !todo.status;
        })
    );
  },

  changeStatus: function (createdAt, status) {
    this.trigger(
        this.state.map(function (todo) {
          if (createdAt) {
            if (createdAt == todo.createdAt) {
              todo.status = status;
            }
          } else {
            todo.status = status;
          }
          return todo;
        })
    );
  }
});

export default TodoStore;
