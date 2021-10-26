import { BackHandler, StyleSheet } from 'react-native';

const PrevisaoStyles = StyleSheet.create({
    PrevisaoInput: {
        height: 40,
        width: 250,
        borderWidth: 1,
        paddingStart: 10,
        marginTop: 30,
        borderRadius: 5,
        backgroundColor: 'white'

    },

    PrevisaoBarChart: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    PrevisaoButton: {
        marginTop: 3,
        alignSelf: 'center',
        borderRadius: 200,
        width: 70,
        height: 70
    }


});

export default PrevisaoStyles;