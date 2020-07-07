import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './layout-style';
import RetailItem from './../util/retail-item/retail-item-component';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLOR} from './../../util/style-constants';

class LayoutComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <View style={styles.container}>
                <View style={styles.top}>
                    <View>
                        <TouchableOpacity style={styles.searchIcon}>
                            <Icon name="search" size={30} color={COLOR.CMN_THEME_INNER_FONT}/>
                        </TouchableOpacity>

                        <TextInput style={styles.textInput}
                            placeholder="Search Here"
                            style={styles.textInput}
                            onChangeText={(val) => this.onSearch(val)}
                        />
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.bottom}>

                        <View style={styles.bottomItem}>
                            <RetailItem />
                        </View>
                        <View style={styles.bottomItem}>
                            <RetailItem />
                        </View>
                        <View style={styles.bottomItem}>
                            <RetailItem />
                        </View>
                        <View style={styles.bottomItem}>
                            <RetailItem />
                        </View>
                        <View style={styles.bottomItem}>
                            <RetailItem />
                        </View>
                        <View style={styles.bottomItem}>
                            <RetailItem />
                        </View>
                        <View style={styles.bottomItem}>
                            <RetailItem />
                        </View>
                        <View style={styles.bottomItem}>
                            <RetailItem />
                        </View>

                    </View>
                </ScrollView>

            </View>



        );
    }
}

export default LayoutComponent;