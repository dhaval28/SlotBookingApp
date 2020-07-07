import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity
} from 'react-native';
import PropTypes from "prop-types";
import { getUserDetails } from './../../redux/slotbook-reducer';
import { styles } from './retailer-home-style';
import { ROUTES, PAGE_TYPE } from './../../util/constants';
import { connect } from 'react-redux';
import HeaderComponent from './../header/header';

class HomeComponent extends Component {
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


        if (state.userDetails !== props.userDetails) {
            return {
                userDetails: props.userDetails,
            };
        }

        // Return null to indicate no change to state.
        return null;
    }

    onBookSlotForCust() {
        console.log("Book a slot");
    }

    onViewBooking() {
        console.log("View Bookings");
        //this.props.navigation.navigate(ROUTES.RETAILER_VIEW_BOOKINGS, { pendingFlag: false });
        this.props.navigation.navigate(ROUTES.SEARCH_PAGE, { pageType: PAGE_TYPE.RETAILER_VIEW_BOOKINGS });
    }

    onViewPending() {
        console.log("View Pending");
        //this.props.navigation.navigate(ROUTES.RETAILER_VIEW_BOOKINGS, { pendingFlag: true });
        this.props.navigation.navigate(ROUTES.SEARCH_PAGE, { pageType: PAGE_TYPE.PENDING_REQUESTS });
    }

    render() {
        return (
            <View style={styles.container}>

                <HeaderComponent user={this.state.userDetails} />
                <View style={styles.tileContainer}>
                    
                </View>
                <View style={styles.tile}>
                    <TouchableOpacity onPress={() => { this.onViewPending() }}>

                        <View>
                            <Text style={styles.tileFont}>Pending Requests</Text>
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
    navigation: PropTypes.any
}

const storeConnected = connect(
    state => ({
        userDetails: getUserDetails(state)
    })
);

export default storeConnected(RetailerHomeComponent);
