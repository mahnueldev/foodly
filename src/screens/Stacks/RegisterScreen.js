import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  button,
  font_H2,
  font_P2,
  font_P3,
  font_P1,
  magSpace_TB_X,
} from "../../styling/globalStyles";
import InputField from "../../components/InputField";
import authContext from "../../context/auth/authContext";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const AuthContext = useContext(authContext);
  const { register } = AuthContext;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <InputField
          label={"Email ID"}
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <InputField
          label={"Password"}
          inputType="password"
          fieldButtonFunction={() => {}}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <InputField
          label={"Confirm Password"}
          inputType="password"
          fieldButtonFunction={() => {}}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />

        <TouchableOpacity
          onPress={() => {
            register(email, password);
          }}
          style={styles.button}
        >
          <Text style={styles.font_H2}>Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.magSpace_TB_X}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.font_P3}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button,
  font_H2,
  font_P1,
  font_P2,
  font_P3,
  magSpace_TB_X,
});
