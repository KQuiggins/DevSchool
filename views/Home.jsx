import { StyleSheet, Text, View } from 'react-native'
import Hero from '../components/Hero'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <Hero />
        <Text style={styles.text}>Welcome to DevSchool</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        position: 'absolute',
        top: 100,
    }
})