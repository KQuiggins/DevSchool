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
        paddingTop: '45%',
        paddingBottom: '5%',
    },
    heading: {
        fontSize: 16,
        flex: 1,
        color: '#fff',
        fontWeight: 'bold'
    },
    inputs: {
        flex: 1,
        width: '80%',
        marginTop: 12,
        height: 45,
        borderWidth: 1,
        fontSize: 16,
        fontColor: '#000000',

    },
    labels: {
        paddingBottom: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
    buttons: {
        margin: 5,
        fontSize: 16,
        backgroundColor: '#0066cc',
        color: '#fff',
        width: '150',
        height: 50,
        textAlign: 'center',
        padding: 15
    }
})