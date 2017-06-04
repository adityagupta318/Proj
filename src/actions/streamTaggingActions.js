import * as types from './actionTypes';
import 'es6-promise';
import 'isomorphic-fetch';

export function tagsLoadedSuccessfully(tags){
    return (
        {
            type: types.TAGS_LOADED_SUCESSFULLY, 
            tags: tags
        }
    );
}

export function loadTags(uri){

    return function (dispatch) {   // Thunk action creators always return a function that takes dispatcher as argument.

        console.log("The URI is "+ uri);

        return fetch(uri).then((response) => {
            
            if(response.ok){

                let jResp = response.json();
                return jResp;
            }
            else
            {
                throw new Error("Response not OK");
            }

        }).then(response => {
            console.log(response);
            dispatch(tagsLoadedSuccessfully(response));
        }).catch(error => {
            throw(error);
        });
    }
}


export function addNewTag(newData){
    return (
        {
            type: types.ADD_NEW_TAG, 
            newTagData: newData
        }
    );
}
export function addNewColumn(colName){
    return (
        {
            type: types.ADD_NEW_COLUMN, 
            colName: colName
        }
    );
}



export function saveAllTags(data){
    return function (dispatch) {   // Thunk action creators always return a function that takes dispatcher as argument.

        let d=data;
        let fd=data;
        
        /*return fetch(uri).then((response) => {
            
            if(response.ok){

                let jResp = response.json();
                return jResp;
            }
            else
            {
                throw new Error("Response not OK");
            }

        }).then(response => {
            console.log(response);
            dispatch(tagsLoadedSuccessfully(response));
        }).catch(error => {
            throw(error);
        });*/
    };
}


