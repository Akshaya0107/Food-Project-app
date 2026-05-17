import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/welcome-bg.jpeg")}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Bottom Card */}
      <View style={styles.card}>

        {/* Logo Box */}
        <View style={styles.logoBox}>
          <Image
            source={require("../assets/logo.jpeg")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.title}>
          Nourish Your Body,{'\n'}Nurture Our Planet.
        </Text>

        {/* Signup Button */}
        <TouchableOpacity
          style={styles.primaryBtn}
          onPress={() => navigation.navigate("SignupRole")}
        >
          <Text style={styles.primaryText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity
          style={styles.secondaryBtn}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.secondaryText}>Login</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },

  card: {
    backgroundColor: "#fff",
    padding: 24,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
  },

  logoBox: {
    width: 70,
    height: 70,
    backgroundColor: "#fff",
    borderRadius: 16,
    marginTop: -60,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",

    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  logo: {
    width: 40,
    height: 40,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },

  primaryBtn: {
    backgroundColor: "#4CAF50",
    width: "100%",
    padding: 14,
    borderRadius: 25,
    marginBottom: 12,
  },

  primaryText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },

  secondaryBtn: {
    width: "100%",
    padding: 14,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#4CAF50",
  },

  secondaryText: {
    color: "#4CAF50",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
});