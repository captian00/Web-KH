import {combineReducers} from 'redux'
import customers from './customer';

const allReducer = combineReducers({
    customers,
})

export default allReducer;