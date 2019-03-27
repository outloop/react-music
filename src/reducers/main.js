import { combineReducers } from 'redux'
import app from './app'
import common from './common'

const reducers = combineReducers({
  common,
  app
})

export default reducers