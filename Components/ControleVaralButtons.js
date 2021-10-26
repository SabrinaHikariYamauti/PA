import * as React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';


import ControleVaralStyles from '../Styles/ControleVaralStyles';

const ControleVaralButtons: React.FC = () => {
    return (
        <View>
            <TouchableOpacity>
                <Image
                    source={require('../ButtonIcon/ButtonVectorUp.png')}
                    style={ControleVaralStyles.ControleIcon}
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image
                    source={require('../ButtonIcon/ButtonVectorDown.png')}
                    style={ControleVaralStyles.ControleIcon}
                />
            </TouchableOpacity>
        </View>
    );
};

export default ControleVaralButtons;