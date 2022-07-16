import React from "react";
import { Text, StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  container,
  font_A1,
  font_P1,
  font_P3,
  button_2,
  magSpace_TB,
  box,
} from "../../styling/globalStyles";

const getData = async () => {
  try {
    const searchInfo = await AsyncStorage.getItem("searchInfo");
    return searchInfo != null ? JSON.parse(searchInfo) : null;
  } catch (e) {
    // error reading value
  }
};
getData();
console.log(getData);
const HistoryScreen = () => {
  // return (
  //   <View style={styles.container}>
  //     {item && (
  //       <>
  //     <View style={[magSpace_TB, box]}>
  //       <Text style={styles.font_P1}> Barcode</Text>
  //       <Text style={styles.font_P3}> {item.id}</Text>
  //     </View>

  //     <View style={[magSpace_TB, box]}>
  //       <Text style={styles.font_P1}> Product name</Text>
  //       <Text style={styles.font_A1}>{item.product_name}</Text>
  //     </View>
  //     </>
  //     )}
  //   </View>
  // );
};

const styles = StyleSheet.create({
  container,
  font_A1,
  font_P1,
  font_P3,
  button_2,
  magSpace_TB,
  box,
});

export default HistoryScreen;
