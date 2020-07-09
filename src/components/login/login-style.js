import { StyleSheet } from 'react-native';
import { COLOR, FONT_SIZE, ELEMENT_HEIGHT } from './../../util/style-constants';
export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    registerBtn: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 0,
        width: "100%"
    },
    normalFont: {
        fontSize: FONT_SIZE.NORMAL_FONT,
        color: COLOR.CMN_THEME_INNER_FONT
    },
    logo: {
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 10
    },
    logoText: {
        color: COLOR.CMN_THEME,
        fontWeight: 'bold',
        fontSize: FONT_SIZE.APP_NAME_FONT
    },
    labelText: {
        color: COLOR.CMN_THEME,
        fontSize: FONT_SIZE.NORMAL_FONT,
        fontWeight: 'bold'
    },
    formContainer: {
        marginLeft: '7%'
    },
    textInput: {
        fontSize: FONT_SIZE.NORMAL_FONT,
        height: ELEMENT_HEIGHT.STD_TEXT_BOX,
        borderBottomColor: COLOR.CMN_TXT_BOX_BTM_BORDER,
        borderBottomWidth: 1,
        marginTop: '2%',
        marginRight: '7%'
    },
    nextBtn: {
        marginTop: 30,
        marginRight: '7%',
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        borderRadius: 30,
        backgroundColor: COLOR.CMN_THEME,
        height: ELEMENT_HEIGHT.STD_BTN,

    },
    regBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: COLOR.CMN_THEME,
        height: ELEMENT_HEIGHT.STD_BTN
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
    },
    invalidCredentials: {
        color: 'red',
        fontSize: FONT_SIZE.NORMAL_FONT,
        marginLeft: 45,
        padding: 10
    }
});