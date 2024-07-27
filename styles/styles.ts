import { StyleSheet } from "react-native"

export default StyleSheet.create({
   container: {
      alignItems: "center",
      padding: 20,
      borderColor: "#f5f5f5", //background color
    },
    profileImage: {
      borderRadius: 50,
      width: 100,
      height: 100,
      marginRight: 30,
    },
    profileContainer: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      padding: 20,
      borderRadius: 50,
      backgroundColor: "white",
      elevation: 5,
      marginTop: 50,
    },
    profileName:{
      fontSize:17 ,
      fontWeight:'bold',
      marginTop:3,
      color:"#00acab",
    },
})