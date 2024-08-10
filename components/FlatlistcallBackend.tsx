import { FlatList,ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

interface User{
    id:number;
    name:string;
    email:string;
}
const FlatlistcallBackend=()=>{
    const[data,setData] =useState<User[]>([]);
    const[loading,setloading] = useState(true)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(data =>{
            setData(data);
            setloading(false);
        })
        .catch(error=>{
            console.error(error);
            setloading(false);
        })
    },[])

    const _renderItem =({item}:{item:User})=>(
        <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
        </View>
      )

  return (
    <View style={styles.container}>
        {loading?(
            <ActivityIndicator size="large" color="red"/>
        ):(
            <FlatList
            data ={data}
            renderItem={_renderItem}
            keyExtractor={item=>item.id.toString()}/>
        )
        }

    </View>
  )
}
export default FlatlistcallBackend
const styles = StyleSheet.create({
    container: {
    justifyContent: 'center',
    paddingTop: 50,
    },
    item: {
    backgroundColor: '#00c893',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    },
    name: {
    fontSize: 20,
    fontWeight: 'bold',
    },
    email: {
    fontSize: 16,
    },
    });