import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import ProjectImg2 from '../assets/projectImg2.png'
import {font_P} from '../styling/globalStyles'

 const Banner =({
  image= ProjectImg2,
  text = 'bannertext'

}) =>{
  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={{height: 200, width: 350, borderRadius: 34}}
      />
      <Text style={styles.font_P}>{text} </Text>
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
  font_P
 
})