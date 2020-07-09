import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity
} from 'react-native';
import PropTypes from "prop-types";
import { getUserDetails } from './../../redux/slotbook-reducer';
import { setSelectedShop } from './../../redux/slotbook-actions';
import { styles } from './retailer-home-style';
import { ROUTES, PAGE_TYPE } from './../../util/constants';
import { connect } from 'react-redux';
import HeaderComponent from './../header/header';

class RetailerHomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slotBookingScreen: false,
            retailer: {}
        }
        this.onBookSlotForCust = this.onBookSlotForCust.bind(this);
        this.onViewBooking = this.onViewBooking.bind(this);
        this.onViewPending = this.onViewPending.bind(this);
    }

    static getDerivedStateFromProps(props, state) {


        if (state.userDetails !== props.userDetails.data) {
            return {
                userDetails: props.userDetails.data,
            };
        }

        // Return null to indicate no change to state.
        return null;
    }

    onBookSlotForCust() {
        
        this.props.dispatch(setSelectedShop({
            title: this.props.userDetails.data.shopName,
            value: this.props.userDetails.data.shopAddress,
            code: this.props.userDetails.data.username
        }));
                
        this.props.navigation.navigate(ROUTES.BOOKING_VIEW, { pageType: PAGE_TYPE.CUSTOMER_BOOKING });
    }

    onViewBooking() {       
        this.props.navigation.navigate(ROUTES.SEARCH_PAGE, { pageType: PAGE_TYPE.RETAILER_VIEW_BOOKINGS });
    }

    onViewPending() {        
        this.props.navigation.navigate(ROUTES.SEARCH_PAGE, { pageType: PAGE_TYPE.PENDING_REQUESTS });
    }

    render() {
        return (
            <View style={styles.container}>

                <HeaderComponent user={this.state.userDetails} />

                <View style={styles.tile}>
                    <TouchableOpacity onPress={() => { this.onViewPending() }}>

                        <View>
                            <Text style={styles.tileFont}>Approve Bookings</Text>
                        </View>

                    </TouchableOpacity>
                </View>
                <View style={styles.tile}>
                    <TouchableOpacity onPress={() => { this.onViewBooking() }}>

                        <View>
                            <Text style={styles.tileFont}>View Bookings</Text>
                        </View>

                    </TouchableOpacity>
                </View>
                <View style={styles.tile}>
                    <TouchableOpacity onPress={() => { this.onBookSlotForCust() }}>

                        <View>
                            <Text style={styles.tileFont}>Book a slot</Text>
                        </View>

                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

RetailerHomeComponent.propTypes = {
    dispatch: PropTypes.func,
    navigation: PropTypes.any
}

const storeConnected = connect(
    state => ({
        userDetails: getUserDetails(state)
    })
);

export default storeConnected(RetailerHomeComponent);
