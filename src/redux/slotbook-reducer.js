import { combineReducers } from 'redux';
import { FETCH_RETAILER_LIST } from './slotbook-actions-constants';
import { api_request, api_response, api_error} from './../util/util';

const initialState = {
    retailerList: []
}

const retailerListReducer = (state = initialState.retailerList, { type, payload }) => {
    switch (type) {
        case api_request(FETCH_RETAILER_LIST):            
           return state;
        case api_response(FETCH_RETAILER_LIST):
            console.log('paylaodd', payload)
            return payload;
        case api_error(FETCH_RETAILER_LIST):            
            return payload;
        default:
            return state;
    }
}

export const getRetailerList = state => state.retailerList;

export default combineReducers({
    retailerList: retailerListReducer
});