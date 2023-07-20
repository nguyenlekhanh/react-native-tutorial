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
  Image,
  ImageBackground,
  Linking,
  Modal,
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
import CustomButton from './customerButton';
import Header from './Header';

function App(): JSX.Element {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const onPressHandler = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
    } else {
      setShowWarning(true);
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

      ToastAndroid.show(
        'The name must be longer than 3 characters',
        ToastAndroid.SHORT,
      );
    }
  };

  return (
    <ImageBackground
      style={styles.body}
      source={{
        uri: 'http://cdn.pixabay.com/photo/2013/07/12/12/35/textture-145968_960_720.png',
      }}>
        <Header />
      <View style={styles.body}>
        <Modal
          visible={showWarning}
          onRequestClose={() => {
            setShowWarning(false);
          }}
          transparent
          animationType="fade"
          hardwareAccelerated>
          <View style={styles.centered_view}>
            <View style={styles.warning_modal}>
              <View style={styles.warning_title}>
                <Text style={styles.text}>WARNING!</Text>
              </View>
              <View style={styles.warning_body}>
                <Text style={styles.text}>
                  The name must be longer than 3 characters
                </Text>
              </View>
              <Pressable
                onPress={() => setShowWarning(false)}
                style={styles.warning_button}
                android_ripple={{color: '#fff'}}>
                <Text style={styles.text}>OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
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
        <CustomButton 
          onPressFunction={onPressHandler}
          title={submitted ? 'Clear' : 'Submit'}
          style={{margin:10}}
        />
        {/* <Pressable style={styles.button} onPress={onPressHandler}>
          <Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
        </Pressable> */}
        {submitted ? (
          <View style={styles.body}>
            <Text style={styles.text}>You are registered as {name}</Text>
            <Image
              style={styles.image_error}
              source={require('./assets/done.jpg')}
              resizeMode="stretch"
            />
          </View>
        ) : (
          <Image
            style={styles.image_error}
            source={{
              uri: 'http://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993_960_720.png',
            }}
            resizeMode="stretch"
            blurRadius={3}
          />
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
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
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
  },
  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning_button: {
    backgroundColor: '#00ffff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  image_error: {
    width: 100,
    height: 100,
    margin: 10,
  },
});

export default App;
