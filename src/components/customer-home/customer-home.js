import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity
} from 'react-native';
import PropTypes from "prop-types";
import { styles } from './customer-home-style';
import { ROUTES, PAGE_TYPE } from './../../util/constants';
import HeaderComponent from './../header/header';
import { getUserDetails } from './../../redux/slotbook-reducer';
import { connect } from 'react-redux';
class CustomerHomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetails: {}
        }
        this.onBookSlot = this.onBookSlot.bind(this);
        this.onViewBooking = this.onViewBooking.bind(this);
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

    onBookSlot() {

        this.props.navigation.navigate(ROUTES.SEARCH_PAGE, { pageType: PAGE_TYPE.RETAILER_DASHBOARD });
    }

    onViewBooking() {
        this.props.navigation.navigate(ROUTES.SEARCH_PAGE, { pageType: PAGE_TYPE.CUSTOMER_BOOKING_DASHBOARD });
        //this.props.navigation.navigate(ROUTES.CUSTOMER_BOOKING_DASHBOARD);
    }

    render() {
        return (
            <View style={styles.container}>
                <HeaderComponent user={this.state.userDetails} />
                <View style={styles.tile}>
                    <TouchableOpacity onPress={() => { this.onBookSlot() }}>

                        <View>
                            <Text style={styles.tileFont}>Book a slot</Text>
                        </View>

                    </TouchableOpacity>
                </View>


                <View style={styles.tile}>
                    <TouchableOpacity onPress={() => { this.onViewBooking() }}>

                        <View>
                            <Text style={styles.tileFont}>View Booking</Text>
                        </View>

                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

CustomerHomeComponent.propTypes = {
    navigation: PropTypes.any
}

const storeConnected = connect(
    state => ({
        userDetails: getUserDetails(state)
    })
);

export default storeConnected(CustomerHomeComponent);
