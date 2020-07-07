import React, { Component } from 'react';
import PropTypes from "prop-types";
import {
    View, Text, TouchableOpacity, Image
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { styles } from './retail-item-style';

class RetailItem extends Component {
    constructor(props) {
        super(props);
        this.onItemClick = this.onItemClick.bind(this);
    }

    onItemClick = () => {
        this.props.onItemClick(this.props.item);
    };

    render() {
        console.log('retail- data', this.props.item);
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => { this.onItemClick() }}>
                    <View style={styles.retailItem}>

                        <View style={styles.imageBlock}>
                            <Image style={styles.image}
                                source={{ uri: 'https://via.placeholder.com/80' }} />
                        </View>

                        <View style={styles.textBlock}>
                            <Text style={styles.text1}>{this.props.retailerView ? this.props.item?.custName : this.props.item?.title}</Text>
                            <Text style={styles.text2}>{this.props.item?.value}</Text>
                        </View>

                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

RetailItem.propTypes = {
    item: PropTypes.any,
    onItemClick: PropTypes.func
}


export default RetailItem;