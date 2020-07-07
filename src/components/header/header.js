import React, { Component } from 'react';
import {
    View, Text, Image
} from 'react-native';
import PropTypes from "prop-types";
import { styles } from './header-style';
import { avatar } from './../../util/icons';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <View style={styles.header}>
                <Image source={avatar} style={styles.avatar} />
                <View style={styles.username}>
                    <Text style={styles.usernameText}>{this.props.user?.displayName} </Text>
                </View>
                <View style={styles.usertype}>
                    <Text style={styles.usertypeText}>{this.props.user?.userType}</Text>
                </View>
            </View>
        );
    }
}

HeaderComponent.propTypes = {
    user: PropTypes.any
}

export default HeaderComponent;
