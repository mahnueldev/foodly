import React, { useContext  } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import OpenFoodContext from '../../context/openfood/openfoodContext'
import {container, font_A, font_B, font_P, image_Size} from '../../styling/globalStyles'
// import Spinner from '../../components/Spinner';

const ScanInfoScreen = ({route}) => {
  const openFoodContext = useContext(OpenFoodContext);
  const { searchItem, item, loading } = openFoodContext;
  const {data} = route.params;
  // if (loading) return <Spinner />                            
  searchItem(data);
    return (       
                 
      <View style={styles.container}>
        {item &&<>
            <Image
        source= {item.image_thumb_url}
        style={image_Size}
      />
        <Text style={styles.font_P}> {item.id}</Text>
        <Text style={styles.font_A}>{item.brands}</Text>
        <Text style={styles.font_B}>{item.creator}</Text>
        <Text style={styles.font_B}>{item.countries}</Text>
        <Text style={styles.font_P}>{item.data_sources}</Text>
        </>  }
     
      </View>
    );
  };
  
  const styles= StyleSheet.create({
      container,
      image_Size,
      font_A,
      font_B,
      font_P
    })
  
  export default ScanInfoScreen;
  