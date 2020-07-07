import { StyleSheet } from 'react-native';

import { ELEMENT_HEIGHT, BORDER_RADIUS, COLOR, FONT_SIZE } from './../../util/style-constants';


export const styles = StyleSheet.create({
    container: {
        //flex: 1
        flex: 1,
        justifyContent: 'center',
        //paddingTop: Constants.statusBarHeight,
        paddingTop: 10,
        //backgroundColor: 'red',
        padding: 8,

    },
    top: {
        height: '10%'
    },

    bottom: {
        height: '80%',
        flexDirection: 'row',
        flexWrap: 'wrap'

    },
    bottomItem: {
        width: '100%',
        height: ELEMENT_HEIGHT.TILE,
        paddingTop: '1%',
        paddingBottom: '1%',


    },
    bottomItemInner: {
        flex: 1,
        backgroundColor: COLOR.CMN_THEME,
        borderColor: COLOR.CMN_THEME,
        borderRadius: BORDER_RADIUS.TILE,
        borderWidth: 1

    },
    textInput: {
        fontSize: FONT_SIZE.NORMAL_FONT,
        height: ELEMENT_HEIGHT.STD_TEXT_BOX,
        borderBottomColor: COLOR.CMN_TXT_BOX_BTM_BORDER,
        borderBottomWidth: 1,
    },
    searchIcon: {
        position: 'absolute',
        top: '18%',
        right: '5%',
        zIndex: 5
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        opacity: 0.5
    }

});