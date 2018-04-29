import { combineReducers } from 'redux';
import ratingReducer from './reducer';

export default combineReducers({
    rating: ratingReducer
});