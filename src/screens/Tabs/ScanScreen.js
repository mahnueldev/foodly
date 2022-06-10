import React from "react";
import { Text, StyleSheet, View } from "react-native";


const ScanScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.fonts}>Scan a product</Text>
      
    </View>
  );
};

const styles= StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#605f4d',
      alignItems: 'center',
      justifyContent: 'center',  
    },
    fonts:{
      fontSize: 50,
      color: 'white'
    }
  })

export default ScanScreen;
