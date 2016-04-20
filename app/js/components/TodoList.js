'use strict';

import React       from 'react';
import Reflux      from 'reflux';

import TodoItem    from './TodoItem';

import TodoStore   from '../stores/TodoStore';
import TodoActions from '../actions/TodoActions';

const TodoList = React.createClass({
  mixins: [
    Reflux.connect(TodoStore, 'todoStore')
  ],

  FILTERS: {
    TODO_ALL: '',
    TODO_DONE: 'done',
    TODO_ACTIVE: 'active'
  },

  getInitialState: function () {
    return {
      value: '',
      filter: this.FILTERS.TODO_ALL,
      selected: false
    }
  },

  render: function () {
    var self = this;
    var todos = this.state.todoStore.filter(function (todo) {
      return self._filter(todo);
    });


    return (
        <todo-list>
          <form onSubmit={this._onSubmit} className="todo-list">
            <div className="heading list-item">
              <input type="checkbox" onChange={this._selectAll} />
              <input type="text" value={this.state.value} onChange={this._onChange} placeholder="Todo"/>
            </div>
            <div className="list">
              {
                todos.map(function (todo) {
                  return <TodoItem todo={todo} key={todo.createdAt} onChange={self._onStatusChange} onRemove={self._onRemove}></TodoItem>;
                })
              }
            </div>
            <div className="footer">
              <a href="#" className={this.state.filter == this.FILTERS.TODO_ALL ? 'current': null} data-filter={this.FILTERS.TODO_ALL} onClick={this._switchFilter}>All</a>
              <a href="#" className={this.state.filter == this.FILTERS.TODO_ACTIVE ? 'current': null} data-filter={this.FILTERS.TODO_ACTIVE} onClick={this._switchFilter}>Active</a>
              <a href="#" className={this.state.filter == this.FILTERS.TODO_DONE ? 'current': null} data-filter={this.FILTERS.TODO_DONE} onClick={this._switchFilter}>Done</a>
            </div>
          </form>
        </todo-list>
    );
  },

  _onSubmit: function (e) {
    if (this.state.value.length) {
      TodoActions.addTodo(this.state.value, false, Date.now());
      this.setState({value: ''});
    }
    e.preventDefault();
  },

  _onChange: function(e) {
    this.setState({value: e.target.value});
  },

  _selectAll: function () {
    var self = this;

    this.setState({selected: !this.state.selected}, function () {
      TodoActions.changeStatus(null, self.state.selected);
    });
  },

  _filter: function (todo) {
    switch(this.state.filter) {
      case this.FILTERS.TODO_DONE: return todo.status;
      case this.FILTERS.TODO_ACTIVE: return !todo.status;
    }

    return true;
  },

  _switchFilter: function (e) {
    var self = this;

    this.setState({filter: e.currentTarget.dataset.filter}, function () {
      self.render();
    });
    e.preventDefault();
  }
});

export default TodoList;
