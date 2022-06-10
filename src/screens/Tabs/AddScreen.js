import React from "react";
import { Text, StyleSheet, View } from "react-native";


const AddScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.fonts}>Add Something</Text>
    </View>
  );
};

const styles= StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#02ab5d',
      alignItems: 'center',
      justifyContent: 'center',  
    },
    fonts:{
      fontSize: 50,
      color: 'white'
    }
  })

export default AddScreen;
