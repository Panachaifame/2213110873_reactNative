import { Button, StyleSheet, Text, View ,Alert } from 'react-native'
import React from 'react'

type ContextProps = {
  nameC:string;
  textC:string;
}

//const onClickMe = () => {Alert. alert("Hello",nameC)}; อันนี้ไม่ได้พยายามแล้วครับ

const content = ({textC,nameC}:ContextProps):React.JSX.Element => {
  return (
    <View style={styles.content}>
      <Text style={styles.text}>
        {textC}
      </Text>
      <Button
          title ="Click Me"
          onPress = {()=>Alert.alert("Hello",nameC)}
          color = "blue"
      ></Button>
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