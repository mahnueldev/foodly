import React, { useContext, useEffect  } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import OpenFoodContext from '../../context/openfood/openfoodContext'
import {container, font_A, font_B, font_P, font_H2, image_Size, button_2} from '../../styling/globalStyles'
import Spinner from '../../components/Spinner';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ScanInfoScreen = ({route, navigation}) => {
  const openFoodContext = useContext(OpenFoodContext);
  const { searchItem, item, loading } = openFoodContext;
  const {data} = route.params;

  const storeData = async (item) => {
    try {
      const jsonItem = JSON.stringify(item)
      await AsyncStorage.setItem('@storage_Key', jsonItem)
    } catch (e) {
      // saving error
    }
  }

  useEffect(() => {
    if (!loading && !item) { 
      searchItem(data);
      storeData();
    }
  }, [item, loading]);
  

  if (!item || loading) return <Spinner />     
 
  return (       
        // cannot call image     //  
    <View style={styles.container}>
      {item &&<>
          <Image
      source= {item.image_thumb_url}
      style={image_Size}
    />
      <Text style={styles.font_P}> {item.id}</Text>
      <Text style={styles.font_A}>{item.brands}</Text>
      <Text style={styles.font_B}>{item.creator}</Text>

      {/* next line carries an array of objects */}
      {/* <Text style={styles.font_B}>{item.nutrient_levels}</Text> */}
      <Text style={styles.font_B}>{item.nova_group}</Text>
      <Text style={styles.font_B}>{item.nutriscore_score}</Text>
      <Text style={styles.font_B}>{item.nutriscore_grade}</Text>
      <Text style={styles.font_P}>{item.data_sources}</Text>
      <TouchableOpacity style={styles.button_2}>
      <Text 
      style={ styles.font_H2 }
      onPress={() => navigation.goBack()}
      >Back</Text>
      </TouchableOpacity>
    
      </>  }
   
    </View>
  );
  };
  
  const styles= StyleSheet.create({
      container,
      image_Size,
      font_A,
      font_B,
      font_P,
      font_H2,
      button_2
        
    })
  
  export default ScanInfoScreen;
  