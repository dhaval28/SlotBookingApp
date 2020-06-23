import React, { Component } from 'react';
import {
    View, Text, TouchableHighlight
} from 'react-native';
import { styles } from './retailer-requests-style';
import { REQUEST_TYPE } from './../../../util/constants'
import { List } from 'react-native-paper'
import RequestDetailsComponent from './request-details/request-details'

class RetailerRequestsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestType: '',
            showRequestDetails: false
        }
    }

    render() {
        const requestList = <View>
            <List.Section>
                <List.Subheader style={{ backgroundColor: this.state.requestType === REQUEST_TYPE.PENDING ? 'yellow' : 'green', fontSize: 18 }}>
                    {this.state.requestType === REQUEST_TYPE.PENDING ? 'Pending Requests' : 'Confirmed Requests'}</List.Subheader>
                <List.Item
                    title="Dhaval Petiwala - 11/07/2020"
                    onPress={() => {this.setState({showRequestDetails: true})}}
                    left={() => <List.Icon icon="folder" />}
                />
                <List.Item
                    title="Customer 2 - 12/07/2020"
                    onPress={() => {this.setState({showRequestDetails: true})}}
                    left={() => <List.Icon icon="folder" />}
                />
                <List.Item
                    title="Customer 3 - 13/07/2020"
                    onPress={() => {this.setState({showRequestDetails: true})}}
                    left={() => <List.Icon icon="folder" />}
                />
            </List.Section>
        </View>
        return (
            <View>
                {!this.state.requestType && !this.state.showRequestDetails && <View>
                    <TouchableHighlight onPress={() => { this.setState({ requestType: REQUEST_TYPE.PENDING }) }}>
                        <View style={{ height: 80, padding: 20, backgroundColor: 'black', flex: 1, flexDirection: 'row' }}>
                            <Text style={{ fontSize: 25, color: 'yellow' }}>Pending Requests</Text>
                            <Text style={{ color: 'red', fontSize: 20, marginLeft: 15, marginTop: 4 }}>(3)  <Text>&#10140;</Text></Text>
                        </View>
                    </TouchableHighlight>

                    <Text>{'\n'}</Text>
                    <TouchableHighlight onPress={() => { this.setState({ requestType: REQUEST_TYPE.CONFIRMED }) }}>
                        <View style={{ height: 80, padding: 20, backgroundColor: 'black', flex: 1, flexDirection: 'row' }}>
                            <Text style={{ fontSize: 25, color: 'green' }}>Confirmed Requests</Text>
                            <Text style={{ color: 'white', fontSize: 20, marginLeft: 15, marginTop: 4 }}>(3)  <Text>&#10140;</Text></Text>
                        </View>
                    </TouchableHighlight>
                </View>}

                {this.state.requestType === REQUEST_TYPE.PENDING && !this.state.showRequestDetails && requestList}
                {this.state.requestType === REQUEST_TYPE.CONFIRMED && !this.state.showRequestDetails && requestList}

                {this.state.showRequestDetails && <RequestDetailsComponent props={this.state.requestType} />}
            </View>

        );
    }
}

export default RetailerRequestsComponent;
