import { DarkTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

const WeatherStyles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: darkTheme ? '#232634' : '#f2f2f2',
            alignItems: 'center',
        },
        sunIcon: {
            marginTop: 50,
            color: '#F7A814'
        },
        temperature: {
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 10,
        },
        temperatureText: {
            color: darkTheme ? '#e0e0e0' : 'black',
            fontSize: 40,
        }
    }
);

export default WeatherStyles;