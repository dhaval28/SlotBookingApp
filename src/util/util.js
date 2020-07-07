import { DATE_TYPE } from './constants';
import { Dimensions } from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export function api_request(type) {
    return "REQ_" + type;
}

export function api_response(type) {
    return "RES_" + type;
}

export function api_error(type) {
    return "ERR_" + type;
}

export function get_responsive_fontSize(val) {        
    return height * (val/100);
}

export function get_responsive_radius(val) {    
    console.log("hegiht ", height);
    return height * (val/100);
}

export function get_responsive_height(val) {    
    return height * (val/100);
}

export function get_responsive_width(val) {
    return ((val / width) * 100);
}

export function formatDate(type, date) {
    let dateStr = '';
    switch (type) {
        case DATE_TYPE.DD_MM_YYYY:
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            day = day.toString().length < 2 ? '0' + day : day;
            month = month.toString().length < 2 ? '0' + month : month;
            dateStr = day + '-' + month + '-' + year;
            break;
    }
    return dateStr;
}