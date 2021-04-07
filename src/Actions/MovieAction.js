import axios from 'axios';

export const GetMovieData = (movieId) => async dispatch => {
    try {
        dispatch({
            type: 'MOVIE_DATA_LOADING',
        })

        const res = await axios.get(`https://www.omdbapi.com/?i=${movieId}&apikey=4a32bfca`);
        dispatch({
            type: 'MOVIE_DATA_SUCCESS',
            payload: res.data,
        })

    } catch (error) {
        dispatch({
            type: 'MOVIE_DATA_FAIL',
            payload: error.message,
        })
    }
}