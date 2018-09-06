import { combineReducers } from "redux";
import {mathReducer} from './mathReducer'
import {userReducer} from './userReducer'

export const reducers = combineReducers({
  mathReducer, userReducer
  })
