import React from "react";
import { Text, StyleSheet, View } from "react-native";


const LogoutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.fonts}>Bye Bye, See you soon</Text>
    </View>
  );
};

const styles= StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',  
    },
    fonts:{
      fontSize: 50,
      color: 'white'
    }
  })

export default LogoutScreen;
