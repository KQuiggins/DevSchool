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
		justifyContent: 'center', 
		backgroundColor: '#f7f7f7', 
		padding: 20, 
	},
	heading: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20, 
		color: '#333', 
	},
	inputs: {
		width: '90%',
		padding: 10,
		borderWidth: 1,
		borderColor: '#ccc', 
		fontSize: 16,
		height: 50, 
		color: '#000', 
		marginBottom: 10, 
		borderRadius: 5, 
	},
	labels: {
		selfAlign: 'flex-start', 
		width: '90%', 
		fontSize: 14,
		color: '#666', 
		marginBottom: 5, 
	},
	buttons: {
		fontSize: 16,
		color: '#fff', 
		backgroundColor: '#007BFF', 
		width: '90%', 
		height: 50, 
		textAlign: 'center',
		padding: 12,
		borderRadius: 5, 
		marginTop: 10, 
		shadowColor: '#000', 
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
});
