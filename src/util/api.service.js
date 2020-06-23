import axios from 'axios';
import { API_TYPE } from './constants';
import { API_GLOBAL_BASE_URL} from './api-constants';
import { api_request, api_response, api_error} from './util';


axios.defaults.baseURL = API_GLOBAL_BASE_URL;

export function api_call(actionType, type, url, body){
    switch(type){
        case API_TYPE.GET:
            return get(actionType, url);
            
    }
}

function get(actionType, url){
    return function (dispatch) {
        console.log('apii called')
        dispatch(API_REQUEST(actionType, {}));
        return axios.get(url)
            .then((response) => {                
                console.log('response')
                console.log(response)
                dispatch(API_RESPONSE(actionType, response.data.data));
            }).catch((err) => {
                console.log('error came')
               dispatch(API_ERROR(actionType, err));
            })
    };
}

const API_REQUEST = (actionType, payload) => ({
    type: api_request(actionType),
    payload
});

const API_RESPONSE = (actionType, payload) => ({
    type: api_response(actionType),
    payload
});

const API_ERROR = (actionType, payload) => ({
    type: api_error(actionType),
    payload
});