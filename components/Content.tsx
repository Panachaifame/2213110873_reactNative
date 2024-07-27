import { Button, StyleSheet, Text, View ,Alert } from 'react-native'
import React from 'react'

type ContextProps = {
  nameC:string;
  textC:string;
}

const onClick = (nameC:string) => {
  Alert. alert("Hello",nameC);
};

const content = ({textC,nameC}:ContextProps):React.JSX.Element => {
  return (
    <View style={styles.content}>
      <Text style={styles.text}>{textC}</Text>
      <Button title="Click me" onPress={() => onClick(nameC)} />
    </View>
  )
}

export default content

const styles = StyleSheet.create({
    content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
    text: {
    fontSize: 18,

    marginBottom: 20,
    },
    });