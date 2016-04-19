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

  getInitialState: function () {
    return {
      value: '',
      todoStore: []
    }
  },

  render: function () {
    console.log('aaaa');
    return (
        <todo-list>
          <form onSubmit={this._onSubmit}>
            <input type="text" value={this.state.value} onChange={this._onChange} />
            <input type="submit" />
            {
              this.state.todoStore.forEach(function (todo) {
                return <TodoItem data={todo}></TodoItem>;
              })
            }
          </form>
        </todo-list>
    );
  },

  _onSubmit: function (e) {
    if (this.state.value.length) {
      TodoActions.addTodo(this.state.value, false);
    }
    e.preventDefault();
  },

  _onChange: function(e) {
    this.setState({value: e.target.value});
  }
});

export default TodoList;
