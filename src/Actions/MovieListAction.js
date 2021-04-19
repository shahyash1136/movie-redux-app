import axios from 'axios';

export const GetMovieList = (movieName, pageNum) => async dispatch => {
    try {
        dispatch({
            type: 'MOVIES_LIST_LOADING',
        })

        const res = await axios.get(`https://www.omdbapi.com/?s=${movieName}&page=${pageNum}&apikey=4a32bfca`);
        /* console.log(res.data) */
        dispatch({
            type: 'MOVIES_LIST_SUCCESS',
            payload: res.data,
            pageNum: pageNum
        })

    } catch (error) {
        dispatch({
            type: 'MOVIES_LIST_FAIL',
            payload: error.message,
        })
    }
}