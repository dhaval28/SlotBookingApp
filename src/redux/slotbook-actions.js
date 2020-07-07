import axios from 'axios';
import { 
    API_FETCH_RETAILER_LIST,
    API_FETCH_USER_DETAILS, 
    API_FETCH_BOOKING_DETAILS,
    API_FETCH_BOOKING_DATA,
 } from './../util/api-constants';
import { API_TYPE, PAGE_TYPE } from './../util/constants';
import { api_call } from './../util/api.service';
import {
    FETCH_USER_DETAILS,
    FETCH_RETAILER_LIST,
    FETCH_BOOKING_DETAILS,
    FETCH_BOOKING_DATA_LIST,
    FETCH_RETAILER_BOOKING_DATA_LIST,
    FETCH_PENDING_REQUESTS,
    RESET_SLOT_BOOKING_COUNT,
    SET_SELECTED_SHOP,
    SET_SELECTED_BOOKING_DATA
} from './slotbook-actions-constants';

export function fetchDataList(body, type){
    switch(type){
        case PAGE_TYPE.RETAILER_DASHBOARD:
            return api_call(FETCH_RETAILER_LIST, API_TYPE.GET, API_FETCH_RETAILER_LIST , body);
        case PAGE_TYPE.CUSTOMER_BOOKING_DASHBOARD:
            return api_call(FETCH_BOOKING_DATA_LIST, API_TYPE.GET, API_FETCH_BOOKING_DATA, body);
        case PAGE_TYPE.RETAILER_VIEW_BOOKINGS:
            return api_call(FETCH_RETAILER_BOOKING_DATA_LIST, API_TYPE.GET, API_FETCH_BOOKING_DATA, body);
        case PAGE_TYPE.PENDING_REQUESTS:
            return api_call(FETCH_PENDING_REQUESTS, API_TYPE.GET, API_FETCH_BOOKING_DATA, body);

    }
}

export function fetchUserDetails(body) {
    return api_call(FETCH_USER_DETAILS, API_TYPE.GET, API_FETCH_USER_DETAILS, body);
}

export function fetchRetailerList(body) {
    return api_call(FETCH_RETAILER_LIST, API_TYPE.GET, API_FETCH_RETAILER_LIST , body);
}

export function fetchBookingDetails(body) {
    return api_call(FETCH_BOOKING_DETAILS, API_TYPE.GET, API_FETCH_BOOKING_DETAILS, body);
}

export function fetchBookingData(body) {
    return api_call(FETCH_BOOKING_DATA_LIST, API_TYPE.GET, API_FETCH_BOOKING_DATA, body);
}

export function fetchRetailerBookingData(body) {
    return api_call(FETCH_RETAILER_BOOKING_DATA_LIST, API_TYPE.GET, API_FETCH_BOOKING_DATA, body);
}

export function fetchPendingRequests(body) {
    return api_call(FETCH_PENDING_REQUESTS, API_TYPE.GET, API_FETCH_BOOKING_DATA, body);
}

export const setSelectedShop = (payload) => ({
    type: SET_SELECTED_SHOP,
    payload
});

export const setSelectedBookingData = (payload) => ({
    type: SET_SELECTED_BOOKING_DATA,
    payload
});

export const resetSlotBookingCount = (payload) => ({
    type: RESET_SLOT_BOOKING_COUNT,
    payload
});

