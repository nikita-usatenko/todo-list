'use strict';

import React         from 'react';
import DocumentTitle from 'react-document-title';

import TodoList      from '../components/TodoList';

const TodoPage = React.createClass({
  render: function () {
    return (
        <DocumentTitle title="Todo">
          <section className="todo-page">

            <TodoList></TodoList>

          </section>
        </DocumentTitle>
    );
  }

});

export default TodoPage;
