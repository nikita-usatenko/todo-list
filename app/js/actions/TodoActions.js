'use strict';

import Reflux from 'reflux';

const TodoActions = Reflux.createActions([

  'addTodo',
  'checkTodo',
  'deleteTodo',
  'clearCompleted'

]);

export default TodoActions;
