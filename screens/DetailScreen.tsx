import {
    View,
    Text,
    ActivityIndicator,
    ListRenderItem,
    StyleSheet,
    Dimensions,
  } from "react-native";
  import React, { useCallback, useState } from "react";
  import {
    useFocusEffect,
    useNavigation,
    useRoute,
  } from "@react-navigation/native";
  import { findProductbyId } from "../services/product-service";
  import { FlatList } from "react-native-gesture-handler";
  import { ListItem, Tile } from "@rneui/base";
  const DetailScreen = () => {
    const route = useRoute<any>();
    const navigation = useNavigation<any>();
    const [detail, setDetail] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerTitle: route.params.title,
      });
    }, [navigation, route]);
    const getProductbyId = async () => {
      try {
        setLoading(true);
        const responce = await findProductbyId(route.params.id);
        setDetail(responce.data.data);
        // console.log(responce.data.data);
      } catch (error: any) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    useFocusEffect(
      useCallback(() => {
        getProductbyId();
      }, [])
    );
    const _renderItem: ListRenderItem<any> = ({ item }) => (
      <>
        <Tile
          imageSrc={{
            uri: "https://as2.ftcdn.net/v2/jpg/05/74/46/79/1000_F_574467905_1YfSt0MUR4K5Uux2RwBBG8hpUG43tUjB.jpg",
            cache: "force-cache",
          }}
          title={item.ch_title}
          titleStyle={styles.titleStyle}
          containerStyle={styles.tileContainer}
          caption={item.ch_dateadd}
          captionStyle={styles.captionStyle}
          featured
          activeOpacity={0.9}
          width={Dimensions.get("screen").width - 20} // ลบขอบเล็กน้อยทั้งสองข้าง
          
        />
      </>
    );
    if (loading) {
      return (
        <View>
          <ActivityIndicator size="large" color="blue" />
        </View>
      );
    }
    return (
      <View style={{marginTop:10}}>
        <FlatList
          data={detail}
          renderItem={_renderItem}
          keyExtractor={(item: any) => item.ch_id.toString()}
          onRefresh={async () => {
            await getProductbyId();
          }}
          refreshing={loading}
          contentContainerStyle={styles.listContent}
        />
      </View>
    );
  };
  export default DetailScreen;
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#f0f0f0", // สีพื้นหลัง
    },
    listContent: {
      paddingHorizontal: 10, // การเว้นวรรคขอบซ้ายและขวาเท่ากัน
    },
    titleStyle: {
      fontSize: 25,
      fontWeight: "bold",
      color: "#B8001F", // สีขาวสำหรับชื่อ
      
    },
    tileContainer: {
      borderRadius: 10, //กำหนดให้มุมของ container มีความโค้งมน
      overflow: "hidden", //กำหนดให้เนื ้อหาที่อาจล้นออกจากขอบของ container ไม่แสดงผล
      marginBottom: 10, //กำหนดระยะห่างจากขอบล่างของ container ไปยัง element ต่อไปที่อยู่ด้านล่าง
      elevation: 5, // เงาสำหรับ Android
      shadowOffset: { width: 0, height: 2 }, //กำหนดตำแหน่งของเงาที่แสดงผล
      shadowOpacity: 0.25, //กำหนดระดับความโปร่งแสงของเงา
      shadowRadius: 3.84, //กำหนดรัศมีของการกระจายตัวของเงา
      opacity: 0.75, // ความโปร่งใสของภาพ , ค่าน้อยจะโปร่งใสมาก
    },
    captionStyle: {
      fontSize: 14,
      color: "#F5004F", // สีขาวสำหรับวันที่
    },
  });