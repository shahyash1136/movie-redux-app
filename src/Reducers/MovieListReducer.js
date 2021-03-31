const initialState = {
    loading: false,
    data: [],
    error: '',
}

const MovieListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MOVIES_LIST_LOADING':
            return {
                ...state,
                loading: true,
                error: ''
            }
        case 'MOVIES_LIST_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case 'MOVIES_LIST_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload.Search,
                error: ''
            }

        default:
            return state;
    }
}

export default MovieListReducer
