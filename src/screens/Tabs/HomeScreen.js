import React from 'react'
import { View, StyleSheet } from 'react-native'
import Banner from '../../components/Banner'
import ProjectImg from '../../assets/projectImg.png'
import Spinner from '../../components/Spinner'
// import ProjectImg2 from '../../assets/projectImg2.png'



const HomeScreen = () => {
  return (
    
    <View style={styles.container}>
    <Banner 
    src={ProjectImg}
     text='duis anim occaecat integer sapien,v nulla lacus veniam, velit nulla consectetur nulla gravida sapien,' />
    <Spinner/>
    
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',  
  },
  fonts:{
    fontSize: 50,
    color: 'white'
  }
})

export default HomeScreen
