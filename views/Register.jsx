import { StyleSheet, Text, View, TouchableHighlight, Alert, TextInput } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'

const RegisterScreen = ({navigation}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    
    const cancelRegister = () => {
        Alert.alert('Registration cancelled')
        navigation.navigate('Home')
    
    }
    const handleRegister = () => {
        if (!username) {
            Alert.alert('Please fill in your name')
        }
        else if (password !== passwordConfirmation) {
            Alert.alert('Passwords do not match')
        }
        else {
            AsyncStorage.getItem(username, (err, result) => {
                if (result !== null) {
                    Alert.alert(`${username} already exists, please login or choose a different username`)
                }
                else {
                    AsyncStorage.setItem(username, password, (err, result) => {
                        Alert.alert(`${username} account created`)
                        navigation.navigate('Home')
                    })
                }
            })
        }
    }
  return (
    <View style={styles.container}>
      
      <Text style={styles.heading}>Register Account</Text>
        
        <TextInput
            style={styles.inputs}
            placeholder="Enter your username"
            onChangeText={setUsername}
            value={username}
        />
        <Text style={styles.labels}>Enter Username</Text>

        <TextInput 
            style={styles.inputs}
            placeholder="Enter your password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
        />
        <Text style={styles.labels}>Enter Password</Text>

        <TextInput 
            style={styles.inputs}
            placeholder="Confirm your password"
            onChangeText={setPasswordConfirmation}
            value={passwordConfirmation}
            secureTextEntry={true}
        />
        <Text style={styles.labels}>Confirm Password</Text>

        <TouchableHighlight onPress={handleRegister} underlayColor='#00000'>
            <Text style={styles.buttons}>
                Register
            </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={cancelRegister} underlayColor='#00000'>
            <Text style={styles.buttons}>
                Cancel
            </Text>
        </TouchableHighlight>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
        paddingTop: 30, 
        paddingBottom: 30,
        backgroundColor: '#f5f5f5', 
    },
    heading: {
        fontSize: 20, 
        fontWeight: 'bold',
        color: '#333', 
        marginBottom: 20, 
    },
    inputs: {
        width: '80%',
        marginTop: 12,
        height: 45,
        borderWidth: 1,
        borderColor: '#ccc', 
        fontSize: 16,
        color: '#000', 
        padding: 10, 
        borderRadius: 5,
    },
    labels: {
        paddingBottom: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#666', 
        alignSelf: 'center', 
        width: '80%', 
    },
    buttons: {
        marginTop: 10,
        fontSize: 16,
        backgroundColor: '#0066cc',
        color: '#fff',
        width: '80%', 
        height: 50,
        textAlign: 'center',
        padding: 12,
        borderRadius: 5, 
        elevation: 2,
    }
});
