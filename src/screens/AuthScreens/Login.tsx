import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} placeholder="Email..." />
      <TextInput style={styles.textInput} placeholder="Password..." />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#28282B",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    paddingHorizontal: 24,
  },
  textInput: {
    padding: 8,
    borderWidth: 1,
    width: "100%",
    marginBottom: 16,
    borderRadius: 4,
    backgroundColor: "white",
  },
  button: {
    padding: 8,
    backgroundColor: "grey",
    margin: 4,
    borderRadius: 4,
    width: 124,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
});
