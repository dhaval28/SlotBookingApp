import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, TextInput, Dimensions
} from 'react-native';
import PropTypes from "prop-types";

import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import { fetchUserDetails } from './../../redux/slotbook-actions';
import { getUserDetails } from './../../redux/slotbook-reducer';
import { styles } from './login-test-style';
import { ROUTES, USER_TYPE } from './../../util/constants';
import { ELEMENT_HEIGHT } from './../../util/style-constants';

class LoginTestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            userDetails: {},
            loginBtnText: 'Next',
            loginBtnClicked: false,

        }
     
        this.onLoginBtnClick = this.onLoginBtnClick.bind(this);
    }


    onLoginBtnClick = () => {
        if (this.state.username && this.state.password) {
            
            let userType = this.props.userDetails.userType;
            switch(userType){
                case USER_TYPE.CUSTOMER:
                    this.props.navigation.navigate(ROUTES.CUSTOMER_HOME);
                    break;
                case USER_TYPE.RETAILER:
                    this.props.navigation.navigate(ROUTES.RETAILER_HOME);
                    break;
            }
           

        }
        if (this.state.username) {
            this.props.dispatch(fetchUserDetails({
                username: this.state.username
            }));
            this.setState({ loginBtnClicked: true, loginBtnText: 'Login' });
        }

    }

    static getDerivedStateFromProps(props, state) {
        if (state.userDetails !== props.userDetails) {            
            return {
                userDetails: props.userDetails,
            };
        }
        // Return null to indicate no change to state.
        return null;
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Text style={styles.logoText}>SBS</Text>
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.labelText}>Login</Text>
                    <TextInput style={styles.textInput}
                        placeholder="Enter Mobile Number/E-mail ID"
                        style={styles.textInput}
                        onChangeText={(val) => this.setState({ username: val })}
                    />
                    {
                        this.state.loginBtnClicked &&
                        <TextInput style={styles.textInput}
                            placeholder="Password"
                            style={styles.textInput}
                            secureTextEntry={true}
                            onChangeText={(val) => this.setState({ password: val })}
                        />
                    }

                    <TouchableOpacity onPress={() => { this.onLoginBtnClick() }}>
                        <View style={styles.nextBtn}>
                            <Text style={styles.normalFont}>{this.state.loginBtnText}</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.registerBtn}>
                    <View style={styles.regBtn}>

                        <Text style={styles.normalFont}><Icon name="user-o" size={ELEMENT_HEIGHT.ICON} />  Register</Text>

                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}

LoginTestComponent.propTypes = {
    dispatch: PropTypes.func,
    navigation: PropTypes.any,
    userDetails: PropTypes.any
}
const storeConnected = connect(
    state => ({        
        userDetails: getUserDetails(state)
    })
);

export default storeConnected(LoginTestComponent);
