import {Text, View } from 'react-native'
import React from 'react'
import { stylesPractice } from '../styles/styles'

interface AppHeaderProps{
    fullname:String;
    message:String;
}

const AppHeader = ({fullname,message}:AppHeaderProps):React.JSX.Element => {
  return (
    <View style ={stylesPractice.header}>
        <Text style={stylesPractice.headerText}>
            Input your fullname :
        </Text>
        <Text style={stylesPractice.headerText}>
            {fullname}
        </Text>
        <Text style={stylesPractice.subtitleText}>
            {message}
        </Text>
    </View>
  );
};

export default AppHeader

