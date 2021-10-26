import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ModoInterno from '../Telas/ModoInterno';
import ModoExterno from '../Telas/ModoExterno';
import TelaModo from '../Telas/TelaModo';
import TelaPrevisao from '../Telas/TelaPrevisao';
import TelaPrevisaoGeral from './TelaPrevisaoGeral';
import Weather from './../WeatherDetail/Weather';

const Telas: React.FC = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Modo"}>
                <Stack.Screen name="Modo" component={TelaModo} />
                <Stack.Screen name="Interno" component={ModoInterno} />
                <Stack.Screen name="Externo" component={ModoExterno} />
                <Stack.Screen name="Previsao" component={TelaPrevisao} />
                <Stack.Screen name="PrevisaoGeral" component={TelaPrevisaoGeral} />
                <Stack.Screen name="Weather" component={Weather} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Telas;