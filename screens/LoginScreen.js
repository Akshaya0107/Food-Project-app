import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
  Alert,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebaseConfig";

export default function LoginScreen({ navigation }) {

  const [selectedRole, setSelectedRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

  // Firebase Login
const handleLogin = async () => {

  if (!email || !password) {
    Alert.alert("Error", "Please enter email and password");
    return;
  }

  if (!selectedRole) {
    Alert.alert("Error", "Please select a role");
    return;
  }

  try {

    // Firebase Authentication
    await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    Alert.alert("Success", "Login Successful 🎉");

    // USER MODULE
    if (selectedRole === "user") {
      navigation.replace("UserHome");
    }

    // COOK MODULE
    else if (selectedRole === "cook") {
      navigation.replace("CookHome");
    }

    // DELIVERY MODULE
    else if (selectedRole === "delivery") {
      navigation.replace("DeliveryHome");
    }

  } catch (error) {

    Alert.alert(
      "Login Error",
      error.message
    );

  }

};

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar
        backgroundColor="#F7F7F7"
        barStyle="dark-content"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >

        {/* Header */}
        <View style={styles.headerContainer}>

          <Text style={styles.welcomeText}>
            Welcome to GastroPulse
          </Text>

          <Text style={styles.subText}>
            Choose your role and continue your healthy food journey.
          </Text>

        </View>

        {/* Role Selection */}
        <Text style={styles.sectionTitle}>
          Choose Your Role
        </Text>

        {/* USER */}
        <TouchableOpacity
          style={[
            styles.roleCard,
            selectedRole === "user" && styles.selectedCard,
          ]}
          onPress={() => setSelectedRole("user")}
        >

          <Text style={styles.roleIcon}>👤</Text>

          <Text style={styles.roleTitle}>
            User
          </Text>

          <Text style={styles.roleDescription}>
            Order personalized healthy meals
          </Text>

        </TouchableOpacity>

        {/* COOK */}
        <TouchableOpacity
          style={[
            styles.roleCard,
            selectedRole === "cook" && styles.selectedCard,
          ]}
          onPress={() => setSelectedRole("cook")}
        >

          <Text style={styles.roleIcon}>👨‍🍳</Text>

          <Text style={styles.roleTitle}>
            Home Cook
          </Text>

          <Text style={styles.roleDescription}>
            Share your culinary skills and earn
          </Text>

        </TouchableOpacity>

        {/* DELIVERY */}
        <TouchableOpacity
          style={[
            styles.roleCard,
            selectedRole === "delivery" && styles.selectedCard,
          ]}
          onPress={() => setSelectedRole("delivery")}
        >

          <Text style={styles.roleIcon}>🚴</Text>

          <Text style={styles.roleTitle}>
            Delivery Partner
          </Text>

          <Text style={styles.roleDescription}>
            Deliver healthy meals to doorsteps
          </Text>

        </TouchableOpacity>

        {/* EMAIL */}
        <TextInput
          placeholder="Email"
          placeholderTextColor="#777"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        {/* PASSWORD */}
        <TextInput
          placeholder="Password"
          placeholderTextColor="#777"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        {/* Divider */}
        <View style={styles.dividerContainer}>

          <View style={styles.divider} />

          <Text style={styles.orText}>
            OR
          </Text>

          <View style={styles.divider} />

        </View>

        {/* EMAIL BUTTON */}
        <TouchableOpacity style={styles.socialButton}>

          <Text style={styles.socialText}>
            Continue with Email
          </Text>

        </TouchableOpacity>

        {/* GOOGLE BUTTON */}
        <TouchableOpacity style={styles.socialButton}>

          <Text style={styles.socialText}>
            Continue with Google
          </Text>

        </TouchableOpacity>

        {/* LOGIN */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
        >

          <Text style={styles.loginText}>
            Login
          </Text>

        </TouchableOpacity>

        {/* SIGNUP */}
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => navigation.navigate("Signup")}
        >

          <Text style={styles.signupText}>
            Sign Up
          </Text>

        </TouchableOpacity>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },

  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 40,
  },

  headerContainer: {
    marginBottom: 28,
  },

  welcomeText: {
    fontSize: 34,
    fontWeight: "700",
    color: "#111",
    marginBottom: 10,
    lineHeight: 42,
  },

  subText: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    color: "#111",
  },

  roleCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingVertical: 25,
    alignItems: "center",
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    elevation: 2,
  },

  selectedCard: {
    borderColor: "#23B6A6",
    borderWidth: 2,
  },

  roleIcon: {
    fontSize: 34,
    marginBottom: 12,
  },

  roleTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
    marginBottom: 8,
  },

  roleDescription: {
    fontSize: 16,
    color: "#666",
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 16,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#DDDDDD",
  },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 22,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#D0D0D0",
  },

  orText: {
    marginHorizontal: 12,
    color: "#777",
    fontSize: 15,
  },

  socialButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DDDDDD",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 15,
  },

  socialText: {
    fontSize: 17,
    color: "#333",
    fontWeight: "500",
  },

  loginButton: {
    backgroundColor: "#23B6A6",
    paddingVertical: 18,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 12,
    marginBottom: 15,
  },

  loginText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
  },

  signupButton: {
    borderWidth: 1.5,
    borderColor: "#23B6A6",
    paddingVertical: 18,
    borderRadius: 14,
    alignItems: "center",
  },

  signupText: {
    color: "#23B6A6",
    fontSize: 20,
    fontWeight: "700",
  },

});