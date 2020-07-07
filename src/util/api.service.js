import axios from 'axios';
import { API_TYPE, REQUEST_STATUS } from './constants';
import {
    API_GLOBAL_BASE_URL
} from './api-constants';
import { api_request, api_response, api_error } from './util';
import { 
    FETCH_USER_DETAILS, 
    FETCH_RETAILER_LIST, 
    FETCH_BOOKING_DETAILS,
    FETCH_BOOKING_DATA_LIST,
    FETCH_RETAILER_BOOKING_DATA_LIST,
    FETCH_PENDING_REQUESTS
 } from './../redux/slotbook-actions-constants';


axios.defaults.baseURL = API_GLOBAL_BASE_URL;

export function api_call(actionType, type, url, body) {
    switch (type) {
        case API_TYPE.GET:
            return get(actionType, url, body);

    }
}

function get(actionType, url, body) {    
    return function (dispatch) {
        dispatch(API_REQUEST(actionType, {}));
        return axios.get(url)
            .then((response) => {                
                let data = response.data.data;
                data = processRequest(actionType, data, body);
                dispatch(API_RESPONSE(actionType, data));
            }).catch((err) => {
                console.log("error", err);
                dispatch(API_ERROR(actionType, err));
            })
    };
}

function processRequest(actionType, data, body) {
    let result;
    switch (actionType) {
        case FETCH_USER_DETAILS:
            result = data.filter(itm => itm.username == body.username);            
            return result.length > 0 ? result[0] : {};
        case FETCH_RETAILER_LIST:
            return data;
        case FETCH_BOOKING_DETAILS:            
            result = data.filter(itm => itm.retailerCode == body.retailerCode);            
            let obj = result[0].value[body.bookingDate];          
            return obj[body.bookingTime].count;
        case FETCH_BOOKING_DATA_LIST:
            return data.filter(itm => itm.username == body.username);
        case FETCH_RETAILER_BOOKING_DATA_LIST:
            return data.filter(itm => itm.retailerCode == body.username && itm.status === REQUEST_STATUS.APPROVED);
        case FETCH_PENDING_REQUESTS:
            return data.filter(itm => itm.retailerCode == body.username && itm.status === REQUEST_STATUS.PENDING);
    }
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