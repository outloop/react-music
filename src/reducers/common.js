import {THEME_DARK, THEME_LIGHT} from '../actions/theme'
const reducer = (state = {theme: THEME_LIGHT}, action) => {
    switch(action.type){
        case THEME_DARK:
            return {theme: THEME_DARK}
        case THEME_LIGHT:
            return {theme: THEME_LIGHT}
        default:
            return state
    }
}

export default reducer