import axios from 'axios';

export const GetMovieList = (movieName) => async dispatch => {
    try {
        dispatch({
            type: 'MOVIES_LIST_LOADING',
        })

        const res = await axios.get(`http://www.omdbapi.com/?s=${movieName}&apikey=4a32bfca`);

        dispatch({
            type: 'MOVIES_LIST_SUCCESS',
            payload: res.data,
        })

    } catch (error) {
        dispatch({
            type: 'MOVIES_LIST_FAIL',
            payload: error.message,
        })
    }
}