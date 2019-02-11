import { combineReducers } from 'redux'
import user from './user'
import vedtak from './vedtak';

export default combineReducers({
    user,
    vedtak
})