import React from 'react';
import Details from '../Details/Details';
import NotFound from '../NotFound/NotFound';
import { Route, Switch } from 'react-router-dom';
import './Main.scss';

const Main = () => {
	return (
		<main className='c-main'>
			<Switch>
				<Route exact path='/:lon/:lat' component={Details} />
				<Route exact path='/' component={Details} />
				<Route render={() => <NotFound />} />
			</Switch>
		</main>
	);
};

export default Main;
