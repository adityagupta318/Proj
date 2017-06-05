import * as types from './actionTypes';
import 'es6-promise';
import 'isomorphic-fetch';
import courseApi from '../api/mockTestApi';



export function fetchStuffFromReditt()
{
    return function (dispatch) {   // Thunk action creators always return a function that takes dispatcher as argument.

        let tmp="dd";
        fetch("http://finance.google.com/finance/info?client=ig&q=NSE:HDFC").then((response)=>{
            if(response.ok)
            {
                return response.body;
            }
            var tmp = response;
            var d = "dfd";
        }).then(readable => {

            readable.on('data', (chunk) => {
            console.log(`Received ${chunk.length} bytes of data.`);
            });
            readable.on('end', () => {
            console.log('There will be no more data.');
            });
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

function readStuff(data)
{
    data.on('data', function(record) {
    console.log('received: ' + JSON.stringify(record));
    });
    data.on('end', function() {
    console.log('done');
    });
}
