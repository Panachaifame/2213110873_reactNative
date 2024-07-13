import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, View, Button } from "react-native";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";


export default function App() {
  const onClickMe = () => {
    Alert.alert("Hi", "hello React.js");
  };

  const user = [
    { id: 1001, name: "John" },
    { id: 1002, name: "Mary" },
  ];
  return (
    <View style={styles.container}>
      <AppHeader title="This is Header " year={2018}/>
      <AppHeader title="This is Header 2 " year = {2024}/>
      <Text>Hello React Native</Text>
      {user.map((data,index) => {
        return(
          <Text key={data.id}>
            No.{index+1} ID:{data.id} Name:{data.name}
          </Text>
        )

      })}
      <Button
        title="Click Me"
        onPress={onClickMe}
        color="red"
        /* onPress={()=>{Alerrt.alert('Hi','React Native is Fun!!');
      }} */
      />
      <StatusBar style="auto" />
      <AppFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
