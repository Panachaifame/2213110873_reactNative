// Only import react-native-gesture-handler on native platforms
import "react-native-gesture-handler";

import React, { useState } from "react";
import { HeaderButtonsProvider } from "react-navigation-header-buttons";
import { SafeAreaProvider } from "react-native-safe-area-context";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import CreatePostScreen from "./screens/CreatePostScreen";
import MenuScreen from "./screens/MenuScreen";
import ProductScreen from "./screens/ProductScreen";
import DetailScreen from "./screens/DetailScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "./screens/LoginScreen";
import Login from "./components/Login";
import Toast from "react-native-toast-message";

const Homestack = createNativeStackNavigator();
const ProductStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function HomeStackScreen() {
  return (
    <Homestack.Navigator
      initialRouteName="Home"
      screenOptions={{
        //Global
        // headerStyle: { backgroundColor: "#20b2aa" },
        // headerTintColor: "white",
        headerTitleStyle: { fontWeight: "bold" },
        //headerTitleAlign: "center",
      }}
    >
      <Homestack.Screen
        name="Home"
        component={HomeScreen}
        // options={{ title: "หน้าหลัก" }}
      />
      <Homestack.Screen
        name="About"
        component={AboutScreen}
        options={{
          //Screen
          title: "เกี่ยวกับเรา",
          headerStyle: { backgroundColor: "#20b2aa" },
          headerTintColor: "white",
          headerTitleAlign: "center",
        }}
      />
    </Homestack.Navigator>
  );
}

function ProductStackScreen() {
  return (
    <ProductStack.Navigator
      initialRouteName="Products"
      screenOptions={{
        //Global
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <ProductStack.Screen name="Products" component={ProductScreen} />
      <ProductStack.Screen name="Details" component={DetailScreen} />
    </ProductStack.Navigator>
  );
}

function LoginStackScreen() {
  return (
    <LoginStack.Navigator
      initialRouteName="Products"
      screenOptions={{
        //Global
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <LoginStack.Screen name="Login" component={LoginScreen} />
    </LoginStack.Navigator>
  );
}

function App(): React.JSX.Element {
  const [isLogin] = useState(false);

  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <HeaderButtonsProvider stackType="native">
            {isLogin ? (
              <Drawer.Navigator
                screenOptions={{ headerShown: false }}
                drawerContent={(props) => <MenuScreen {...props} />}
              >
                <Drawer.Screen name="HomeStack" component={HomeStackScreen} />
                <Drawer.Screen
                  name="ProductStack"
                  component={ProductStackScreen}
                />
              </Drawer.Navigator>
            ) : (
              <LoginStackScreen />
            )}
          </HeaderButtonsProvider>
        </NavigationContainer>
      </SafeAreaProvider>
      <Toast />
    </>
  );
}

export default App;
