import { combineReducers } from 'redux'
import app from './app'
import common from './common'
import recommend from './recommend'

const reducers = combineReducers({
  common,
  app,
  recommend
})

export default reducers