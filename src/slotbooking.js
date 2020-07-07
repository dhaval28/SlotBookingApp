import 'react-native-gesture-handler';
import 'react-native-paper'
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import slotBookReducer from './redux/slotbook-reducer';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginComponent from './components/login/login-component';
import CustomerHomeComponent from './components/customer-home/customer-home';

import RetailerHomeComponent from './components/retailer-home/retailer-home';

import SearchPage from './components/seach-page/search-page-component';
import BookingView from './components/booking-view/booking-view-component';
import { ROUTES } from './util/constants';

import LayoutComponent from './components/layout/layout-componet';
import LoginTestComponent from './components/login-test/login-test';
const store = createStore(slotBookReducer, applyMiddleware(thunk));
const Stack = createStackNavigator();

class SlotBooking extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator>

                        <Stack.Screen
                            name={ROUTES.LOGIN}
                            component={LoginComponent}
                            options={{ headerShown: false }}
                        />

                        {/* <Stack.Screen
                            name={ROUTES.LOGIN}
                            component={LoginComponent}
                            options={{ headerShown: false }}
                        /> */}

                        <Stack.Screen
                            name={ROUTES.CUSTOMER_HOME}
                            component={CustomerHomeComponent}
                            options={{ title: "back", headerShown: false }} />

                        <Stack.Screen
                            name={ROUTES.RETAILER_HOME}
                            component={RetailerHomeComponent}
                            options={{ headerShown: false }}
                        />

                        <Stack.Screen
                            name={ROUTES.SEARCH_PAGE}
                            component={SearchPage}
                            options={{ headerShown: false }}
                        />

                        <Stack.Screen
                            name={ROUTES.BOOKING_VIEW}
                            component={BookingView}
                            options={{ headerShown: false }}
                        />

                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        )
    }
}

export default SlotBooking;