import { combineReducers } from 'redux';
import users from './users';
import activeUser from './active-user';


const reducers = combineReducers({
    users,
    activeUser
});

export default reducers;
