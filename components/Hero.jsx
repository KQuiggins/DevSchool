import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Hero = () => {
  return (
    <Image 
        style={styles.heroImage}
        source={require('../assets/hero.webp')}
        resizeMode="cover"
    
    />
  )
}

export default Hero

const styles = StyleSheet.create({
    heroImage: {
        width: '100%',
        height: '100%',
        flex: 1,
    }
})