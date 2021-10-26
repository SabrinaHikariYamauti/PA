import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const InfoCard: React.FC = (props) =>  {

    const InfoCardStyles = StyleSheet.create(
        {

            card:{
                alignItems:'center',
                margin:10,
                minWidth:150,
            },
            text:{
                color:'#e8e8e8',
                margin:5,
                marginLeft:15,
                fontSize:18,
            }
        }
    )
    return (
        <View style={InfoCardStyles.card}>
            <Text style={InfoCardStyles.text}>{props.title}</Text>
            <Text style={[InfoCardStyles.text, {color:'#d3d3d3'}]}>{props.value}</Text>
        </View>
    )
}

export default InfoCard