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
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const [items, setItems] = useState([
    {key: 1, item: 'Item 1'},
    {key: 2, item: 'Item 2'},
    {key: 3, item: 'Item 3'},
    {key: 4, item: 'Item 4'},
    {key: 5, item: 'Item 5'},
    {key: 6, item: 'Item 6'},
    {key: 7, item: 'Item 7'},
    {key: 8, item: 'Item 8'},
  ]);
  
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...items, {key: 69, item: 'item 69'}]);
    setRefreshing(false);
  }

  return (
      <ScrollView 
        style={styles.body}
        refreshControl={
          <RefreshControl 
            refreshing={ refreshing }
            onRefresh={onRefresh}
            colors={['#ff00ff']}
          />
        }
      >
        {
          items.map((object) => {
            return (
              <View style={styles.item} key={object.key}>
                <Text style={styles.text}>{object.item}</Text>
              </View>
            )
          })
        }
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#000',
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10
  }
});

export default App;
