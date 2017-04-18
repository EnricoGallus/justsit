import { combineReducers } from 'redux'

import homeReducer from './homeReducer'
import sittingReducer from './sittingReducer'
import stepReducer from './stepReducer'

export default combineReducers({
    homeReducer,
    sittingReducer,
    stepReducer,
})