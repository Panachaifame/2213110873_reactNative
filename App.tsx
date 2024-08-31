import { View, Text } from "react-native";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import CreatePostScreen from "./screens/CreatePostScreen";

import { NativeScreenNavigationContainer } from "react-native-screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const App = (): React.JSX.Element => {
  const HomeStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="About" component={AboutScreen} />
        <HomeStack.Screen name="Create Post" component={CreatePostScreen}/>
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};
export default App;
