// We make a function that we call at entry point that configures the store

import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore( initialState){             // initial state can be really useful if we are initial state from server side rendering 
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(reduxImmutableStateInvariant(), thunk)
    );
}