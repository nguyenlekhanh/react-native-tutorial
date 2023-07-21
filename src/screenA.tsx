import {Pressable, StyleSheet, Text, View} from 'react-native';

const ScreenA: React.FC = ({navigation}) => {
  const onPressHandler = () => {
    // navigation.navigate('Screen_B', {
    //   itemName: 'Item from Screen A', itemId: 12});
    //navigation.replace('Screen_B');
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen A</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({backgroundcolor: pressed ? '#ddd' : '#0f0'})}>
        <Text style={styles.text}>Go to Screen B</Text>
      </Pressable>
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

export default ScreenA;
