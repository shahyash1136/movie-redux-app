const initialState = {
    loading: false,
    data: {},
    error: '',
}

const MovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MOVIE_DATA_LOADING':
            return {
                ...state,
                loading: true,
                error: '',
            };
        case 'MOVIE_DATA_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case 'MOVIE_DATA_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            };



        default:
            return state;
    }
}

export default MovieReducer;