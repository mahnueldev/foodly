import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { button, font_H2, font_P2 } from "../../styling/globalStyles";
import InputField from "../../components/InputField"

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <InputField label={"Email ID"} keyboardType="email-address" />

      <InputField
        label={"Password"}
        inputType="password"
        fieldButtonLabel={"Forgot Password?"}
        fieldButtonFunction={() => {}}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("TabStack")}
        style={styles.button}
      >
        <Text style={styles.font_H2}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.font_P2}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
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
});
