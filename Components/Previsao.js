import React from 'react';
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

const Previsao: React.FC = () => {
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

};


export default Previsao;