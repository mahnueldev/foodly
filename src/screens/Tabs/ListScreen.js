import React, {useContext, useEffect} from 'react';
import { Text, StyleSheet, View, Button } from "react-native";
import OpenFoodContext from '../../context/openfood/openfoodContext'
import Spinner from '../../components/Spinner';

// Issue: API query not rendering
const ListScreen = () => {
  const openfoodContext = useContext(OpenFoodContext);
  const { items, loading, getItems } = openfoodContext;
  if (loading) return <Spinner />;
//   useEffect(() => {
  getItems(items);
// }, []); 
  console.log(items);
  return (
    <View style={styles.container}>
       {items.map((product, i) =>{
        <Text style={styles.container} key={i}>{product.allergens}</Text>
  })}   
       {/* <Button onPress={getItems} title="Press" /> */}
         
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
