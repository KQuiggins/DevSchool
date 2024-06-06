import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './views/About';

import HomeScreen from './views/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
      >
        <Stack.Screen name="About" component={About} options={{title: 'About'}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Dev School'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}