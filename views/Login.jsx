import { Text, StyleSheet, View, TextInput, TouchableHighlight, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'

const LoginScreen = ({navigation}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const cancelLogin = () => {
        Alert.alert('Login cancelled')
        navigation.navigate('Home')
    }

    const createAccount = () => {
        navigation.navigate('Register')
    
    }

    const handleLogin = () => {
        if (!username) {
            Alert.alert('Please enter your username')
        }
        else if (!password) {
            Alert.alert('Please enter your password')
        }
        else {
            AsyncStorage.getItem(userLoggedIn, (err, result) => {
                if (result !== 'none') {
                    Alert.alert('User logged in already')
                    navigation.navigate('Home')
                }
                else {
                    AsyncStorage.getItem(username, (err, result) => {
                        if (result !== null) {
                            if (result !== password) {
                                Alert.alert('Password does not match our records')
                            }
                            else {
                                AsyncStorage.setItem(userLoggedIn, username, (err, result) => {
                                    Alert.alert(`${username} logged in`)
                                    navigation.navigate('Home')
                                })
                            }
                        }
                        else {
                            Alert.alert(`${username} not found`)
                        }
                    })
                }
            })
        }
    }
  return (
    <View>
      <Text>Login</Text>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})