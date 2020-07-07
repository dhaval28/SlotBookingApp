import { StyleSheet } from 'react-native';
import { COLOR, FONT_SIZE, ELEMENT_HEIGHT } from './../../util/style-constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    header: {
        top: 0,
        height: ELEMENT_HEIGHT.HEADING_BAR,
        width: '100%',
        backgroundColor: COLOR.CMN_THEME,
    },
    avatar: {
        top: 10,
        left: 10,
        height: ELEMENT_HEIGHT.AVATAR,
        width: ELEMENT_HEIGHT.AVATAR,
        borderRadius: ELEMENT_HEIGHT.AVATAR / 2
    },
    username: {
        position: 'absolute',
        top: 20,
        left: ELEMENT_HEIGHT.AVATAR + 30,
    },
    usernameText: {
        color: COLOR.CMN_THEME_INNER_FONT,
        fontSize: FONT_SIZE.NORMAL_FONT,
        fontWeight: 'bold'
    },
    usertype: {
        position: 'absolute',
        top: 50,
        left: ELEMENT_HEIGHT.AVATAR + 30,
    },
    usertypeText: {
        color: COLOR.CMN_THEME_INNER_FONT,
        fontSize: FONT_SIZE.NORMAL_FONT
    },
    tileContainer: {
        flex: 1
    },
    tile: {
        height: '100%',
        width: '80%',
        backgroundColor: COLOR.CMN_THEME,
        marginTop: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },

    tileFont: {
        fontSize: FONT_SIZE.TILE_FONT,
        color: COLOR.CMN_THEME_INNER_FONT
    }

});