import React from 'react';
import { Switch, Route} from 'react-router-dom';

import HomePage from 'pages/HomePage';
import Dashboard from 'pages/Dashboard';

export default function Routes() {
    return (    
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/dashboard' component={Dashboard} />
            </Switch>  
    );
}