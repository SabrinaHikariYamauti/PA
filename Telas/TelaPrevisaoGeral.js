import * as React from 'react';
import { TextInput, View, TouchableHighlight, StyleSheet } from 'react-native';

import PrevisaoGeral from '../Components/PrevisaoGeral';

const TelaPrevisaoGeral = ({ navigation }) => {

    const PrevisaoGeralStyles = StyleSheet.create(
        {
            layout:{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                marginTop:'5%',
            }
        }
    )
    return (
        <View style={PrevisaoGeralStyles.layout}>     
            <TouchableHighlight 
            onPress={() => navigation.navigate('Weather')}>
                <PrevisaoGeral 
                    title={'Segunda - feira'} 
                    backgroundColor='#A2F3EB'
                    temperature={'24°'}
                    icon={'morning'}
                ></PrevisaoGeral>
            </TouchableHighlight>

            <TouchableHighlight>
                <PrevisaoGeral 
                    title={'Terça - feira'} 
                    backgroundColor='#A2F3EB'
                    temperature={'24°'}
                    icon={'morning'}
                ></PrevisaoGeral>
            </TouchableHighlight>

            <TouchableHighlight>
                <PrevisaoGeral 
                    title={'Quarta - feira'} 
                    backgroundColor='#A2F3EB'
                    temperature={'24°'}
                    icon={'morning'}
                ></PrevisaoGeral>
            </TouchableHighlight>

            <TouchableHighlight>
                <PrevisaoGeral 
                    title={'Quinta - feira'} 
                    backgroundColor='#A2F3EB'
                    temperature={'24°'}
                    icon={'morning'}
                ></PrevisaoGeral>
            </TouchableHighlight>

            <TouchableHighlight>
                <PrevisaoGeral 
                    title={'Sexta - feira'} 
                    backgroundColor='#A2F3EB'
                    temperature={'24°'}
                    icon={'morning'}
                ></PrevisaoGeral>
            </TouchableHighlight>
        </View >
    );
}

export default TelaPrevisaoGeral;