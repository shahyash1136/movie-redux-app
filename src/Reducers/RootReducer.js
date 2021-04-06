import { combineReducers } from 'redux';
import movieListReducer from './MovieListReducer';
import movieReducer from './MovieReducer';

const RootReducer = combineReducers({
    movie_list: movieListReducer,
    movie_data: movieReducer,
})

export default RootReducer;