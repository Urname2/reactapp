import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import NotAllowed from '../pages/No'
import Profile from '../pages/Profile'
import Soknad from '../pages/Soknad';
import Vedtak from '../pages/Vedtak';
import routes from '../../infrastruktur/routes';

const Main = () => (
    <main>
        <Switch>
            <Route exact path={routes.home} component={Home} />
            <Route path={routes.profile} component={Profile} />
            <Route path='/notallowed' component={NotAllowed} />
            <Route path={routes.reseptsonkad} component={Soknad} />
            <Route path={routes.vedtak} component={Vedtak} />
        </Switch>
    </main>
)

export default Main