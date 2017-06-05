import * as types from './actionTypes';
import 'es6-promise';
import 'isomorphic-fetch';
import courseApi from '../api/mockTestApi';



export function fetchStuffFromReditt()
{
    let aapp="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

    return function (dispatch) {   // Thunk action creators always return a function that takes dispatcher as argument.

        let tmp="dd";
        fetch(aapp).then((response)=>{

            var tmp = response;
            var d = "dfd";
        });


        return courseApi.getAllCourses().then(objects => {
            dispatch(gotNewStuff(objects));
        }).catch(error => {
            throw(error);
        });
    };
}

export function gotNewStuff(data)
{
    return (
        {
            data:data,
            type:types.GET_RANDOM_REDDIT
        }
    )
}

