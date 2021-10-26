import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather, Fontisto } from '@expo/vector-icons';

const MainCard: React.FC = (props) => {

    const Icon = () =>{
        if(props.icon === "morning"){
            return(
                <Feather name='sun' 
                style={MainCardStyles.cardIcon} 
                size={40}
                color='orange'/>
            )
        }
        if(props.icon === "afternoon"){
            return(
                <Feather name='cloud' 
                style={MainCardStyles.cardIcon} 
                size={40}
                color='orange'/>
            )
        }
        if(props.icon === "night"){
            return(
                <Feather name='cloud-rain' 
                style={MainCardStyles.cardIcon} 
                size={40}
                color='orange'/>
            )
        }
    }

    const MainCardStyles = StyleSheet.create(
        {
            card: {
                backgroundColor: props.backgroundColor,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 7,
                margin: 10,
                width: 110,
                height: 180,
                borderRadius:10,
            },
            text:{
                color:'#166671',
                margin:5,
                fontSize:20,
            },
            cardIcon:{
                color:'#173A60',
                margin:5,
            },

        }
    )
    return (
        <View style={MainCardStyles.card}>
            <Text style={MainCardStyles.text}>{props.title}</Text>
            <Icon></Icon>
            <Text style={MainCardStyles.text}>{props.temperature}</Text>
        </View>
    )
}

export default MainCard