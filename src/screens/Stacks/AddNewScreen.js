import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import {
  container,
  font_H2,
  button_2,
  magSpace_T,
  align_cent,
} from '../../styling/globalStyles';
import InputField from '../../components/InputField';
import { collection, addDoc } from "firebase/firestore"; 
import {db} from '../../../firebase'




const AddNewScreen = () => {
  const [code, setCode] = useState(null);
  const [brand, setBrand] = useState(null);
  const [label, setLabel] = useState(null);



  // Add a new document in collection "cities"
  const create = async () => {
  
  await addDoc(collection(db, "products"), {
    code: code,
    brand: brand,
    label: label
 
  });
}

  return (
    <View style={styles.container}>
      <View style={[magSpace_T,  align_cent]}>
        <InputField
          label={'Code'}
          keyboardType='text'
          value={code}
          onChangeText={(code) => setCode(code)}
        />

        <InputField
          label={'Brand'}
          keyboardType='text'
          value={brand}
          onChangeText={(brand) => setBrand(brand)}
        />

        <InputField
          label={'Label'}
          keyboardType='text'
          value={label}
          onChangeText={(label) => setLabel(label)}
        />

        <TouchableOpacity style={styles.button_2}>
          <Text style={styles.font_H2} 
          onPress={create}>
          
            Add
          </Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container,
  font_H2,
  button_2,
  magSpace_T,
  align_cent,
});

export default AddNewScreen;
