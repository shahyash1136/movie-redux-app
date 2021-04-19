const initialState = {
    loading: false,
    data: [],
    totolCount: 0,
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
                data: action.pageNum > 1 ? [...state.data, ...action.payload.Search] : [...action.payload.Search],
                totolCount: action.payload.totalResults,
                error: '',

            }

        default:
            return state;
    }
}

export default MovieListReducer
