import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";

interface News {
  title: string;
  publishedAt: string;
  description: string;
  url:string,
}

const NewsApp = () => {
  //state for user & load
  const [news, setNews] = useState<News[]>([]); //calls form backend
  const [loading, setLoading] = useState(true);

  const API_KEY = "550656dc22a24d7eaba149704b725f16"; // ใส่ API Key ของนักศึกษาที่นี่
  const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

  //useEffect for API when component mount
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((news) => {
        setNews(news.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const _renderItem = ({ item }: { item: News }) => (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.headline}>{item.title}</Text>
      <Text style={styles.date}>
        {new Date(item.publishedAt).toLocaleDateString()}
      </Text>
      <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      {loading ? ( //ถ้ายังโหลดข้อมูลอยู่จะแสดง ActivityIndicator
        <ActivityIndicator size="large" color="red" />
      ) : (
        //ถ้าข้อมูลถูกโหลดมาแล้วจะแสดง FlatList
        <FlatList
          data={news}
          renderItem={_renderItem}
          keyExtractor={(item) => item.url}
        />
      )}
    </View>
  );
};

export default NewsApp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    padding: 16,
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
  card: {
    backgroundColor: "#DEF9C4",
    padding: 16,
    marginVertical: 8,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  headline: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: "#888",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#333",
  },
});