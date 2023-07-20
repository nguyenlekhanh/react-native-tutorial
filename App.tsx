/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import {
  Button,
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const onClickHandler = () => {
    setCount(count + 1);
    setNumber(number + 5);
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{number}</Text>
      <Button title="Update State"
        onPress={onClickHandler}></Button>
      <Text style={styles.text}>You clicked {count} {count > 1 ? "times" : "time"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  }
});

export default App;
