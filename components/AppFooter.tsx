import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppFooter = () :React.JSX.Element =>{
    const hello = "Hello TNI Footer";
    const hello2 = <Text>Hello JSX</Text>;
    const isLogin =  true;
  return (
    <View>
      <Text style={styles.mytext}>
        {hello} Date:{new Date().toLocaleDateString()}
        </Text>
        {hello2}
        {isLogin && <Text>Welcome Boss</Text>}
        {isLogin ?<Text>Welcome Marry</Text> :<Text>forgot to login</Text>
        }
    </View>
  )
}

export default AppFooter

const styles = StyleSheet.create({
    mytext:{
        color:'red'

    }
})