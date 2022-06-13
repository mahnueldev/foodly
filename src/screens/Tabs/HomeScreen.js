import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'




const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Text style={styles.fonts}>You are Home</Text>
    <Button 
    onPress={() => navigation.navigate("StackScreen")}
    title="Button to press"/>
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#f26b4b',
    alignItems: 'center',
    justifyContent: 'center',  
  },
  fonts:{
    fontSize: 50,
    color: 'white'
  }
})

export default HomeScreen
