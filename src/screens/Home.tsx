import {Pressable, StyleSheet, Text, View} from 'react-native';
import GlobalStyle from '../utils/GlobalStyle';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home: React.FC = ({navigation}) => {
  const [name, setName] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem('UserName')
        .then((value) => {
          if(value) {
            setName(value);
          }
        })
    } catch(error) {
      console.log(error);
    }
  }

  const onPressHandler = () => {
    // navigation.navigate('Screen_B', {
    //   itemName: 'Item from Screen A', itemId: 12});
    //navigation.replace('Screen_B');
  };

  return (
    <View style={styles.body}>
      <Text style={[GlobalStyle.CustomerFont,
          styles.text]}>
            Welcome {name}

          </Text>
    </View>
  );
};

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

export default Home;
