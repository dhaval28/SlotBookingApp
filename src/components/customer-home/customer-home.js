import React, { Component } from 'react';
import {
    View, Text, Image, TouchableHighlight, ScrollView
} from 'react-native';
import RetailerDashboardComponent from './../retailer-dashboard/retailer-dashboard-component';
import CustomerBookingComponent from './../customer-booking/customer-booking-component';
import { styles } from './customer-home-style';

class CustomerHomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slotBookingScreen: false,
            retailer: {}
        }
        this.onShopSelect = this.onShopSelect.bind(this);
    }

    onShopSelect(data) {
        this.setState({
            slotBookingScreen: true,
            retailer: data
        });
    }

    render() {
        return (
            <View>
                {
                    !this.state.slotBookingScreen ?
                        <View><RetailerDashboardComponent onShopSelect={this.onShopSelect} /></View> :
                        <ScrollView style={styles.wrapper}>
                            <CustomerBookingComponent retailer={this.state.retailer} />
                        </ScrollView>
                }
            </View>
        );
    }
}

export default CustomerHomeComponent;
