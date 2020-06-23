import React, { Component } from 'react';
import {
    View, Text
} from 'react-native';
import { styles } from './header-style';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <View style={styles.titleWrapper}>
                <Text style={styles.appTitle}>SLOT MANAGEMENT APP</Text>
            </View>
        );
    }
}

export default HeaderComponent;
