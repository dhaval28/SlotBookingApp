import { StyleSheet } from 'react-native';
import { COLOR, FONT_SIZE, ELEMENT_HEIGHT, PADDING_DIST } from '../../util/style-constants';
export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    top:{
        height: '15%'
    },
    bottom: {
        height: '85%'
    },
    formContainer: {        
        marginLeft: '7%',
        top: PADDING_DIST.D10,
        //backgroundColor: 'yellow',
        //height: 'auto'
    },
    formDataContainer:{
        flex: 1,
        backgroundColor: 'red'
    },
    labelText: {
        fontSize: FONT_SIZE.NORMAL_FONT,
        marginTop: PADDING_DIST.D20
    },

    textInput: {
        fontSize: FONT_SIZE.NORMAL_FONT,
        height: ELEMENT_HEIGHT.STD_TEXT_BOX,
        borderBottomColor: COLOR.CMN_TXT_BOX_BTM_BORDER,
        borderBottomWidth: 1,
        marginRight: '7%'
    },
    labelValue: {
        fontSize: FONT_SIZE.NORMAL_FONT,
        height: ELEMENT_HEIGHT.LABEL_VIEW_HEIGHT,
        borderBottomColor: COLOR.CMN_TXT_BOX_BTM_BORDER,
        borderBottomWidth: 1,
        marginRight: '7%',
        top: PADDING_DIST.D10
    },
    formHeader: {
        alignItems: 'center',
    },
    formHeaderText: {
        fontSize: FONT_SIZE.FORM_HEADER,
        fontWeight: 'bold',
        color: COLOR.CMN_THEME,
        marginTop: '5%'
    },
    btnBook: {
        marginTop: PADDING_DIST.D30,
        marginRight: '7%',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: ELEMENT_HEIGHT.STD_BTN,        
        borderRadius: PADDING_DIST.D30,
        backgroundColor: COLOR.CMN_THEME
    },
    normalFont: {
        fontSize: FONT_SIZE.NORMAL_FONT,
        color: COLOR.CMN_THEME_INNER_FONT
    },
    dateIcon: {
        position: 'absolute',
        marginTop: -PADDING_DIST.D10,
        right: '7%',
        zIndex: 5
    },
    timePicker: {
        fontSize: FONT_SIZE.NORMAL_FONT,
        height: ELEMENT_HEIGHT.STD_TEXT_BOX,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginTop: PADDING_DIST.D15,
        marginRight: '7%'
    },
    selectedShop: {
        width: '100%',
        height: ELEMENT_HEIGHT.TILE,
        paddingTop: '1%',
        paddingBottom: '1%',
    },
    iconBlock: {
        //position: 'relative',
        //marginTop: PADDING_DIST.D30
        flexDirection: "row",
        height: 100,
        
    },
    approveIcon: {
        //left: '25%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cancelIcon: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center'
        //left: '65%',
        //top: -PADDING_DIST.D75,
    },
    padding: {
        height: PADDING_DIST.D50
    }
});