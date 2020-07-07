import { StyleSheet } from 'react-native';
import { COLOR, FONT_SIZE, ELEMENT_HEIGHT, PADDING_DIST } from './../../util/style-constants';

export const styles = StyleSheet.create({
    header: {
        top: 0,
        height: ELEMENT_HEIGHT.HEADING_BAR,
        width: '100%',
        backgroundColor: COLOR.CMN_THEME,
    },
    avatar: {
        top: PADDING_DIST.D10,
        left: PADDING_DIST.D10,
        height: ELEMENT_HEIGHT.AVATAR,
        width: ELEMENT_HEIGHT.AVATAR,
        borderRadius: ELEMENT_HEIGHT.AVATAR / 2
    },
    username: {
        position: 'absolute',
        top: PADDING_DIST.D20,
        left: ELEMENT_HEIGHT.AVATAR + PADDING_DIST.D30,
    },
    usernameText: {
        color: COLOR.CMN_THEME_INNER_FONT,
        fontSize: FONT_SIZE.NORMAL_FONT,
        fontWeight: 'bold'
    },
    usertype: {
        position: 'absolute',
        top: PADDING_DIST.D50,
        left: ELEMENT_HEIGHT.AVATAR + PADDING_DIST.D30,
    },
    usertypeText: {
        color: COLOR.CMN_THEME_INNER_FONT,
        fontSize: FONT_SIZE.NORMAL_FONT
    }
});