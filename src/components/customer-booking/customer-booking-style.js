import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F6CE'
    },
    wrapper: {
        marginTop: 15
    },
    titleWrapper: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    appTitle: {
        color: 'black',
        fontSize: 30,
        fontWeight: '800',
        paddingVertical: 30
    },
    bookingDetails: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingLeft: 10
    },
    input: {
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1,
        width: 300
    },
    calendar: {
        borderTopWidth: 1,
        paddingTop: 5,
        borderBottomWidth: 1,
        borderColor: '#eee',
        height: 350
    }
});