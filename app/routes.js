import React from 'react';
import { Route } from 'react-router';

import App from './components/App';
import PlayGame from './components/PlayGame';
import Search from './components/Search';

export default (
  <Route path="/" component={App} >
    <Route path="/game" component={PlayGame} />
    <Route path="/search" component={Search} />
	</Route>
);
