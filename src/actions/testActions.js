// Action is a funtion that creates an action object. Which is a plain object that has a 'type' property and any other data.

import * as types from './actionTypes';
import courseApi from '../api/mockTestApi';


export function testAction( testObj){
    return (
        {
            type: types.ADD_OBJ, 
            testObj: testObj
        }
    );
}

export function loadObjectsSuccess(objects){
    return ({

        type: types.LOAD_OBJECTS_SUCCESS,
        objects: objects
    }
    );
}

export function loadObjects(){

    return function (dispatch) {   // Thunk action creators always return a function that takes dispatcher as argument.

        return courseApi.getAllCourses().then(objects => {
            dispatch(loadObjectsSuccess(objects));
        }).catch(error => {
            throw(error);
        });
    };
}


