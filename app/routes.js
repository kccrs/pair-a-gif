import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import DisplayGiphy from './components/DisplayGiphy';
import Search from './components/Search';

export default (
	<Route path="/" component={App}>
    {/* <Route path="/display" component={DisplayGiphy} />
    <Route path="/search" component={Search} /> */}
	</Route>
);
