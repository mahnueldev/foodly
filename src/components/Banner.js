import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import ProjectImg2 from '../assets/projectImg2.png'

 const Banner =({
  image= ProjectImg2,
  text = 'bannertext'

}) =>{
  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={{height: 200, width: 400, borderRadius: 34, padding: 20}}
      />
      <Text style={styles.fonts}>{text} </Text>
    </View>
  );
}

export default Banner

const styles= StyleSheet.create({
  container:{
    backgroundColor: '#EEEEEE',
    padding: 18, 
    marginTop: 50,
    alignItems: 'center',
    borderRadius: 34
  },
  fonts:{
    fontSize: 20,
    color: 'grey',
    paddingTop: 15
  }
})