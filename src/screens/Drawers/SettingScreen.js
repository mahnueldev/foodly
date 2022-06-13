import React from "react";
import { Text, StyleSheet, View } from "react-native";


const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.fonts}>This is your repair Shop</Text>
    </View>
  );
};

const styles= StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#25335c',
      alignItems: 'center',
      justifyContent: 'center',  
    },
    fonts:{
      fontSize: 50,
      color: 'white'
    }
  })

export default SettingScreen;
