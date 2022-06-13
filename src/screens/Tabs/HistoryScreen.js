import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";


const HistoryScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.fonts}>View you History</Text>
      <Button 
    onPress={() => navigation.navigate("DoubleStack")}
    title="Press"/>
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
