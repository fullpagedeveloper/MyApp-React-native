import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function Input({ label, padBot }) {
	return (
		<View style={padBot && { paddingBottom: padBot }}>
			<Text style={styles.label}>{label}</Text>
			<TextInput style={styles.input} />
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		borderRadius: 10,
		borderWidth: 1,
		padding: 12,
		borderColor: '#E9E9E9',
	},
	label: {
		fontSize: 16,
		color: '#7D8797',
		paddingBottom: 6,
	},
});
