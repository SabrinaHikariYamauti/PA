
//Import Libraries
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Weather from './WeatherDetail/Weather';
//Import Styles
import ModeStyles from './Styles/ModeStyles';

import Telas from './Telas/Telas';


const DashboardScreen = ({ navigation }) => {
  return (
    <View styles={styles.container}>
      <Text>(Screen2)</Text>
      <Text>Dashboard</Text>
      <Button
        title='Back'
        onPress={() => navigation.goBack()}
      ></Button>
      <Button
        title='Go to Home'
        onPress={() => navigation.popToTop()}
      ></Button>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    //<Telas />
    <Weather />
  );
}

export default App;