
export function userReducer(state = {  }, action) {

    switch (action.type) {
        case 'MSG_CHANGE':
            return { name: action.payload.name }
        case 'DECREMENT':
            return { value: state.value - 1 }

        // case 'GET_TODOS':
        case 'GETTING_TODOS':
            return { ...state, data: [], isFetching: true, success: false, fail: false }

        case 'GETTING_TODOS_SUCCESS':
            return { ...state, data: action.payload.data, isFetching: false, success: true, fail: false }

        case 'GETTING_TODOS_FAILED':
            return { ...state, data: [], isFetching: false, success: false, fail: true }

        default:
            return state
    }
}
