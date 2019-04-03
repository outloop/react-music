import { combineReducers } from 'redux'
import app from './app'
import common from './common'
import recommend from './recommend'
import album from './album'
import hot from './hot'
import search from './search'

const reducers = combineReducers({
  common,
  app,
  recommend,
  album,
  hot,
  search
})

export default reducers