import React from 'react';
import { Feather, Fontisto } from '@expo/vector-icons';

import { 
    View, 
    TextInput, 
    StyleSheet, 
    Text, 
    TouchableOpacity,
    TouchableHighlight 
} from 'react-native';

const PrevisaoGeral = (props) => {

    const Icon = () =>{
        if(props.icon === "morning"){
            return(
                <Feather name='sun' 
                style={PrevisaoGeralStyles.cardIcon} 
                size={40}
                color='orange'/>
            )
        }
        if(props.icon === "afternoon"){
            return(
                <Feather name='cloud' 
                style={PrevisaoGeralStyles.cardIcon} 
                size={40}
                color='orange'/>
            )
        }
        if(props.icon === "night"){
            return(
                <Feather name='cloud-rain' 
                style={PrevisaoGeralStyles.cardIcon} 
                size={40}
                color='orange'/>
            )
        }
    }
    
    const PrevisaoGeralStyles = StyleSheet.create(
        {

            card: {
                display:'flex',
                flexDirection:'row',
                backgroundColor: props.backgroundColor,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 6,
                width: 350,
                height:100 ,
                borderRadius:10,
            },
            text:{
                color:'#166671',
                margin:15,
                fontSize:20,
            },
            cardIcon:{
                color:'#173A60',
                margin:15,
            },
        }
    )
    return (
        <View style={PrevisaoGeralStyles.card}>
            <Text style={PrevisaoGeralStyles.text}>{props.title}</Text>
            <Icon></Icon>
            <Text style={PrevisaoGeralStyles.text}>{props.temperature}</Text>
        </View>
    )
}

export default PrevisaoGeral;