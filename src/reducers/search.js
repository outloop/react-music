import {SEARCH_ACTION, INPUT_ACTION} from '../actions/search'

const reducer = (state = {}, action) => {
    switch(action.type) {
        case SEARCH_ACTION:
            return {...state, list: action.obj.list, searching: action.obj.status}
        case INPUT_ACTION:
            return {...state, content: action.obj.content}
        default:
            return state
    }
}

export default reducer