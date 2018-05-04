import {combineReducers} from 'redux';

import users from '../userProcesses/userReducer';
import posts from '../postProcesses/postReducer';

export default combineReducers({
    users,
    posts,
});
