import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import thunk from "redux-thunk";
import slotBookReducer from './redux/slotbook-reducer';
import HomeComponent from './components/home/home-component';

const store = createStore(slotBookReducer, applyMiddleware(thunk));

class SlotBooking extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}><HomeComponent /></Provider>
        )
    }
}

export default SlotBooking;