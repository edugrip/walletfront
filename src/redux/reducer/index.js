import {combineReducers} from 'redux'
import login from './authReducer'

export default combineReducers({
  user: login
})