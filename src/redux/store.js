import {createStore, applyMiddleware} from 'redux';
import looger from 'redux-logger';
import thunk from 'redux-thunk';
import {persistStore} from 'redux-persist';

import rootReducer from './root-reducer';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(looger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

export default {
    store,
    persistor
};