import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const GlobalHeader = () => {
	const [userLoggedIn, setUserLoggedIn] = useState('false');
	const [loggedInUser, setLoggedInUser] = useState('');
	const navigation = useNavigation();

	const toggleUser = () => {
		if (userLoggedIn) {
			AsyncStorage.setItem('userLoggedIn', 'none', () => {
				setUserLoggedIn('false');
				setLoggedInUser('');
				Alert.alert('User logged out');
			});
		} else {
			navigation.navigate('Login');
		}
	};

	useEffect(() => {
		AsyncStorage.getItem('userLoggedIn', (err, result) => {
			if (result === 'none') {
				console.log('NONE');
			} else if (result === null) {
				AsyncStorage.setItem(userLoggedIn, 'none', (err, user) => {
					console.log('Set user to NONE');
				});
			} else {
				setUserLoggedIn('true');
				setLoggedInUser(result);
			}
		});
	});

	let display = userLoggedIn ? loggedInUser : 'Tap to Login';

	return (
		<View style={styles.headStyle}>
			<Image
				style={styles.imageStyle}
				source={require('./img/logo.png')}
			/>

			<Text style={styles.headText} onPress={toggleUser}>
				{display}
			</Text>
		</View>
	);
};

export default GlobalHeader;

const styles = StyleSheet.create({
	headText: {
        textAlign: 'right',
        textAlignVertical: 'flex-end',
		color: '#ffffff',
		flex: 4,
        fontSize: 20,
        
	},
	headStyle: {
		backgroundColor: '#35605a',
        flexDirection: 'row',
	},
	imageStyle: {
        alignSelf: 'center',
		height: 75,
		width: 50,
		flex: 1,
	},
});
