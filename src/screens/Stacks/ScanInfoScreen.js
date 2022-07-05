import React, { useContext  } from "react";
import { Text, StyleSheet, View } from "react-native";
import OpenFoodContext from '../../context/openfood/openfoodContext'
import {container} from '../../styling/globalStyles'
import Spinner from '../../components/Spinner';

const ScanInfoScreen = () => {
  const openFoodContext = useContext(OpenFoodContext);
  const { searchItem, item, loading } = openFoodContext;

  searchItem(data);
  if (loading) return <Spinner />;

    return (
      
      <View style={styles.container}>
        
        {item &&<>
            <Image
        source={item.image_thumb_url}
        style={{height: 200, width: 350, borderRadius: 34}}
      />
        <Text>{item.id}</Text>
        <Text>{item.brands}</Text>
        <Text>{item.creator}</Text>
        <Text>{item.countries}</Text>
        <Text>{item.data_sources}</Text>
        </>  }
     
      </View>
    );
  };
  
  const styles= StyleSheet.create({
      container
    })
  
  export default ScanInfoScreen;
  