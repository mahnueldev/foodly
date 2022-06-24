import React, {useContext} from 'react';
import { Text, StyleSheet, View } from "react-native";
import OpenFoodContext from '../../context/openfood/openfoodContext'

// Issue: API query not rendering
const ListScreen = () => {
  const openfoodContext = useContext(OpenFoodContext);
  const { products } = openfoodContext;
  return (
    <View style={styles.container}>
       {products.map((product) =>{
        <Text style={styles.container}>{product}</Text>
  })}   
      
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
