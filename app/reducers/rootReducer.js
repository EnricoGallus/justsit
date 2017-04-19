import { combineReducers } from 'redux'

import homeReducer from './homeReducer'
import sittingReducer from './sittingReducer'

export default combineReducers({
    homeReducer,
    sittingReducer,
})