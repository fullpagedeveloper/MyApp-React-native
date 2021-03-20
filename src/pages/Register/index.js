import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { Button, Gap, Header, Input } from '../../components';

export default function Register() {
  return (
    <View style={styles.page}>
      <Header titleHeader='Daftar Account' />
      <View style={styles.content}>
        <Input label='Full Name' />
        <Gap height={16} />
        <Input label='Email' />
        <Gap height={16} />
        <Input label='Address' />
        <Gap height={16} />
        {/* <MapView style={styles.map} /> */}
        <Gap height={16} />
        <Input label='Password' />
        <Gap height={40} />
        <Button title='Continue' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
  map: {
    width: 100,
    height: 100,
  },
});
