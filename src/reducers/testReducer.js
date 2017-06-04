// Reducer is a function that takes a state and action and returns a new state!

//below we are defaulting state to empty array. We want the array to store list of testObj's!

import * as types from '../actions/actionTypes';

//To re-iterate, every reducer will return a discrete property of the state, regardless of how many conditions are inside that reducer. 
// So try naming reducer after property of store it will represent. Or can rename the property when coombining reducers.


export function testReducer(state=[], action)   
{
    switch(action.type)           // see action should always have a type!
    {
        case types.ADD_OBJ:
            // cant do: state.push(action.testObj) since state is immutable. instead:
            return [...state, Object.assign({}, action.testObj)];  
            // See above we are returning a new array. ...state ( spread operator spreads the array ) and then use Object.assign to create new object with new data

        default: 
            return state;

    }

}
export function objectsReducer(state=[], action)   
{
    switch(action.type)           // see action should always have a type!
    {
        case types.LOAD_OBJECTS_SUCCESS:
            return action.objects;
        default: 
            return state;

    }

}

