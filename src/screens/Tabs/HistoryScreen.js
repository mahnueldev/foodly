import React from "react";
import { Text, StyleSheet, View } from "react-native";


const HistoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.fonts}>View you History</Text>
    </View>
  );
};

const styles= StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#2c2953',
      alignItems: 'center',
      justifyContent: 'center',  
    },
    fonts:{
      fontSize: 50,
      color: 'white'
    }
  })

export default HistoryScreen;
