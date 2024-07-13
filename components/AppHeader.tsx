import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type AppHeaderProps={
    nameH:String;
    textH:String;
}

const AppHeader = ({nameH,textH}:AppHeaderProps):React.JSX.Element => {
  return (
    <View style ={styles.header}>
        <Text style={styles.headerText}>
            {nameH}
        </Text>
        <Text style={styles.subtitleText}>
            {textH}
        </Text>
    </View>
  )
}

export default AppHeader

const styles = StyleSheet.create({
    header: {
    backgroundColor: '#AEC6CF',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    },
    headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    },
    subtitleText: {
    fontSize: 16,
    color: '#fff',
    },
    });