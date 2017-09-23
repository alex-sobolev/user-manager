import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-details';
import './../../scss/main.scss';

const App = () => (
    <div className='app'>
        <div className='username-list'>
            <h2 className='username-list_header'>Username list:</h2>
            <UserList />
            <hr />
        </div>
        <div className='user-details'>
            <h2 className='user-details_header'>User details:</h2>
            <UserDetails />
        </div>
    </div>
);

export default App;
