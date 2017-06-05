import * as actions from '../actions/actionTypes';

export function newStuffAvailable (state=[], action)
{
    switch(action.type)
    {
        case actions.GET_RANDOM_REDDIT:
        {
            let data= action.data;

            return [{
                tmp:Math.random().toString()
            }];
        }
            
        default: return [{
                tmp:"def"
            }];

    }
}