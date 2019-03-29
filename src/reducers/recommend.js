import {BOUTIQUE, MV, NEWEST} from '../actions/recommend'


const reducer = (state = {sliders:[], albums:[], mvs:[]}, action) => {
    switch (action.type) {
        case NEWEST:
            return {...state, sliders: action.obj.list}
        case BOUTIQUE:
            return {...state, albums: action.obj.list}
        case MV:
            return {...state, mvs: action.obj.list}
        default:
            return state
    }
}

export default reducer