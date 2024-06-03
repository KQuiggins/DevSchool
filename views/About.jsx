import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

const aboutDevSchool = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur porro dolores, voluptate eum esse, magni assumenda ipsa recusandae qui, ipsum veritatis nostrum provident dicta aliquid.`

const whatDevSchool = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur porro dolores, voluptate eum esse, magni assumenda ipsa recusandae qui, ipsum veritatis nostrum provident dicta aliquid.`

const About = () => {
	return (
		<ScrollView style={styles.container}>
			<Image style={styles.pics} source={require('../components/img/')}/>
			<Text style={styles.aboutTitle}>Meet your mentors</Text>
			<Text style={styles.aboutText}>{aboutDevSchool}</Text>
			<Image style={styles.pics} source={require('../components/img/')}/>
			<Text style={styles.aboutTitle}>Our mission</Text>
			<Text style={styles.aboutText}>{whatDevSchool}</Text>
		</ScrollView>
	);
};

export default About;

const styles = StyleSheet.create({
	container: {
		paddingTop: 20,
	},
	pics: {
		
		height: 300,
		
	},
	aboutTitle: {
		fontSize: 24,
		fontWeight: 'bold',
		paddingTop: 10,
		textAlign: 'center',
	},
	aboutText: {
		fontSize: 16,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 10,
	},
});
