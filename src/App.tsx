/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import FontAweSome5 from 'react-native-vector-icons/FontAwesome5Pro';

import {StyleSheet, Text, View, Pressable} from 'react-native';
import Home from './screens/Home';
import Login from './screens/Login';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Provider } from 'react-redux';
import { Store } from './redux/store';

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Login'
          >
          <Stack.Screen name="Login" 
            component={Login}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen 
            name="Home" 
            component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    margin: 10,
    fontFamily: 'IBMPlexSans-SemiBold',
  },
});

export default App;
