import { get_responsive_height, get_responsive_radius, get_responsive_fontSize } from './util';

export const FONT_SIZE = {
    APP_NAME_FONT: get_responsive_fontSize(6),
    SMALL_FONT: get_responsive_fontSize(2),
    NORMAL_FONT: get_responsive_fontSize(2.45),
    FORM_HEADER: get_responsive_fontSize(3),
    BIG_FONT: get_responsive_fontSize(4.8),
    TILE_FONT: get_responsive_fontSize(3.6)
}

export const COLOR = {
    PEACH: '#FFCBA4',
    WHITE: '#FFF',
    DARK_BLUE: '#0000A0',
    GRAY: 'gray',
    LIGHT_BLACK: '#696969',
    CMN_TXT_BOX_BTM_BORDER: 'gray',
    CMN_THEME: '#0000A0',
    CMN_THEME_INNER_FONT: '#FFF'
}

export const BORDER_RADIUS = {
    TILE: get_responsive_radius(2),
    RETAILER_IMAGE: get_responsive_radius(2)
}

export const PADDING_DIST = {
    D10: get_responsive_height(1.2),
    D15: get_responsive_height(1.8),
    D20: get_responsive_height(2.4),
    D30: get_responsive_height(3.6),
    D40: get_responsive_height(4.8),
    D50: get_responsive_height(6.0),
    D75: get_responsive_height(9.0),
    D100: get_responsive_height(12.0),
}
//value in percentage
export const ELEMENT_HEIGHT = {
    STD_BTN: get_responsive_height(7.2),
    STD_TEXT_BOX: get_responsive_height(6),
    ICON: get_responsive_height(3),
    TILE: get_responsive_height(15),
    TILE_CONTENT: get_responsive_height(12.5),
    HEADING_BAR: get_responsive_height(12),
    AVATAR: get_responsive_height(9.6),
    GRID_TILE: get_responsive_height(11.4),
    GRID_IMG: get_responsive_height(9.6),
    LABEL_VIEW_HEIGHT: get_responsive_height(4.8)
}