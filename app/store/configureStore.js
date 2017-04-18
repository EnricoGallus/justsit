import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import { autoRehydrate } from 'redux-persist'
import { createLogger } from 'redux-logger'

import rootReducer from '../reducers/rootReducer'

export default function configureStore(initialState = undefined) {
    const logger = createLogger();
    const enhancer = compose(
        applyMiddleware(thunk, promise, logger),
        //autoRehydrate()
    );

    return createStore(rootReducer, initialState, enhancer);
}

