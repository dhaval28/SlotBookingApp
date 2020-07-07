import { combineReducers } from 'redux';
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
import { api_request, api_response, api_error } from './../util/util';

const initialState = {
    userDetails: {},
    retailerList: [],
    bookingDataList: [],
    selectedShop: {},
    slotBookingCount: -1,
    selectedBookingData: {},
    searchData: []
}

const userDetailsReducer = (state = initialState.userDetails, { type, payload }) => {
    switch (type) {
        case api_request(FETCH_USER_DETAILS):
            // return state;
            return { loading: true };
        case api_response(FETCH_USER_DETAILS):
            console.log("success", payload);
            return { loading: false, data: payload };
        case api_error(FETCH_USER_DETAILS):
            return payload;
        default:
            return state;
    }
}

const searchDataReducer = (state = initialState.searchData, { type, payload }) => {
    switch (type) {
        case api_request(FETCH_RETAILER_LIST):
            return { loading: true };
        case api_response(FETCH_RETAILER_LIST):
            return { loading: false, data: payload };
        case api_error(FETCH_RETAILER_LIST):
            return payload;
        case api_request(FETCH_BOOKING_DATA_LIST):
            return { loading: true };
        case api_response(FETCH_BOOKING_DATA_LIST):
            return { loading: false, data: payload };
        case api_error(FETCH_BOOKING_DATA_LIST):
            return payload;
        case api_request(FETCH_RETAILER_BOOKING_DATA_LIST):
            return { loading: true };
        case api_response(FETCH_RETAILER_BOOKING_DATA_LIST):
            return { loading: false, data: payload };
        case api_error(FETCH_RETAILER_BOOKING_DATA_LIST):
            return payload;
        case api_request(FETCH_PENDING_REQUESTS):
            return { loading: true };
        case api_response(FETCH_PENDING_REQUESTS):
            return { loading: false, data: payload };
        case api_error(FETCH_PENDING_REQUESTS):
            return payload;
        default:
            return state;
    }
}

const retailerListReducer = (state = initialState.retailerList, { type, payload }) => {
    switch (type) {
        case api_request(FETCH_RETAILER_LIST):
            return state;
        case api_response(FETCH_RETAILER_LIST):

            return payload;
        case api_error(FETCH_RETAILER_LIST):
            return payload;
        default:
            return state;
    }
}

const bookingDetailsReducer = (state = initialState.slotBookingCount, { type, payload }) => {
    switch (type) {
        case api_request(FETCH_BOOKING_DETAILS):
            return state;
        case api_response(FETCH_BOOKING_DETAILS):
            return payload;
        case api_error(FETCH_BOOKING_DETAILS):
            return payload;
        case RESET_SLOT_BOOKING_COUNT:
            return -1;
        default:
            return state;
    }
}

const bookingDataListReducer = (state = initialState.bookingDataList, { type, payload }) => {
    switch (type) {
        case api_request(FETCH_BOOKING_DATA_LIST):
            return state;
        case api_response(FETCH_BOOKING_DATA_LIST):
            return payload;
        case api_error(FETCH_BOOKING_DATA_LIST):
            return payload;
        case api_request(FETCH_RETAILER_BOOKING_DATA_LIST):
            return state;
        case api_response(FETCH_RETAILER_BOOKING_DATA_LIST):
            return payload;
        case api_error(FETCH_RETAILER_BOOKING_DATA_LIST):
            return payload;
        case api_request(FETCH_PENDING_REQUESTS):
            return state;
        case api_response(FETCH_PENDING_REQUESTS):
            return payload;
        case api_error(FETCH_PENDING_REQUESTS):
            return payload;

        default:
            return state;
    }
}



const selectedShopReducer = (state = initialState.selectedShop, { type, payload }) => {

    switch (type) {
        case SET_SELECTED_SHOP:
            console.log("shop success", payload);
            return payload;
        default:
            return state;
    }
}

const selectedBookingDataReducer = (state = initialState.selectedBookingData, { type, payload }) => {

    switch (type) {
        case SET_SELECTED_BOOKING_DATA:
            return payload;
        default:
            return state;
    }
}



export const getRetailerList = state => state.retailerList;
export const getSelectedShop = state => state.selectedShop;
export const getUserDetails = state => state.userDetails;
export const getSlotBookingCount = state => state.slotBookingCount;
export const getBookingDataList = state => state.bookingDataList;
export const getSelectedBookingData = state => state.selectedBookingData;

export const getDataList = state => state.searchData;

export default combineReducers({
    userDetails: userDetailsReducer,
    retailerList: retailerListReducer,
    slotBookingCount: bookingDetailsReducer,
    bookingDataList: bookingDataListReducer,
    selectedShop: selectedShopReducer,
    selectedBookingData: selectedBookingDataReducer,
    searchData: searchDataReducer
});