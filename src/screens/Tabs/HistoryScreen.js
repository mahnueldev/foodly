import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { container } from "../../styling/globalStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';


const getData = async () => {
  try {
    const jsonItem = await AsyncStorage.getItem('@storage_Key')
    return jsonItem != null ? JSON.parse(jsonItem) : null;
  } catch(e) {
    // error reading value
  }
}
getData();
console.log(getData);
const HistoryScreen = () => {
  return (
    <View style={styles.container}>
      
    </View>
  );
};

const styles= StyleSheet.create({
    container
  })

export default HistoryScreen;
