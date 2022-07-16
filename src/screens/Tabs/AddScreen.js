import React, {useContext, useEffect} from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { container, font_H2, button_2, magSpace_T, align_cent  } from "../../styling/globalStyles";
import InputField from "../../components/InputField";
import OpenFoodContext from "../../context/openfood/openfoodContext";


const AddScreen = () => {
  const openfoodContext = useContext(OpenFoodContext);
  const { postProduct } = openfoodContext;
  useEffect(() => {
   postProduct();
  }, [])
  
  return (
    <View style={styles.container}>
      <View style={[magSpace_T, align_cent ]}>
      <InputField label={"Code"} keyboardType="text" />
      <InputField label={"Brand"} keyboardType="text" />
      <InputField label={"Label"} keyboardType="text" />

      <TouchableOpacity  style={styles.button_2}>
        <Text
        style={ styles.font_H2 }
        onPress={postProduct}
        >Add</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles= StyleSheet.create({
    container,
    font_H2,
    button_2,
    magSpace_T,
    align_cent 
  })

export default AddScreen;
