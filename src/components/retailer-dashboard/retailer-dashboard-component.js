import React, { Component } from 'react';
import PropTypes from "prop-types";
import {
    FlatList, TouchableHighlight, View, Image, Text
} from 'react-native';
import { connect } from 'react-redux';
import { getRetailerList } from './../../redux/slotbook-reducer';
import { fetchRetailerList } from './../../redux/slotbook-actions';
class RetailerDashboardComponent extends Component {
    constructor(props) {

        super(props);

        this.state = {
            retailerList: props.retailerList
        }

        this.onClickPlace = this.onClickPlace.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(fetchRetailerList({}));
    }

    static getDerivedStateFromProps(props, state) {
        if (props.retailerList !== state.retailerList) {
            return {
                retailerList: props.retailerList,
            };
        }

        // Return null to indicate no change to state.
        return null;
    }

    onClickPlace = (item) => {
        this.props.onShopSelect(item);
    }

    renderItem = ({ item }) => {
        return (
            <TouchableHighlight onPress={() => this.onClickPlace(item)}>
                <View style={{ flex: 1, flexDirection: 'row', marginBottom: 3 }}>
                    <Image style={{ width: 80, height: 80, margin: 3 }}
                        source={{ uri: 'https://via.placeholder.com/80' }} />
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 18, color: 'green', marginBottom: 15 }}>
                            {item.key}
                        </Text>
                        <Text style={{ fontSize: 15, color: 'red' }}>
                            {item.address}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    };

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.retailerList}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={this.renderSeparator}
                />
            </View>

        );
    }
}

RetailerDashboardComponent.propTypes = {
    dispatch: PropTypes.func,
    retailerList: PropTypes.any,
    onShopSelect: PropTypes.func,
}
const storeConnected = connect(
    state => ({
        retailerList: getRetailerList(state)
    })
);

export default storeConnected(RetailerDashboardComponent);