import { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebaseConfig";

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Account Created 🎉");
        navigation.navigate("Login");
      })
      .catch(err => alert(err.message));
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Signup</Text>

      <Text>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />

      <Text>Password</Text>
      <TextInput
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />

      <Button title="Signup" onPress={handleSignup} />

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={{ marginTop: 15, color: "blue" }}>
          Already have an account? Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}