import {
	Text,
	StyleSheet,
	View,
	TextInput,
	TouchableHighlight,
	Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

const LoginScreen = ({ navigation }) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const cancelLogin = () => {
		Alert.alert('Login cancelled');
		navigation.navigate('Home');
	};

	const createAccount = () => {
		navigation.navigate('Register');
	};

	const handleLogin = () => {
		if (!username) {
			Alert.alert('Please enter your username');
		} else if (!password) {
			Alert.alert('Please enter your password');
		} else {
			AsyncStorage.getItem('userLoggedIn', (err, result) => {
				if (result !== 'none') {
					Alert.alert('User logged in already');
					navigation.navigate('Home');
				} else {
					AsyncStorage.getItem(username, (err, result) => {
						if (result !== null) {
							if (result !== password) {
								Alert.alert(
									'Password does not match our records',
								);
							} else {
								AsyncStorage.setItem(
									'userLoggedIn',
									username,
									(err, result) => {
										Alert.alert(`${username} logged in`);
										navigation.navigate('Home');
									},
								);
							}
						} else {
							Alert.alert(`${username} not found`);
						}
					});
				}
			});
		}
	};
	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Log In</Text>
			<TextInput
				style={styles.inputs}
				placeholder='Enter your username'
				onChangeText={setUsername}
				value={username}
			/>
			<Text style={styles.labels}>Enter Username</Text>

			<TextInput
				style={styles.inputs}
				placeholder='Enter your password'
				onChangeText={setPassword}
				value={password}
				secureTextEntry={true}
			/>
			<Text style={styles.labels}>Enter Password</Text>

			<TouchableHighlight onPress={handleLogin} underlayColor='#000000'>
				<Text style={styles.buttons}>Login</Text>
			</TouchableHighlight>

			<TouchableHighlight onPress={cancelLogin} underlayColor='#000000'>
				<Text style={styles.buttons}>Cancel</Text>
			</TouchableHighlight>

			<TouchableHighlight onPress={createAccount} underlayColor='#000000'>
				<Text style={styles.buttons}>Register</Text>
			</TouchableHighlight>
		</View>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		paddingBottom: '45%',
		paddingTop: '5%',
	},
	heading: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	inputs: {
		width: '80%',
		marginTop: 15,
		borderWidth: 1,
		fontSize: 16,
		height: 45,
		fontColor: '#000000',
	},
	labels: {
		paddingBottom: 10,
		fontSize: 16,
		fontWeight: 'bold',
	},
	buttons: {
		margin: 5,
		fontSize: 16,
		backgroundColor: '#DDDDDD',
		width: '150',
		height: '50',
		textAlign: 'center',
		padding: 15,
	},
});
