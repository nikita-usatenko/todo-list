'use strict';

import Reflux from 'reflux';

const TodoActions = Reflux.createActions([

  'addTodo',
  'checkTodo',
  'deleteTodo',
  'clearCompleted',
  'changeStatus'

]);

export default TodoActions;
