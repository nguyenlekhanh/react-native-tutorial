import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface customerButtonProps {
    title: string,
    onPressFunction: () => void
}

const CustomButton = (props) => {
    return (
        <Pressable
         onPress={props.onPressFunction}
         android_ripple={{ color: '#00f' }}
         style={(pressed) => [
            {backgroundColor: pressed ? '#dddddd' : props.color},
            styles.button,
            {...props.style}
         ]}
        >
          <Text style={styles.text}>
            {props.title ? 'Clear' : 'Submit'}
          </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#000',
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
    },
    button: {
        width: 150,
        height: 50,
        backgroundColor: '#00ff00',
        alignItems: 'center',
    },  
})

export default CustomButton;