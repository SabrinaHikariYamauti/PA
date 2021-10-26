import * as React from 'react';
import { View, Text, Image, TouchableHighlight, TouchableOpacity } from 'react-native';

import ModeStyles from '../Styles/ModeStyles';
import PrevisaoStyles from '../Styles/PrevisaoStyles';

const TelaModo = ({ navigation }) => {
    return (
        <View style={ModeStyles.OperationMode}>
            <Text style={ModeStyles.OperationText}>Olá! Escolha o modo de{'\n'}operação do varal</Text>
            <TouchableHighlight
                style={ModeStyles.OperationButton}
                onPress={() => navigation.navigate('Interno')}
            >
                <Text style={ModeStyles.OperationButtonText}>INTERNO</Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={ModeStyles.OperationButton}
                onPress={() => navigation.navigate('Externo')}
            >
                <Text style={ModeStyles.OperationButtonText}>EXTERNO</Text>
            </TouchableHighlight>

            <View >
                <TouchableOpacity
                    style={PrevisaoStyles.PrevisaoButton}
                    onPress={() => navigation.navigate('Previsao')}
                >
                    <Image
                        source={require('../ButtonIcon/ButtonPrevisao.png')}
                        style={PrevisaoStyles.PrevisaoButton}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={PrevisaoStyles.PrevisaoButton}
                    onPress={() => navigation.navigate('PrevisaoGeral')}
                >
                    <Image
                        source={require('../ButtonIcon/ButtonPrevisao.png')}
                        style={PrevisaoStyles.PrevisaoButton}
                    />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default TelaModo;