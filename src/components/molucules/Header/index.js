import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IconBackDark } from '../../../assets';
import { Gap } from '../../atoms';

const Header = (props) => {
	const { titleHeader } = props;
	return (
		<View style={styles.container}>
			<IconBackDark />
			<Text style={styles.text}>{titleHeader}</Text>
			<Gap width={24} />
		</View>
	);
};
export default Header;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		paddingVertical: 30,
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center',
	},
	text: {
		textAlign: 'center',
		flex: 1,
		fontSize: 20,
		color: '#112340',
	},
});
