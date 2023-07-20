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
import ScreenA from './screenA';
import ScreenB from './screenB';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === 'Screen_A') {
              iconName = 'autoprefixer';
              size = focused ? 25 : 20;
              // color = focused? '#f0f' : '#555';
            } else if (route.name === 'Screen_B') {
              iconName = 'btc';
              size = focused ? 25 : 20;
              // color = focused? '#f0f' : '#555';
            }
            return <FontAweSome5 name={iconName} size={size} 
              color={color}
            />;
          },
        })}
          tabBarOptions={{
            activeTintColor: '#f0f',
            inactiveTintColor: '#555', 
            activeBackgroundColor: '#fff',
            inactiveBackgroundColor: '#999',
            labelStyle: { fontSize: 14 },
          }}
        >
        <Tab.Screen name="Screen_A" component={ScreenA}
          options={{ tabBarBadge: 3 }}
        />
        <Tab.Screen name="Screen_B" component={ScreenB} />
      </Tab.Navigator>
    </NavigationContainer>
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
    fontWeight: 'bold',
    margin: 10,
  },
});

export default App;
