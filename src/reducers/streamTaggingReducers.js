import * as types from '../actions/actionTypes';

export function newTagsAvailable(state=[], action )
{
    switch(action.type)           // see action should always have a type!
    {
        case types.TAGS_LOADED_SUCESSFULLY:
        {
            let tagGroups=[];
            action.tags.Tags.forEach(ex=>{
                let index= tagGroups.findIndex(x=>x.Column == ex.Column);
                if(index==-1)
                {
                    tagGroups.push({
                        Column: ex.Column,
                        Tags: [ex]
                    });
                }
                else
                {
                    tagGroups[index].Tags.push(ex);
                }
            }); 
            return {URI: action.tags.URI,
                     TagGroups: tagGroups};
        }
        case types.ADD_NEW_TAG:
        {
            let tagData= action.newTagData; // properties: Column, TagName, TagValue;

            let newState= JSON.parse(JSON.stringify(state)); // Maintain immutability of state in Redux
            let newTag= createNewTag(tagData.Column, tagData.TagName, tagData.TagValue);

            let index= newState.TagGroups.findIndex(ex=> ex.Column==newTag.Column);
            if(index!=-1)
            {
                newState.TagGroups[index].Tags.push(newTag);
            }
            return newState;            
        } 
        case types.ADD_NEW_COLUMN:
        {
            let newState= JSON.parse(JSON.stringify(state)); // Maintain immutability of state in Redux
            let newTagGroup =  GetNewTagGroup(action.colName);
            newState.TagGroups.push(newTagGroup);
            return newState;
        }
        default: 
            return {URI:"", TagGroups:[{Column:"", Tags:[{Column:"",TagName:"",TagValue:"" }]}]};

    }
}



const createNewTag=function(column, tagName, tagValue){
    return ({
        Column:column,
        Confidence:0,
        InnerField:"",
        IsInferred:false,
        Source: "DataScan",
        TagName: tagName,
        TagValue: tagValue
    });

};

const GetNewTagGroup= function(columnName)
{
    return({
        Column: columnName,
        Tags:[]
    });
}