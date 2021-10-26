import React from 'react';
import { View } from 'react-native';
import { VictoryChart, VictoryGroup, VictoryBar, VictoryLabel } from 'victory-native';

import BarChartStyles from '../Styles/BarChartStyles';

const data = {
    temperatura: [
        { x: 'manhã', y: 10 },
        { x: 'tarde', y: 20 },
        { x: 'noite', y: 30 },
    ],
}

const BarChart: React.FC = () => {
    return (
        <View style={BarChartStyles.BarChart}>
            <VictoryChart width={200} height={250} padding={50}>
                <VictoryGroup >
                    <VictoryBar
                        data={data.temperatura}
                        style={{
                            data: {
                                fill: '#86AFDB'
                            }
                        }}
                        alignment='start'
                        barWidth={10}
                        barRatio={100}
                    />
                    <VictoryLabel x={40} y={30}
                        text={"C°"}
                    />
                    <VictoryLabel
                        x={65} y={25}
                        style={{
                            fill: '#86AFDB'
                        }
                        }
                        text={"Temperatura"}
                    />
                </VictoryGroup>
            </VictoryChart>
        </View >
    );
};

export default BarChart;