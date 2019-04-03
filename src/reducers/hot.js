import {HOT_LIST} from '../actions/hot'

const reducer = (state = {}, action) => {
    switch(action.type) {
        case HOT_LIST:
            return {...state, list: action.obj.list}
        default:
            return state
    }
}

export default reducer