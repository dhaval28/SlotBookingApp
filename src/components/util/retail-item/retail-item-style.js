import { StyleSheet } from 'react-native';
import { COLOR, FONT_SIZE, ELEMENT_HEIGHT, BORDER_RADIUS } from './../../../util/style-constants';
import { get_responsive_height } from './../../../util/util';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.CMN_THEME,
        borderColor: COLOR.CMN_THEME,
        borderRadius: BORDER_RADIUS.TILE,
        borderWidth: 1,

    },
    dataContainer: {
        flexDirection: 'row'
    },
    imageBlock: {
        width: '30%',
    },
    image: {
        width: '79%',
        height: ELEMENT_HEIGHT.TILE_CONTENT,
        left: '4%',
        top: '3%',
        borderRadius: BORDER_RADIUS.RETAILER_IMAGE
    },
    textBlock: {
        width: '70%'
    },
    textContainer: {
        flex: 1
    },
    textArea: {
        height: ELEMENT_HEIGHT.TILE_CONTENT,
        top: '3%',
    },
    textView: {
        height: ELEMENT_HEIGHT.TILE_CONTENT / 2,
        justifyContent: 'center'
    },
    text1: {
        fontSize: FONT_SIZE.NORMAL_FONT,
        color: COLOR.CMN_THEME_INNER_FONT,
        fontWeight: 'bold',
        top: get_responsive_height(2.9)
    },
    text2: {
        fontSize: FONT_SIZE.SMALL_FONT,
        color: COLOR.CMN_THEME_INNER_FONT,
        top: get_responsive_height(3.8)
    }


    // retailItem: {
    //     width: '100%',
    //     height:  '100%',
    //     borderRadius: 10,
    //     backgroundColor: COLOR.CMN_THEME
    // },
    // image: { 
    //    width: '100%',
    //    height: '100%',
    //    borderRadius: 10
    // },
    // imageBlock: {
    //     position: 'absolute',
    //     top: 5,
    //     width: '20%',
    //     height: '20%',
    //     left: 7
    // },
    // textBlock: {
    //     position: 'absolute',
    //     top: '0%',
    //     left: '25%',
    //     width:'80%'        
    // },
    // text1: {
    //     fontSize: FONT_SIZE.NORMAL_FONT,
    //     color: COLOR.CMN_THEME_INNER_FONT,
    //     fontWeight: 'bold',
    //     top: 10
    // },
    // text2: {
    //     fontSize: FONT_SIZE.NORMAL_FONT,
    //     color: COLOR.CMN_THEME_INNER_FONT,
    //     top: 15
    // }
});