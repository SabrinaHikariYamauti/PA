import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { VictoryChart, VictoryGroup, VictoryBar, VictoryLabel } from 'victory-native';

import PrevisaoStyles from '../Styles/PrevisaoStyles';

const data = {
    manhã: [
        { x: '1°dia', y: 10 },
        { x: '2°dia', y: 20 },
        { x: '3°dia', y: 30 },
        { x: '4°dia', y: 20 },
        { x: '5°dia', y: 30 },
    ],
    tarde: [
        { x: '1°dia', y: 20 },
        { x: '2°dia', y: 30 },
        { x: '3°dia', y: 40 },
        { x: '4°dia', y: 30 },
        { x: '5°dia', y: 40 },
    ],
    noite: [
        { x: '1°dia', y: 30 },
        { x: '2°dia', y: 40 },
        { x: '3°dia', y: 50 },
        { x: '4°dia', y: 40 },
        { x: '5°dia', y: 50 },
    ]
}

export class PrevisaoModify extends Component {

    constructor(props) {
        super(props);
        this.state = {
            city: '',
            data: [],
            icon: '',
            city_display: '',
            desc: '',
            main: '',
            humidity: '',
            pressure: '',
            visibility: ''
        }
        this.fetch_weather()
    }

    fetch_weather = () => {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=fe59787df0be63bef3f337e96c0a5e8e')
            .then((response) => response.json())
            .then((json => {
                this.setState({ data: json })
                this.setState({ temp: (json.main.temp - 237.15).toFixed(2) + ' °C' })
                this.setState({ city_display: json.name })
                this.setState({ icon: json.weather[0].icon })
                this.setState({ main: json.weather[0].main })
                this.setState({ humidity: json.main.humidity + ' %' })
                this.setState({ visibility: (json.main.visibility / 1000).toFixed(2) + " Km" })
            })).catch((error) => console.error(error))
    }

    render() {
        return <View style={PrevisaoStyles.PrevisaoBarChart}>

            <TextInput
                style={PrevisaoStyles.PrevisaoInput}
                placeholder="Insira aqui o nome da cidade"
            />

            <VictoryChart width={350} height={400}>
                <VictoryGroup offset={10}>
                    <VictoryBar
                        data={data.manhã}
                        color={'#32FFEF'} />
                    <VictoryBar
                        data={data.tarde}
                        color={'#FF9832'} />
                    <VictoryBar
                        data={data.noite}
                        color={'#117B8C'} />
                    <VictoryLabel
                        x={20} y={25}
                        style={{
                            fill: '#86AFDB'
                        }
                        }
                        text={"Temperatura (°C)"}
                    />
                </VictoryGroup>
            </VictoryChart>
        </View >;
    }
};


export default Previsao;