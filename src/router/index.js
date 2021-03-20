import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GetStarted, Login, Register, SplashScreen } from '../pages';

const Stack = createStackNavigator();
//initialRouteName='Splash' untuk memilih halaman default

const Router = () => {
  return (
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen
        name='Splash'
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='GetStarted'
        component={GetStarted}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Register'
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;
