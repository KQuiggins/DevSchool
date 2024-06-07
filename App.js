import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import About from './views/About';
import HomeScreen from './views/Home';
import RegisterScreen from './views/Register';
import LoginScreen from './views/Login';
import GlobalHeader from './components/Header';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Home'>
				<Stack.Screen
					name='Login'
					component={LoginScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name='Register'
					component={RegisterScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='About'
					component={About}
					options={{ title: 'About' }}
				/>
				<Stack.Screen
					name='Home'
					component={HomeScreen}
					options={{ header: () => <GlobalHeader /> }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
