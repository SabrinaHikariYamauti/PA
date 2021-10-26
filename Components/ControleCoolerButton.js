import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';


import ControleCoolerStyles from '../Styles/ControleCoolerStyles';

const ControleVaralButtons: React.FC = () => {
    return (
        <View>
            <TouchableOpacity>
                <Image
                    source={require('../ButtonIcon/ButtonCooler.png')}
                    style={ControleCoolerStyles.CoolerIcon}
                />
            </TouchableOpacity>
        </View>
    );
};

export default ControleVaralButtons;