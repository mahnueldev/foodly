import React, { useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  button,
  font_H2,
  font_P2,
  font_P1,
  font_P3,
  magSpace_TB,
  magSpace_TB_X,
} from "../../styling/globalStyles";
import InputField from "../../components/InputField";
import authContext from "../../context/auth/authContext";

const LoginScreen = ({ navigation }) => {
  const AuthContext = useContext(authContext);
  const { login } = AuthContext;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <InputField label={"Email ID"} keyboardType="email-address" />

        <InputField
          label={"Password"}
          inputType="password"
          fieldButtonFunction={() => {}}
        />

        <TouchableOpacity style={styles.magSpace_TB}>
          <Text style={styles.font_P1}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            login();
          }}
          style={[styles.button, styles.magSpace_TB]}
        >
          <Text style={styles.font_H2}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.magSpace_TB_X}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.font_P3}>Don't have an account? Sign up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button,
  font_H2,
  font_P2,
  font_P3,
  font_P1,
  magSpace_TB,
  magSpace_TB_X,
});
