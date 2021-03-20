import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { Button, Gap, Header, Input } from '../../components';

export default function Register() {
	useEffect(() => {
		const requestLocationPermission = async () => {
			if (Platform.OS === 'ios') {
				getOneTimeLocation();
				subscribeLocationLocation();
			} else {
				try {
					const granted = await PermissionsAndroid.request(
						PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
						{
							title: 'Location Access Required',
							message: 'This App needs to Access your location',
						}
					);
					if (granted === PermissionsAndroid.RESULTS.GRANTED) {
						//To Check, If Permission is granted
						getOneTimeLocation();
						subscribeLocationLocation();
					} else {
						setLocationStatus('Permission Denied');
					}
				} catch (err) {
					console.warn(err);
				}
			}
		};
		requestLocationPermission();
		return () => {};
	}, []);

	const getOneTimeLocation = () => {
		setLocationStatus('Getting Location ...');
		Geolocation.getCurrentPosition(
			//Will give you the current location
			(position) => {
				setLocationStatus('You are Here');
				const currentLongitude = JSON.stringify(position.coords.longitude);
				//getting the Longitude from the location json
				const currentLatitude = JSON.stringify(position.coords.latitude);
				//getting the Latitude from the location json
				setCurrentLongitude(currentLongitude);
				//Setting state Longitude to re re-render the Longitude Text
				setCurrentLatitude(currentLatitude);
				//Setting state Latitude to re re-render the Longitude Text
			},
			(error) => {
				setLocationStatus(error.message);
			},
			{ enableHighAccuracy: false, timeout: 30000, maximumAge: 1000 }
		);
	};

	const subscribeLocationLocation = () => {
		watchID = Geolocation.watchPosition(
			(position) => {
				setLocationStatus('You are Here');
				//Will give you the location on location change
				console.log(position);
				const currentLongitude = JSON.stringify(position.coords.longitude);
				//getting the Longitude from the location json
				const currentLatitude = JSON.stringify(position.coords.latitude);
				//getting the Latitude from the location json
				setCurrentLongitude(currentLongitude);
				//Setting state Longitude to re re-render the Longitude Text
				setCurrentLatitude(currentLatitude);
				//Setting state Latitude to re re-render the Longitude Text
			},
			(error) => {
				setLocationStatus(error.message);
			},
			{ enableHighAccuracy: false, maximumAge: 1000 }
		);
	};

	const [address, setAddress] = useState({
		latitude: 6.2088,
		longitude: 106.8456,
	});
	return (
		<SafeAreaView style={styles.page}>
			<Header titleHeader='Daftar Account' />
			<ScrollView>
				<View style={styles.content}>
					<Input label='Full Name' padBot={16} />
					<Input label='Email' padBot={16} />
					<Input label='Address' padBot={16} />
					<MapView style={styles.map}>
						<Marker coordinate={address}></Marker>
					</MapView>
					<Input label='Password' padBot={16} />
					<Button title='Continue' />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	page: {
		backgroundColor: 'white',
		flex: 1,
	},
	content: {
		padding: 20,
		paddingTop: 0,
	},
	map: {
		display: 'flex',
		flexDirection: 'row',
		width: '100%',
		height: 200,
		marginBottom: 16,
	},
});
