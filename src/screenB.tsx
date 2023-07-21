import {Pressable, StyleSheet, Text, View} from 'react-native';

const ScreenB: React.FC = ({navigation, route}) => {
  const {itemName, itemId} = route.params;

  const onPressHandler = () => {
    //navigation.navigate('Screen_A');
    //navigation.goBack();
    navigation.setParams({ itemId: 14 })
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen B</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({backgroundcolor: pressed ? '#ddd' : '#0f0'})}>
        <Text style={styles.text}>Go to Screen A</Text>
        
        <Text style={styles.text}>{itemName}</Text>
        <Text style={styles.text}>Id: {itemId}</Text>
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
    fontWeight: 'bold',
    margin: 10,
  },
});

export default ScreenB;
