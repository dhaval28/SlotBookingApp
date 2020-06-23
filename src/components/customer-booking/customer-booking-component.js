
import React, { Component } from 'react';
import {
    View, Text, Image, TextInput, TouchableHighlight, Button, Alert, DatePickerAndroid
} from 'react-native';
import PropTypes from "prop-types";

import { styles } from './customer-booking-style';


class CustomerBookingComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            custName: '',
            custMobNo: '',
            purpose: '',
            bookingDate: '',
            bookingTime: ''
        }
    }

    openUpPicker = async () => {
        try {
            const { action, year, month, day } = await DatePickerAndroid.open({
                date: new Date(),
                minDate: new Date(),
                mode: 'calendar'
            });
            if (action == DatePickerAndroid.dateSetAction) {
                // Selected year, month (0-11), day
                this.setState({ bookingDate: `${day}/${month + 1}/${year}` });
            }
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }
    }

    timeSelected = (slot) => {
        this.setState({ bookingTime: slot })
    }

    onBook = () => {
        if (this.state.custName) {
            Alert.alert('Thanks ' + this.state.custName + ', Slot booked for ' + this.state.bookingDate + ', ' + this.state.bookingTime);
            this.setState({ slotBookingScreen: false })
        }
    }



    render() {
        return (
            <View>
                <View style={{ padding: 10, flex: 1, flexDirection: 'row' }}>
                    <Image style={{ width: 80, height: 80, margin: 3 }}
                        source={{ uri: 'https://via.placeholder.com/80' }} />
                    <View>
                        <Text style={{ fontSize: 25 }}>
                            {this.props.retailer?.key}
                        </Text>
                        <Text style={{ fontSize: 20 }}>
                            {this.props.retailer?.address}
                        </Text>
                    </View>
                </View>
                <View style={styles.titleWrapper}>
                    <Text style={{ fontSize: 20, color: 'red' }}>Slot Booking</Text>
                </View>
                <View style={styles.bookingDetails}>
                    <Text style={{ fontSize: 20 }}>Cutomer Name:</Text>
                </View>
                <View style={styles.bookingDetails}>
                    <TextInput style={styles.input} underlineColorAndroid="transparent"
                        autoCapitalize='words'
                        onChangeText={(val) => this.setState({ custName: val })}
                        value={this.state.custName}></TextInput>
                </View>
                <View style={styles.bookingDetails}>
                    <Text style={{ fontSize: 20 }}>Contact Number:</Text>
                </View>
                <View style={styles.bookingDetails}>
                    <TextInput style={styles.input} underlineColorAndroid="transparent"
                        keyboardType='numeric'
                        onChangeText={(val) => this.setState({ custMobNo: val })}
                        value={this.state.custMobNo}
                    ></TextInput>
                </View>
                <View style={styles.bookingDetails}>
                    <Text style={{ fontSize: 20 }}>Purpose:</Text>
                </View>
                <View style={styles.bookingDetails}>
                    <TextInput style={styles.input} underlineColorAndroid="transparent"
                        autoCapitalize='words'
                        onChangeText={(val) => this.setState({ purpose: val })}
                        value={this.state.purpose}
                    ></TextInput>
                </View>

                <View style={styles.bookingDetails}>
                    <Text style={{ fontSize: 20 }}>Date: {this.state.bookingDate}</Text>
                </View>
                <View style={styles.titleWrapper}>
                    <Button onPress={this.openUpPicker} title='Select a date'></Button>
                </View>
                {'\n'}
                <Button title='Book Slot' onPress={this.onBook.bind(this)}></Button>
            </View>

        );
    }
}

CustomerBookingComponent.propTypes = {
    retailer: PropTypes.any,
}

export default CustomerBookingComponent;