import React, { Component } from 'react';
import {
    View, Text, Button
} from 'react-native';
import { styles } from './request-details-style';

class RequestDetailsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <View>
                <View style={styles.titleWrapper}>
                    <Text style={{ fontSize: 28, color: 'darkblue' }}>Request Details</Text>
                </View>
                <View style={{ padding: 20 }}>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 18 }}>Customer Name:</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: 'right', fontSize: 18 }}>Dhaval Petiwala</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 18 }}>Mobile No.:</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: 'right', fontSize: 18 }}>+91 9999988888</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 18 }}>Purpose:</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: 'right', fontSize: 18 }}>To buy Formals</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 18 }}>Date:</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: 'right', fontSize: 18 }}>11/07/2020</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 18 }}>Time slot:</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: 'right', fontSize: 18 }}>1:00 PM - 2:00 PM</Text>
                        </View>
                    </View>
                    {/* <View style={{ flex: 1, flexDirection: 'row', padding: 50 }}>
                        <View style={{ marginLeft: 70 }}>
                            <Button title='  re-schedule  '></Button>
                        </View>
                    </View> */}
                    <View style={{ flex: 1, flexDirection: 'row', padding: 50 }}>
                        <Button color='green' title='  approve  '></Button>
                        <View style={{ marginLeft: 90 }}>
                            <Button color='red' title='  reject  '></Button>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default RequestDetailsComponent;
