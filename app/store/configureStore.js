import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from "../reducers/rootReducer";

// Middleware: Redux Persist Config
const persistConfig = {
    key: 'rootReducer',
    storage: AsyncStorage,
};

// Middleware: Redux Persist Persisted Reducer
export default function configureStore(initialState) {
    const persistedReducer = persistReducer(persistConfig, rootReducer);

    return createStore(persistedReducer, initialState, applyMiddleware(thunk, createLogger()));
}

