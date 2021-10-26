import * as React from 'react';
import { View, Text } from 'react-native';

import TempoStyles from '../Styles/TempoStyles'

const TempoFaltante: React.FC = () => {
    return (
        <View style={TempoStyles.Tempo}>
            <Text style={TempoStyles.TempoText}>Tempo Restante</Text>
            <Text style={TempoStyles.TempoCount}>1:00:00</Text>
        </View>
    );
};

export default TempoFaltante;