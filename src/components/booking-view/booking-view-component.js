
import React, { Component } from 'react';
import {
    View, Text, Image, TextInput, TouchableOpacity, Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from "prop-types";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-community/picker';
import { styles } from './booking-view-style';
import { connect } from 'react-redux';

import { formatDate } from '../../util/util';
import { DATE_TYPE, ROUTES, PAGE_TYPE } from '../../util/constants';
import RetailItem from '../util/retail-item/retail-item-component';
import {
    getSelectedShop,
    getSlotBookingCount,
    getSelectedBookingData
} from '../../redux/slotbook-reducer';
import { fetchBookingDetails, resetSlotBookingCount } from '../../redux/slotbook-actions';
import { FAB } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

class BookingView extends Component {
    constructor(props) {
        super(props);
        let date = new Date();
        this.state = {
            isEdit: true,
            custName: '',
            custMobNo: '',
            purpose: '',
            bookingDate: formatDate(DATE_TYPE.DD_MM_YYYY, date),
            bookingTime: '09:00AM - 10:00AM',
            date: date,
            showDatePicker: false,
            slotBookingCount: -1,
            selectedShop: {},
            selectedBookingData: {},
            pageTitle: ""
        }

        this.showDatePicker = this.showDatePicker.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onBookSlot = this.onBookSlot.bind(this);
        this.onSuccessBook = this.onSuccessBook.bind(this);
        this.onFailureBook = this.onFailureBook.bind(this);
        this.onApprove = this.onApprove.bind(this);
        this.onReject = this.onReject.bind(this);
    }

    onApprove = () => {
        this.props.navigation.navigate(ROUTES.RETAILER_HOME);
    }

    onReject = () => {
        this.props.navigation.navigate(ROUTES.RETAILER_HOME);
    }

    showDatePicker = () => {
        this.setState({ showDatePicker: true })
    }

    onFailureBook = () => {
        this.props.dispatch(resetSlotBookingCount({}));
    }

    onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || this.state.bookingDate;
        this.setState({ bookingDate: formatDate(DATE_TYPE.DD_MM_YYYY, currentDate), showDatePicker: false });
    };

    onBookSlot = () => {
        // if (this.state.custName) {
        //     Alert.alert(
        //         'Success', 'Thanks ' + this.state.custName + ', Slot booked for ' + this.state.bookingDate + ', ' + this.state.bookingTime,
        //         [{ text: 'OK', onPress: () => this.onSuccessBook() }]);
        // }
        this.props.dispatch(fetchBookingDetails({
            bookingDate: this.state.bookingDate,
            bookingTime: this.state.bookingTime,
            retailerCode: this.state.selectedShop.code
        }));
    };

    static getDerivedStateFromProps(props, state) {
        if (state.slotBookingCount !== props.slotBookingCount) {
            return {
                slotBookingCount: props.slotBookingCount,
            };

        }
        if (state.selectedShop !== props.selectedShop) {
            return {
                selectedShop: props.selectedShop,
            };
        }
        if (state.selectedBookingData !== props.selectedBookingData) {
            return {
                selectedBookingData: props.selectedBookingData,
            };
        }

        // Return null to indicate no change to state.
        return null;
    }

    componentDidMount() {
        switch (this.props.route.params.pageType) {

            case PAGE_TYPE.CUSTOMER_BOOKING:
                this.setState({
                    isEdit: true,
                    pageTitle: "Slot Booking "
                });
                break;
            case PAGE_TYPE.CUSTOMER_BOOKING_VIEW:
            case PAGE_TYPE.PENDING_REQUESTS_VIEW:
            case PAGE_TYPE.RETAILER_BOOKING_VIEW:
                this.setState({
                    isEdit: false,
                    pageTitle: "View Booking "
                });
                break;

        }
    }

    completeBookingProcess() {
        if (this.props.slotBookingCount != -1) {
            if (this.props.slotBookingCount < 5) {
                Alert.alert(
                    'Success', 'Thanks ' + this.state.custName + ', Slot booked for ' + this.state.bookingDate + ', ' + this.state.bookingTime,
                    [{ text: 'OK', onPress: () => this.onSuccessBook() }]);
            }
            else {
                Alert.alert(
                    'Failure', 'The specified time and date exceeded the booking count..! Please select different date/time slot',
                    [{ text: 'OK', onPress: () => this.onFailureBook() }]);
            }

        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.slotBookingCount != this.props.slotBookingCount) {
            this.completeBookingProcess();
        }

    }


    onSuccessBook = () => {
        let date = new Date();
        this.setState({
            custName: '',
            custMobNo: '',
            purpose: '',
            bookingDate: formatDate(DATE_TYPE.DD_MM_YYYY, date),
            bookingTime: '09:00AM - 10:00AM',
            showDatePicker: false
        });
        this.props.navigation.navigate(ROUTES.CUSTOMER_HOME);
    };


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.selectedShop}>
                        <RetailItem item={this.props.selectedShop} />
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.bottom}>
                        <View style={styles.formContainer}>
                            <View style={styles.formHeader}>
                                <Text style={styles.formHeaderText}>{this.state.pageTitle} </Text>
                            </View>
                            <Text style={styles.labelText}>Customer Name</Text>
                            {
                                this.state.isEdit ?
                                    <TextInput style={styles.textInput}
                                        placeholder="Enter Customer Name"
                                        style={styles.textInput}
                                        value={this.state.custName}
                                        onChangeText={(val) => this.setState({ custName: val })}
                                    />
                                    :
                                    <View>
                                        <Text style={styles.labelValue}>{this.state.selectedBookingData?.custName}</Text>
                                    </View>

                            }
                            
                            <Text style={styles.labelText}>Contact Number</Text>
                            {
                                this.state.isEdit ?
                                    <TextInput style={styles.textInput}
                                        placeholder="Enter Contact Number"
                                        style={styles.textInput}
                                        value={this.state.custMobNo}
                                        onChangeText={(val) => this.setState({ custMobNo: val })}
                                    />
                                    :
                                    <View>
                                        <Text style={styles.labelValue}>{this.state.selectedBookingData?.custMobNo}</Text>
                                    </View>
                            }
                            <Text style={styles.labelText}>Purpose</Text>
                            {
                                this.state.isEdit ?
                                    <TextInput style={styles.textInput}
                                        placeholder="Enter Purpose"
                                        style={styles.textInput}
                                        value={this.state.purpose}
                                        onChangeText={(val) => this.setState({ purpose: val })}
                                    />
                                    :
                                    <View>
                                        <Text style={styles.labelValue}>{this.state.selectedBookingData?.purpose}</Text>
                                    </View>
                            }

                            <Text style={styles.labelText}>Date</Text>
                            {
                                this.state.isEdit ?
                                    <View>
                                        <TouchableOpacity onPress={() => { this.showDatePicker() }} style={styles.dateIcon}>

                                            <Icon name="calendar" size={30} />
                                        </TouchableOpacity>
                                        <TextInput style={styles.textInput}
                                            placeholder="Select/Type Date"
                                            style={styles.textInput}
                                            value={this.state.bookingDate}
                                            onChangeText={(val) => this.setState({ bookingDate: val })}
                                        />
                                    </View>
                                    :
                                    <View>
                                        <Text style={styles.labelValue}>{this.state.selectedBookingData?.bookingDate}</Text>
                                    </View>
                            }
                            {
                                this.state.showDatePicker &&
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={this.state.date}
                                    is24Hour={true}
                                    display="default"
                                    onChange={this.onDateChange}
                                />
                            }
                            <Text style={styles.labelText}>Booking Time</Text>
                            {
                                this.state.isEdit ?
                                    <Picker
                                        selectedValue={this.state.bookingTime}
                                        style={styles.timePicker}
                                        textStyle={{ fontSize: 22, color: 'yellow' }}
                                        onValueChange={(itemValue, itemIndex) =>
                                            this.setState({ bookingTime: itemValue })
                                        }>
                                        <Picker.Item label="09:00AM - 10:00AM" value="09:00AM - 10:00AM" />
                                        <Picker.Item label="10:00AM - 11:00AM" value="10:00AM - 11:00AM" />
                                        <Picker.Item label="11:00AM - 12:00PM" value="11:00AM - 12:00PM" />
                                        <Picker.Item label="12:00PM - 01:00PM" value="12:00PM - 01:00PM" />
                                        <Picker.Item label="01:00PM - 02:00PM" value="01:00PM - 02:00PM" />
                                        <Picker.Item label="02:00PM - 03:00PM" value="02:00PM - 03:00PM" />
                                        <Picker.Item label="03:00PM - 04:00PM" value="03:00PM - 04:00PM" />
                                        <Picker.Item label="04:00PM - 05:00PM" value="04:00PM - 05:00PM" />
                                    </Picker>
                                    :
                                    <View>
                                        <Text style={styles.labelValue}>{this.state.selectedBookingData?.bookingTime}</Text>
                                    </View>
                            }

                            {
                                !this.state.isEdit && this.props.route.params.pageType != PAGE_TYPE.PENDING_REQUESTS_VIEW &&
                                <View>
                                    <Text style={styles.labelText}>Status</Text>
                                    <View>
                                        <Text style={styles.labelValue}>{this.state.selectedBookingData?.status}</Text>
                                    </View>
                                </View>
                            }


                            {
                                this.state.isEdit &&
                                <TouchableOpacity onPress={() => { this.onBookSlot() }}>
                                    <View style={styles.btnBook}>

                                        <Text style={styles.normalFont}>Book Slot</Text>

                                    </View>
                                </TouchableOpacity>
                            }
                            {
                                this.props.route.params.pageType == PAGE_TYPE.PENDING_REQUESTS_VIEW &&
                                <View style={styles.iconBlock} >
                                    <View style={styles.approveIcon}>
                                        <TouchableOpacity onPress={() => { this.onApprove() }}>
                                            <Icon name="check-square-o" size={50} color="#28a745" />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.cancelIcon}>
                                        <TouchableOpacity onPress={() => { this.onReject() }}>
                                            <Icon name="close" size={50} color="red" />
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            }
                            <View style={styles.padding}>

                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>

        );
    }
}

BookingView.propTypes = {
    retailer: PropTypes.any,
    selectedShop: PropTypes.any,
    navigation: PropTypes.any,
    slotBookingCount: PropTypes.number
}

const storeConnected = connect(
    state => ({
        selectedShop: getSelectedShop(state),
        slotBookingCount: getSlotBookingCount(state),
        selectedBookingData: getSelectedBookingData(state),
    })
);

export default storeConnected(BookingView);