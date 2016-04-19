'use strict';

import React from 'react';

import TodoActions from '../actions/TodoActions';

const TodoItem = React.createClass({
  getDefaultProps: function () {
    return {
      todo: {
        description: null,
        status: false,
        createdAt: null
      },
      onChange: null,
      onRemove: null
    }
  },

  render: function () {
    return (
        <todo-item>
          <div className={this.props.todo.status ? 'done': null}>
            <input type="checkbox" checked={this.props.todo.status} onChange={this._onChange} />
            <span>{this.props.todo.description}</span>
            <button type="button" onClick={this._onClick}>Remove</button>
          </div>
        </todo-item>
    );
  },

  _onChange: function () {
    TodoActions.changeStatus(this.props.todo.createdAt, !this.props.todo.status);
  },

  _onClick: function () {
    TodoActions.deleteTodo(this.props.todo.createdAt);
  }
});

export default TodoItem;
