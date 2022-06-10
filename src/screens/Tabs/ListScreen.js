import React from "react";
import { Text, StyleSheet, View } from "react-native";


const ListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.fonts}>See Lists here</Text>
      
    </View>
  );
};

const styles= StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#cda656',
      alignItems: 'center',
      justifyContent: 'center',  
    },
    fonts:{
      fontSize: 50,
      color: 'white'
    }
  })

export default ListScreen;
