// This is root reducer. Here we combine all the reducers that we have created for our application.

import {combineReducers} from 'redux';
import * as reducer from './testReducer';
import * as taggingReducer from './streamTaggingReducers';
import * as stuff from './testRedditReducer';


const rootReducer = combineReducers({
    testReducer: reducer.testReducer,  // We are defining object. CAn also do shorthand when prop name n value same. Ex {testReducer}
    objectReducer: reducer.objectsReducer ,
    tags: taggingReducer.newTagsAvailable,
    stuff: stuff.newStuffAvailable
                                
});

export default rootReducer;
