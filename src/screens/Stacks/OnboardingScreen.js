
import { StyleSheet, View, Image } from "react-native";


import React from 'react'

const OnboardingScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../../assets/logo.png")}
      style={{
      resizeMode: "contain"}}
      />
      </View>

    </View>
  )
}

export default OnboardingScreen

const styles= StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: "#cc6516",
      alignItems: 'center',
      justifyContent: 'center', 
      
    }
  })