import React, { useContext, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  button,
  font_H2,
  font_P2,
  font_P1,
  font_P3,
  magSpace_TB,
  magSpace_TB_X,
  padSpace
} from '../../styling/globalStyles';
import InputField from '../../components/InputField';
import authContext from '../../context/auth/authContext';
import Lock from '../../components/Lock'


const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const AuthContext = useContext(authContext);
  const { forgotpassword } = AuthContext;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
      <Lock height='100' width='100' />
        <InputField
          label={'Email ID'}
          keyboardType='email-address'
          value={email}
          onChangeText={(email) => setEmail(email)}
          rules={{ required: true }}
        />
<Text style={[font_P1, padSpace]}>Enter an email associated with your account and we will send an email with with instruction to reset your password</Text>
        <TouchableOpacity
          onPress={() => {
            forgotpassword(email);
          }}
          style={[styles.button, styles.magSpace_TB]}
        >
          <Text style={styles.font_H2}>Reset</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.magSpace_TB_X}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.font_P3}>Go back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button,
  font_H2,
  font_P2,
  font_P3,
  font_P1,
  magSpace_TB,
  magSpace_TB_X,
  padSpace
});
