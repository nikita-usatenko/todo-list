'use strict';

import React                       from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import CreateBrowserHistory        from 'history/lib/createBrowserHistory';

import App                         from './App';
import NotFoundPage                from './pages/NotFoundPage';
import TodoPage                    from './pages/TodoPage';

export default (
  <Router history={CreateBrowserHistory()}>
    <Route path="/" component={App}>

      <IndexRoute component={TodoPage} />

      <Route path="/" component={TodoPage} />

      <Route path="*" component={NotFoundPage} />

    </Route>
  </Router>
);
