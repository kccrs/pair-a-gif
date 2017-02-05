import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import PairGame from './components/PairGame';

export default (
	<Route path="/" component={App}>
    <Route path="/game" component={PairGame} />
	</Route>
);
