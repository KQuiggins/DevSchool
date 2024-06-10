import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	Image,
	Alert,
} from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const GlobalHeader = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState('');
	const navigation = useNavigation();

	

    const toggleUser = async () => {
        if (isLoggedIn) {
            try {
                await AsyncStorage.setItem('userLoggedIn', 'none');
                setIsLoggedIn(false);
                setLoggedInUser('');
                Alert.alert('User logged out');
            } catch (error) {
                console.error('AsyncStorage error:', error);
            }
        } else {
            navigation.navigate('Login');
        }
    };
    

    useEffect(() => {
        const checkUserLoggedIn = async () => {
            try {
                const result = await AsyncStorage.getItem('userLoggedIn');
                if (result === 'none') {
                    console.log('NONE');
                } else if (result !== null) {
                    await AsyncStorage.setItem('userLoggedIn', 'none');
                    console.log('Set user to none');
                } else {
                    setIsLoggedIn(true);
                    setLoggedInUser(result);
                }
            } catch (error) {
                console.error('Error fetching userLoggedIn:', error);
            }
        };
    
        checkUserLoggedIn();
    }, []); // Empty dependency array ensures this runs only once on mount
    
      

	let display = 'userLoggedIn' ? loggedInUser : 'Tap to Login';

	return (
		<SafeAreaView >
			<View style={styles.headStyle}>
				<Image
					style={styles.imageStyle}
					source={require('./img/logo.png')}
				/>

				<Text style={styles.headText} onPress={toggleUser}>
					{display}
				</Text>
			</View>
		</SafeAreaView>
	);
};

export default GlobalHeader;

const styles = StyleSheet.create({
	headText: {
		textAlign: 'right',
		textAlignVertical: 'flex-end',
		color: '#ffffff',
		flex: 3,
        marginTop: 30,
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
