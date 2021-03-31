import { combineReducers } from 'redux';
import movieListReducer from './MovieListReducer';

const RootReducer = combineReducers({
    movie_list: movieListReducer,
})

export default RootReducer;