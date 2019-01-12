import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import App from '../App';
import Recipe from './Recipe';

const Router = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App} />
            {/* :id is an parameters, so its replaced by the Link object in rescipes.js */}
            <Route path="/recipe/:id" component={Recipe} />
        </Switch>
    </HashRouter>
);

export default Router;