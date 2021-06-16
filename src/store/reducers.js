import { combineReducers } from 'redux'
import { orderReducer as order } from './order'

export const reducers = combineReducers({
    order,
})
