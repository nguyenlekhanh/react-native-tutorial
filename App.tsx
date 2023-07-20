/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {
  Alert,
  Button,
  FlatList,
  Linking,
  Pressable,
  RefreshControl,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const onPressHandler = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
    } else {
      // Alert.alert(
      //   'Warning',
      //   'The name must be longer than 3 characters',
      //   [
      //     {
      //       text: 'Do not show again',
      //       onPress: () => console.warn('Do not show again!'),
      //       style: 'destructive',
      //     },
      //     {
      //       text: 'Cancel',
      //       onPress: () => console.warn('Cancel Pressed!'),
      //       style: 'destructive',
      //     },
      //     {
      //       text: 'OK',
      //       onPress: () => console.warn('OK Pressed!'),
      //       style: 'destructive',
      //     },
      //   ],
      //   {cancelable: true, onDismiss: () => console.warn('Alert dismissed!')},
      // );

      ToastAndroid.show('The name must be longer than 3 characters',
        ToastAndroid.SHORT)
    }
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Please write your name:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. John"
        onChangeText={value => setName(value)}
      />
      {/* <Button title={submitted ? 'Clear' : 'Submit'}
        onPress={onPressHandler}
        disabled={submitted}
        color='#00f'
      ></Button> */}
      <TouchableOpacity
        style={styles.button}
        onPress={onPressHandler}
        activeOpacity={0.2}>
        <Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
      </TouchableOpacity>
      <Pressable style={styles.button} onPress={onPressHandler}>
        <Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
      </Pressable>
      {submitted ? (
        <Text style={styles.text}>You are registered as {name}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 20,
    margin: 10,
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: '#00ff00',
    alignItems: 'center',
  },
});

export default App;
