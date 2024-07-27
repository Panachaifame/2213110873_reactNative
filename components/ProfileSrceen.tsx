import { StyleSheet, Text, View, Image, Button } from "react-native";
import React, { useState } from "react";
import styles from "../styles/styles";

const ProfileSrceen = (): React.JSX.Element => {
  const [name, setName] = useState("Panachai Lormngkhonkit");
  const [Img, setImg] = useState(require("../assets/Profile_1.jpg"));
  const handleChangeName = () => {
    setName("New Name");
  };
  const handleChangeImg = () => {
    setImg(require("../assets/Profile_2.jpg"));
  };
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={Img} style={styles.profileImage} />
        <View>
          <Text style={styles.profileName}>{name}</Text>
          <Button title="CHANGE NAME" onPress={handleChangeName} />
          <Text></Text>
          <Button title="CHANGE IMAGE" onPress={handleChangeImg} />
        </View>
      </View>
    </View>
  );
};

export default ProfileSrceen;
