import {ADD, DEL} from '../actions/app'

const reducer = (state = { count: 0 }, action) => {
    const count = state.count
    switch (action.type) {
        case ADD:
            return { count: count + 1 }
        case DEL:
            return { count: count - 1 }
        default:
            return state
    }
}

export default reducer