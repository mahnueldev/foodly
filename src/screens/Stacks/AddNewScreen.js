import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Modal } from 'react-native';
import {
  container,
  font_H2,
  button_2,
  magSpace_T,
  align_cent,
} from '../../styling/globalStyles';
import InputField from '../../components/InputField';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import Success from '../../components/Success';

const AddNewScreen = () => {
  const [code, setCode] = useState(null);
  const [brand, setBrand] = useState(null);
  const [label, setLabel] = useState(null);
  const [status, setStatus] = useState(false);
  const [IsModalVisible, setIsModalVisible] = useState(false);

  // Add a new document in collection "cities"
  const create = async () => {
    await addDoc(collection(db, 'products'), {
      code: code,
      brand: brand,
      label: label,
    });
  };
  const resetValue = () => {
    setCode(null), setBrand(null), setLabel(null);
  };

  const handleSend = () => {
    if (create) {
      setStatus(true);
      create();
      setIsModalVisible(true);
      resetValue();
      setTimeout(() => {
        setIsModalVisible(false);  
      }, 5000);
    } else {
      alert('Something went wrong');
    }
  };

  return (
    
    <View style={styles.container}>
      <View style={[magSpace_T, align_cent]}>
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
        <Modal
        animationType="fade"
        transparent={true}
        visible={IsModalVisible}
        >
          <View style={styles.container}>
      <Success msg= 'Product Added'/>
      </View>
        </Modal>

        <TouchableOpacity style={styles.button_2} onPress={handleSend}>
          <Text style={styles.font_H2}>Add</Text>
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
