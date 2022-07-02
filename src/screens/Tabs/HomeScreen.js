import React from 'react'
import { View, StyleSheet } from 'react-native'
import Banner from '../../components/Banner'
import ProjectImg from '../../assets/projectImg.png'
import {container} from '../../styling/globalStyles'
// import ProjectImg2 from '../../assets/projectImg2.png'



const HomeScreen = () => {
  return (
    
    <View style={styles.container}>
    <Banner 
    src={ProjectImg}
     text='duis anim occaecat integer sapien,v nulla lacus veniam, velit nulla consectetur nulla gravida sapien,' />
    <Banner 
    src={ProjectImg}
     text='duis anim occaecat integer sapien,v nulla lacus veniam, velit nulla consectetur nulla gravida sapien,' />
    
    
    </View>
  )
}

const styles= StyleSheet.create({
  container
})

export default HomeScreen
