import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ILGetstarted, ILLogo } from '../../assets';
import { Button, Gap } from '../../components';

const GetStarted = ({ navigation }) => {
  return (
    <ImageBackground source={ILGetstarted} style={styles.page}>
      <View>
        <ILLogo width={150} height={150} />
        <Text style={styles.title}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly
        </Text>
      </View>

      <View>
        <Button
          title='Get Started'
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={16} />
        <Button
          title='Sign In'
          type='secondary'
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    paddingTop: 50,
    fontSize: 20,
    color: 'white',
  },
});
