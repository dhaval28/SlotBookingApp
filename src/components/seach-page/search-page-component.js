import React, { Component } from 'react';
import PropTypes from "prop-types";
import {
    View, ScrollView, TextInput, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { getDataList, getUserDetails } from './../../redux/slotbook-reducer';
import { fetchDataList, setSelectedShop, setSelectedBookingData } from './../../redux/slotbook-actions';
import RetailItem from './../util/retail-item/retail-item-component';

import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './search-page-style';
import { ROUTES, PAGE_TYPE } from './../../util/constants';
import { COLOR, ELEMENT_HEIGHT } from './../../util/style-constants';

class SearchPage extends Component {
    constructor(props) {

        super(props);

        this.state = {
            dataList: props.dataList,
            keyTitle: "title",
            keyValue: "value",
            userDetails: props.userDetails,
            onSearch: false
        }
        this.onItemClick = this.onItemClick.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    onItemClick = (item) => {
        switch (this.props.route.params.pageType) {
            case PAGE_TYPE.RETAILER_DASHBOARD:
                this.props.dispatch(setSelectedShop(item));
                this.props.navigation.navigate(ROUTES.BOOKING_VIEW, { pageType: PAGE_TYPE.CUSTOMER_BOOKING });
                break;
            case PAGE_TYPE.CUSTOMER_BOOKING_DASHBOARD:
                this.props.dispatch(setSelectedBookingData(item));
                this.props.dispatch(setSelectedShop(item));
                this.props.navigation.navigate(ROUTES.BOOKING_VIEW, { pageType: PAGE_TYPE.CUSTOMER_BOOKING_VIEW });
                break;
            case PAGE_TYPE.PENDING_REQUESTS:
                this.props.dispatch(setSelectedBookingData(item));
                this.props.dispatch(setSelectedShop(item));
                this.props.navigation.navigate(ROUTES.BOOKING_VIEW, { pageType: PAGE_TYPE.PENDING_REQUESTS_VIEW });
                break;
            case PAGE_TYPE.RETAILER_VIEW_BOOKINGS:
                this.props.dispatch(setSelectedBookingData(item));
                this.props.dispatch(setSelectedShop(item));
                this.props.navigation.navigate(ROUTES.BOOKING_VIEW, { pageType: PAGE_TYPE.RETAILER_BOOKING_VIEW });
                break;

        }
    }

    onSearch(val) {
        let data = this.props.dataList.filter(item => item[this.state.keyTitle].toLowerCase().includes(val.toLowerCase()));
        this.setState({ dataList: data, onSearch: true });
    }

    componentDidMount() {
        switch (this.props.route.params.pageType) {
            case PAGE_TYPE.RETAILER_DASHBOARD:
                this.setState({
                    keyTitle: "key",
                    keyValue: "address"
                });
                break;
            case PAGE_TYPE.CUSTOMER_BOOKING_DASHBOARD:
                this.setState({
                    keyTitle: "shopName",
                    keyValue: "bookingDate"
                });
                break;
            case PAGE_TYPE.RETAILER_VIEW_BOOKINGS:
            case PAGE_TYPE.PENDING_REQUESTS:
                this.setState({
                    keyTitle: "custName",
                    keyValue: "bookingDate"
                });
                break;

        }
        this.props.dispatch(fetchDataList(this.props.userDetails, this.props.route.params.pageType));
    }

    static getDerivedStateFromProps(props, state) {

        if (props.dataList !== state.dataList && !state.onSearch) {

            return {
                dataList: props.dataList
            };
        }
        if (state.userDetails !== props.userDetails) {
            return {
                userDetails: props.userDetails,
            };
        }

        // Return null to indicate no change to state.
        return null;
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <View>
                        <TouchableOpacity style={styles.searchIcon}>
                            <Icon name="search" size={ELEMENT_HEIGHT.ICON} color={COLOR.CMN_THEME_INNER_FONT} />
                        </TouchableOpacity>

                        <TextInput style={styles.textInput}
                            placeholder="Search Here"
                            style={styles.textInput}
                            onChangeText={(val) => this.onSearch(val)}
                        />
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.bottom}>
                        {
                            this.state.dataList &&
                            this.state.dataList.map((val, index) => (
                                <View style={styles.bottomItem} key={index}>
                                    <RetailItem item={{
                                        ...val,
                                        title: val[this.state.keyTitle],
                                        value: val[this.state.keyValue]
                                    }} onItemClick={this.onItemClick} />
                                </View>
                            ))
                        }


                    </View>
                </ScrollView>

            </View>

        );
    }
}

SearchPage.propTypes = {
    dispatch: PropTypes.func,
    dataList: PropTypes.any,
    userDetails: PropTypes.any,
    navigation: PropTypes.any,

}
const storeConnected = connect(
    state => ({
        userDetails: getUserDetails(state),
        dataList: getDataList(state)
    })
);

export default storeConnected(SearchPage);