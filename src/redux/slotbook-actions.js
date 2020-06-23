import axios from 'axios';
import { API_FETCH_RETAILER_LIST } from './../util/api-constants';
import { API_TYPE } from './../util/constants';
import { api_call } from './../util/api.service';
import { FETCH_RETAILER_LIST } from './slotbook-actions-constants';

export function fetchRetailerList() {
    return api_call(FETCH_RETAILER_LIST, API_TYPE.GET, API_FETCH_RETAILER_LIST, {});
}
