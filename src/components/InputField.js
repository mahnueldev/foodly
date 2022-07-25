import React from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import {field} from '../styling/globalStyles'

export default function InputField({
  label,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
  value,
  onChangeText,
  rules ={}
}) {
  return (
    <View
      style={styles.field}>
      {inputType == 'password' ? (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={{flex: 1, paddingVertical: 0}}
          secureTextEntry={true}
          value={value}
          onChangeText={onChangeText}
          rules={rules}
        />
      ) : (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={{flex: 1, paddingVertical: 0}}
          value={value}
          onChangeText={onChangeText}
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{color: 'red', fontWeight: '700'}}>{fieldButtonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles= StyleSheet.create({
  field
 
})