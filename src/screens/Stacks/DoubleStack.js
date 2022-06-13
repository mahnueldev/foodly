import React from "react";
import { Text, StyleSheet, View } from "react-native";


const StackScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.fonts}>Double Stack...Copy</Text>
    </View>
  );
};

const styles= StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#42277d',
      alignItems: 'center',
      justifyContent: 'center',  
    },
    fonts:{
      fontSize: 50,
      color: 'white'
    }
  })

export default StackScreen;
