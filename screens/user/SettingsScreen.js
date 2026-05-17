// ======================================================
// FILE: screens/user/SettingsScreen.js
// GASTROPULSE USER SETTINGS SCREEN
// ======================================================

import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function SettingsScreen({
  navigation,
}) {

  const [darkMode, setDarkMode] =
    useState(false);

  const [
    notificationsEnabled,
    setNotificationsEnabled,
  ] = useState(true);

  const [healthTips, setHealthTips] =
    useState(true);

  const [dietReminders, setDietReminders] =
    useState(false);

  return (

    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      {/* HEADER */}
      <View style={styles.header}>

        <Text style={styles.headerTitle}>
          Settings
        </Text>

        <Text style={styles.headerSubtitle}>
          Manage your GastroPulse preferences
        </Text>

      </View>

      {/* APP SETTINGS */}
      <Text style={styles.sectionTitle}>
        App Preferences
      </Text>

      {/* DARK MODE */}
      <View style={styles.card}>

        <View style={styles.leftSection}>

          <View style={styles.iconBox}>
            <Ionicons
              name="moon-outline"
              size={22}
              color="#16b39a"
            />
          </View>

          <View>
            <Text style={styles.title}>
              Dark Mode
            </Text>

            <Text style={styles.subtitle}>
              Enable dark appearance
            </Text>
          </View>

        </View>

        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
          trackColor={{
            false: "#ccc",
            true: "#16b39a",
          }}
        />

      </View>

      {/* NOTIFICATIONS */}
      <View style={styles.card}>

        <View style={styles.leftSection}>

          <View style={styles.iconBox}>
            <Ionicons
              name="notifications-outline"
              size={22}
              color="#16b39a"
            />
          </View>

          <View>
            <Text style={styles.title}>
              Push Notifications
            </Text>

            <Text style={styles.subtitle}>
              Meal and order updates
            </Text>
          </View>

        </View>

        <Switch
          value={notificationsEnabled}
          onValueChange={
            setNotificationsEnabled
          }
          trackColor={{
            false: "#ccc",
            true: "#16b39a",
          }}
        />

      </View>

      {/* HEALTH TIPS */}
      <View style={styles.card}>

        <View style={styles.leftSection}>

          <View style={styles.iconBox}>
            <Ionicons
              name="fitness-outline"
              size={22}
              color="#16b39a"
            />
          </View>

          <View>
            <Text style={styles.title}>
              Health Tips
            </Text>

            <Text style={styles.subtitle}>
              Daily wellness suggestions
            </Text>
          </View>

        </View>

        <Switch
          value={healthTips}
          onValueChange={setHealthTips}
          trackColor={{
            false: "#ccc",
            true: "#16b39a",
          }}
        />

      </View>

      {/* DIET REMINDER */}
      <View style={styles.card}>

        <View style={styles.leftSection}>

          <View style={styles.iconBox}>
            <Ionicons
              name="alarm-outline"
              size={22}
              color="#16b39a"
            />
          </View>

          <View>
            <Text style={styles.title}>
              Diet Reminders
            </Text>

            <Text style={styles.subtitle}>
              Reminder for healthy meals
            </Text>
          </View>

        </View>

        <Switch
          value={dietReminders}
          onValueChange={
            setDietReminders
          }
          trackColor={{
            false: "#ccc",
            true: "#16b39a",
          }}
        />

      </View>

      {/* ACCOUNT SECTION */}
      <Text style={styles.sectionTitle}>
        Account
      </Text>

      {/* PROFILE */}
      <TouchableOpacity
        style={styles.menuCard}
        onPress={() =>
          navigation.navigate("Profile")
        }
      >

        <View style={styles.menuLeft}>

          <Ionicons
            name="person-circle-outline"
            size={24}
            color="#16b39a"
          />

          <Text style={styles.menuText}>
            Manage Profile
          </Text>

        </View>

        <Ionicons
          name="chevron-forward"
          size={20}
          color="#888"
        />

      </TouchableOpacity>

      {/* ORDERS */}
      <TouchableOpacity
        style={styles.menuCard}
        onPress={() =>
          navigation.navigate("Orders")
        }
      >

        <View style={styles.menuLeft}>

          <Ionicons
            name="receipt-outline"
            size={24}
            color="#16b39a"
          />

          <Text style={styles.menuText}>
            Order History
          </Text>

        </View>

        <Ionicons
          name="chevron-forward"
          size={20}
          color="#888"
        />

      </TouchableOpacity>

      {/* PRIVACY */}
      <TouchableOpacity
        style={styles.menuCard}
        onPress={() => {

          Alert.alert(
            "Privacy Policy",
            "GastroPulse protects all user health and payment data securely."
          );

        }}
      >

        <View style={styles.menuLeft}>

          <Ionicons
            name="lock-closed-outline"
            size={24}
            color="#16b39a"
          />

          <Text style={styles.menuText}>
            Privacy Policy
          </Text>

        </View>

        <Ionicons
          name="chevron-forward"
          size={20}
          color="#888"
        />

      </TouchableOpacity>

      {/* LOGOUT */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => {

          Alert.alert(
            "Logout",
            "You have been logged out successfully."
          );

          navigation.replace("Login");

        }}
      >

        <Ionicons
          name="log-out-outline"
          size={24}
          color="#fff"
        />

        <Text style={styles.logoutText}>
          Logout
        </Text>

      </TouchableOpacity>

      <View style={{ height: 40 }} />

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    paddingHorizontal: 18,
    paddingTop: 50,
  },

  header: {
    marginBottom: 25,
  },

  headerTitle: {
    fontSize: 30,
    fontWeight: "700",
    color: "#111",
  },

  headerSubtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 6,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
    marginBottom: 15,
    marginTop: 10,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 18,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent:
      "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ECECEC",
  },

  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  iconBox: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: "#EAFBF7",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
  },

  subtitle: {
    fontSize: 12,
    color: "#777",
    marginTop: 3,
  },

  menuCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
    flexDirection: "row",
    justifyContent:
      "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ECECEC",
  },

  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  menuText: {
    marginLeft: 14,
    fontSize: 15,
    fontWeight: "600",
    color: "#222",
  },

  logoutButton: {
    backgroundColor: "#16b39a",
    height: 58,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 25,
  },

  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 10,
  },

});