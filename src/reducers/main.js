import { combineReducers } from 'redux'
import app from './app'
import common from './common'
import recommend from './recommend'
import album from './album'

const reducers = combineReducers({
  common,
  app,
  recommend,
  album
})

export default reducers