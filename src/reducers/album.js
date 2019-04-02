import {SONG_LIST} from '../actions/album'

const reducer = (status = {}, action) => {
    switch(action.type) {
        case SONG_LIST:
            return {...status, detail: action.obj.detail}
        default:
            return status
    }
}

export default reducer