import { combineReducers } from 'redux'; 
import alerts from './alerts';
import user from './user';
import analysis from './analysis';

export default combineReducers({
    alerts,
    user,
    analysis
});