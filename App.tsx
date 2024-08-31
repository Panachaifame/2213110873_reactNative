import { View, Text } from "react-native";
import React from "react";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import CreatePostScreen from "./screens/CreatePostScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function App(): React.JSX.Element {
  const Homestack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Homestack.Navigator 
      initialRouteName="Home"
      screenOptions={{
          headerStyle:{backgroundColor:'#00dea5'},
          headerTintColor:'white',
          headerTitleStyle:{fontWeight:'bold'},
          //headerTitleAlign:'center'
      }}
      >
        <Homestack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{title:'หน้าหลัก'}}
        />
        <Homestack.Screen 
        name="About" 
        component={AboutScreen} 
        /* options={{title :"เกี่ยวกับเรา",
        headerStyle:{backgroundColor:'#f2f2'},
        headerTintColor:'white',
        headerTitleStyle:{fontWeight:'Bold'},
        headerTitleAlign:'center'
        }} */
        
        />
        <Homestack.Screen name="CreatePost" component={CreatePostScreen} />
      </Homestack.Navigator>
    </NavigationContainer>
  );
}

export default App;