// will be shared b/w both server side and browser
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import UsersList from './components/UsersList';

export default () => {
    return (
        <div>
            <Route exact path="/" component={ Home } />
            <Route path="/users" component={ UsersList } />
        </div>
    )
}