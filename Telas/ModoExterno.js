import * as React from 'react';
import { View, Text } from 'react-native';

//Import Styles
import ControlesStyles from '../Styles/ControleStyles';
import TUStyles from '../Styles/TUStyles';

import ControleVaralButtons from '../Components/ControleVaralButtons';
import Donut from '../Components/Donut';
import BarChart from '../Components/BarChart';
import TempoFaltante from '../Components/TempoFaltante';

const ModoExterno = ({ navigation }) => {
    return (
        <View>

            <View style={TUStyles.TU}>
                <View style={TUStyles.Temperatura}>
                    <BarChart />
                </View>

                <View style={TUStyles.Umidade}>
                    <Text style={TUStyles.UmidadeText}>Umidade</Text>
                    <Donut />
                </View>
            </View>

            <TempoFaltante />

            <View style={ControlesStyles.Controle}>

                <View style={ControlesStyles.ControleAltura}>
                    <Text style={ControlesStyles.TextButton}>Altura Varal</Text>
                    <View style={ControlesStyles.Buttons}>
                        <ControleVaralButtons />
                    </View>
                </View>

            </View>

        </View >
    );
}

export default ModoExterno;