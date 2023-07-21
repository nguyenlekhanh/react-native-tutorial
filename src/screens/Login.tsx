import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Image, Text, TextInput, Alert} from 'react-native';
import CustomButton from '../customerButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}) {
  const [name, setName] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem('UserName')
        .then((value) => {
          if(value) {
            navigation.navigate('Home');
          }
        })
    } catch(error) {
      console.log(error);
    }
  }

  const setData = async () => {
    if (!name.length) {
      Alert.alert('Warning!', 'Please write your name!');
    } else {
        try{
            await AsyncStorage.setItem('UserName', name);
            navigation.navigate('Home');
        } catch(error) {
            console.log(error);
        }
    }
  };
  return (
    <View style={styles.body}>
      <Image
        style={styles.logo}
        source={require('../assets/asyncstorage.png')}
      />
      <Text style={styles.text}>Async Storage</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        onChangeText={value => setName(value)}
      />
      <CustomButton title="Login" color="#1eb900" onPressFunction={setData} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0080ff',
  },
  logo: {
    width: 100,
    height: 100,
    margin: 20,
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 130,
    marginBottom: 10,
  },
});
