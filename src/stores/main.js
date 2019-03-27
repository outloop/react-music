import reducers from '../reducers/main'
import {createStore} from 'redux'


const store = createStore(reducers)

export default store