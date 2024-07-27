import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import styles from "../styles/styles";

const ProfileSrceen = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require("../assets/Profile_1.jpg")}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Panachai Lormongkhonkit</Text>
      </View>
    </View>
  );
};

export default ProfileSrceen;



