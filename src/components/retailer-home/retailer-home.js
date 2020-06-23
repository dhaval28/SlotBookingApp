import React, { Component } from 'react';
import {
    View, Text, Button, ScrollView
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { styles } from './retailer-home-style';
import RetailerRequestsComponent from './retailer-requests/retailer-requests'

class RetailerHomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            retailerOutletSelected: 'first',
            outletSelected: false
        }
    }

    onProceed = () => {
        this.setState({ outletSelected: true })
    }

    render() {
        return (
            <View>
                <ScrollView>
                    <View style={styles.titleWrapper}>
                        <Text style={{ fontSize: 28, color: 'green' }}>Welcome Ret_Pantaloons</Text>
                    </View>
                    {!this.state.outletSelected ? <View style={{ padding: 10, }}>
                        <Text style={{ fontSize: 24 }}>Select an Outlet:</Text>

                        <RadioButton.Group
                            onValueChange={value => this.setState({ retailerOutletSelected: value })}
                            value={this.state.retailerOutletSelected}
                        >
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <RadioButton value="first" />
                                <Text style={{ marginTop: 4, fontSize: 20 }}>Pantaloons, Koromangala</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <RadioButton value="second" />
                                <Text style={{ marginTop: 4, fontSize: 20 }}>Pantaloons, E-City</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <RadioButton value="third" />
                                <Text style={{ marginTop: 4, fontSize: 20 }}>Pantaloons, White Field</Text>
                            </View>
                        </RadioButton.Group>
                        <Text>{"\n"}</Text>
                        <View style={styles.titleWrapper}>
                            <Button onPress={() => this.setState({ outletSelected: true })} title='Proceed'></Button>
                        </View>
                    </View> : <RetailerRequestsComponent />}
                </ScrollView>

            </View>

        );
    }
}

export default RetailerHomeComponent;
