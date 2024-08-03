import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, View, Button } from "react-native";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Content from "./components/Content"


export default function App():React.JSX.Element {

  return (
    <View style={styles.container}>
      <AppHeader nameH = "Panachai Lormongkhonkit"  textH = "Message from App.tsk" />
      <Content textC = "Message from App.tsx" nameC="Panachai Lormongkhonkit"/>
      <StatusBar style="auto"/>
      <AppFooter nameF = "Thai-Nichi Institute of technology"/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});