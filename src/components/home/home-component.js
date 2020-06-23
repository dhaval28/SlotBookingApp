import React, { Component } from 'react';
import {
    View, Text, Image, TouchableHighlight
} from 'react-native';
import HeaderComponent from './../header/header'
import { styles } from './home-style';
import { ret_logo, cust_logo } from './../../util/icons'
import { USER_TYPE } from './../../util/constants'
import CustomerHomeComponent from './../customer-home/customer-home'
import RetailerHomeComponent from './../retailer-home/retailer-home'

class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userType: '',
            showHome: true
        }
    }

    userTypeSelected = (user) => {
        this.setState({ userType: user, showHome: false });
    }

    render() {
        return (
            <View>
                <HeaderComponent />
                {this.state.showHome && <View><TouchableHighlight style={styles.loginBox} onPress={this.userTypeSelected.bind(this, USER_TYPE.RETAILER)}>
                    <View>
                        <Image style={{ width: 140, height: 140, margin: 3 }}
                            source={ret_logo} />
                        <Text style={{ fontSize: 20 }}>Retailer Login</Text>
                    </View>
                </TouchableHighlight>
                    <TouchableHighlight style={styles.loginBox} onPress={this.userTypeSelected.bind(this, USER_TYPE.CUSTOMER)}>
                        <View>
                            <Image style={{ width: 140, height: 140, margin: 3 }}
                                source={cust_logo} />
                            <Text style={{ fontSize: 20 }}>Customer Login</Text>
                        </View>
                    </TouchableHighlight></View>}

                {this.state.userType === USER_TYPE.CUSTOMER && <CustomerHomeComponent />}
                {this.state.userType === USER_TYPE.RETAILER && <RetailerHomeComponent />}
            </View>


        );
    }
}

export default HomeComponent;
