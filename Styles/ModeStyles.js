import { StyleSheet } from 'react-native';

const ModeStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    OperationMode: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    OperationText: {
        textAlign: 'center',
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 30
    },

    OperationButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1A3961',
        marginBottom: 30,
        borderRadius: 4,
        width: 300,
        height: 60
    },

    OperationButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'

    }

});

export default ModeStyles;