
//Import Libraries
import { DarkTheme } from '@react-navigation/native';
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
//import WeatherStyles from './Styles/WeatherStyles';
import { Feather } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import MainCard from './MainCard';
import InfoCard from './InfoCard';
import * as Location from  'expo-location';
import ConsultAPI from './ConsultAPI';

const Weather: React.FC = () => {

    const [darkTheme, setDarkTheme] = useState(true)
    const [currentTemperature, setCurrentTemperature] = useState('27')
    const [location, setLocation] = useState('BR, Fortaleza')
    const [currentHour, setCurrentHour] = useState('13:00')

    const [wind, setWind] = useState('65')
    const [umidity, setUmidity] = useState('80')
    const [tempMin, setTempMin] = useState('21')
    const [tempMax, setTempMax] = useState('31')

    const WeatherStyles = StyleSheet.create(                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
        {
            container: {
                flex: 1,
                backgroundColor: darkTheme ? '#232634' : '#f2f2f2',
                alignItems: 'center',
            },
            sunIcon: {
                marginTop: 50,
                color: '#F7A814'
            },
            temperature: {
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: 10,
            },
            temperatureText: {
                color: darkTheme ? '#e0e0e0' : 'black',
                fontSize: 40,
            },
            refreshButton: {
                position: 'absolute',
                margin: 30,
                alignSelf: 'flex-start',
            },
            cardView: {
                color: darkTheme ? 'black' : 'white',
                margin: 10,
                flexDirection: 'row',
                alignItems: 'center'
            },
            info:{
                alignItems:'center',
                backgroundColor:darkTheme ? '#393e54':'#8f8f8f',
                borderRadius:20,
                width:350,
                height:230
            },
            infoText:{
                color:darkTheme ? '#e0e0e0' : 'white',
                margin:15,
                fontSize:20,
                fontWeight:'bold' 
            },
            infoCards:{
                flexDirection:'row',
                flexWrap:'wrap',
            },
            themeButton:{
                margin:10,
                marginLeft:300,
                justifyContent:'center',
                width:50,
                height:50,
                borderRadius:25
            },
            squareButton:{
                backgroundColor:darkTheme ? '#f2f2f2' : '#8f8f8f',
                justifyContent:'center',
                borderRadius:20,
                marginRight:20,
                width:50,
                height:25,
            },
            circleButton:{
                backgroundColor:darkTheme ? '#232634' : '#f2f2f2',
                alignSelf:darkTheme ? 'flex-end':'flex-start',
                margin:5,
                width:20,
                height:20,
                borderRadius:50,
            }
        }
    );

    function convertKelvin(kelvin){
        return parseInt(kelvin-273);
    }

    async function setCurrentWeather(){
        const data = await ConsultAPI();
        console.log(data);

        setCurrentTemperature(convertKelvin(data[0]));
        setTempMin(convertKelvin(data[1]));
        setTempMax(convertKelvin(data[2]));
        setLocation(data[3]);
        setWind(data[4]);
        setUmidity(data[5]);
    }

    useEffect(()=>{
        let date = new Date()
        setCurrentHour(date.getHours() + ':' + date.getMinutes());
        setCurrentWeather();
    }   ,[])

    return (
        <View style={WeatherStyles.container}>
            <TouchableOpacity style={WeatherStyles.refreshButton}>
                <EvilIcons name="refresh" size={30} color={darkTheme ? "white" : 'black'} />
            </TouchableOpacity>
            <Feather name="sun" style={WeatherStyles.sunIcon} size={40} />
            <View style={WeatherStyles.temperature}>
                <Text style={WeatherStyles.temperatureText}>{currentTemperature}</Text>
                <Text style={[WeatherStyles.temperatureText, { fontSize: 14 }]}>C°</Text>
            </View>

            <Text style={[WeatherStyles.temperatureText, { fontSize:14 }]}>{location}, {currentHour}</Text>

            <View style={WeatherStyles.cardView}>
                <MainCard title={'Manhã'} 
                backgroundColor={darkTheme ? '#A2F3EB': '#FF8A33'}
                temperature={'24°'}
                icon={'morning'}
                ></MainCard>

                <MainCard title={'Tarde'} 
                backgroundColor={darkTheme ? '#FF8A33':'#F64F32'}
                temperature={'31°'}
                icon={'afternoon'}
                ></MainCard>

                <MainCard title={'Noite'} 
                backgroundColor={darkTheme ? 'white':'#2E67AB'}
                temperature={'21°'}
                icon={'night'}
                ></MainCard>
            </View>

            <View style = {WeatherStyles.info}>
                <Text style={WeatherStyles.infoText}>Informações Adicionais</Text>
                <View style={WeatherStyles.infoCards} >
                    <InfoCard title={'Vento'} value={ wind + 'km/h'}></InfoCard>
                    <InfoCard title={'Umidade'} value={ umidity + '%'}></InfoCard>
                    <InfoCard title={'Temp. Min'} value={ tempMin + '°C'}></InfoCard>
                    <InfoCard title={'Temp. Max'} value={ tempMax + '°C'}></InfoCard>
                </View>
            </View>

            <View style={WeatherStyles.themeButton}>
                <View style={WeatherStyles.squareButton}>
                    <TouchableOpacity style={WeatherStyles.circleButton} onPress={()=>darkTheme ? setDarkTheme(false):setDarkTheme(true)}></TouchableOpacity>
                </View>
            </View>

        </View>
    );
};

export default Weather;

