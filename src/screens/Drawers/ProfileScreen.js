import React from "react";
import { Text, StyleSheet, View } from "react-native";


const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.fonts}>This is your Profile</Text>
    </View>
  );
};

const styles= StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#4b4e3e',
      alignItems: 'center',
      justifyContent: 'center',  
    },
    fonts:{
      fontSize: 50,
      color: 'white'
    }
  })

export default ProfileScreen;
