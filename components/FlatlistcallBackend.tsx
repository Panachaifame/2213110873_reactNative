import {
    FlatList,
    ActivityIndicator,
    StyleSheet,
    Text,
    View,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  
  interface User {
    title: string;
    publishedAt: string;
    description: string;
  }
  const NewApp = () => {
    const [data, setData] = useState<User[]>([]);
    const [loading, setloading] = useState(true);
  
    useEffect(() => {
      fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=653e6c13f9fe4d7fa18459b44ac215e4"
      )
        .then((response) => response.json())
        .then((data) => {
          // Assuming `articles` contains the array of news items
          setData(data.articles);
          setloading(false);
        })
        .catch((error) => {
          console.error(error);
          setloading(false);
        });
    }, []);
  
    const _renderItem = ({ item }: { item: User }) => (
      <View style={styles.card}>
        <Text style={styles.headline}>{item.title}</Text>
        <Text style={styles.date}>{new Date(item.publishedAt).toDateString()}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    );
  
    return (
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" color="red" />
        ) : (
          <FlatList
            data={data}
            renderItem={_renderItem}
            keyExtractor={(item) => item.title}
          />
        )}
      </View>
    );
  };
  export default NewApp;
  
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
      backgroundColor: "#fff",
      padding: 16,
      marginVertical: 8,
      borderRadius: 10,
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
  