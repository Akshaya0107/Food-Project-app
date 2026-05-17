// screens/user/ProfileScreen.js

import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  Alert,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen({
  navigation,
}) {

  const [isEditing, setIsEditing] =
    useState(false);

  const [name, setName] =
    useState("Akshaya");

  const [email, setEmail] =
    useState("akshaya@gmail.com");

  const [phone, setPhone] =
    useState("+91 9876543210");

  const [college, setCollege] =
    useState("ABC Engineering College");

  const [department, setDepartment] =
    useState("Computer Science");

  const [profileImage, setProfileImage] =
    useState(
      "https://i.pravatar.cc/300"
    );

  /* SAVE PROFILE */
  const handleSave = () => {

    setIsEditing(false);

    Alert.alert(
      "Success",
      "Profile Updated Successfully"
    );
  };

  /* CHANGE PHOTO */
  const changePhoto = () => {

    const randomImage =
      `https://i.pravatar.cc/300?img=${Math.floor(
        Math.random() * 70
      )}`;

    setProfileImage(randomImage);

    Alert.alert(
      "Updated",
      "Profile Photo Changed"
    );
  };

  return (

    <SafeAreaView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>

        <TouchableOpacity
          onPress={() =>
            navigation.goBack()
          }
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color="#fff"
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          My Profile
        </Text>

        <TouchableOpacity
          onPress={() => {

            if (isEditing) {
              handleSave();
            } else {
              setIsEditing(true);
            }

          }}
        >
          <Text style={styles.editText}>
            {isEditing
              ? "Save"
              : "Edit"}
          </Text>
        </TouchableOpacity>

      </View>

      <ScrollView
        showsVerticalScrollIndicator={
          false
        }
        contentContainerStyle={{
          paddingBottom: 120,
        }}
      >

        {/* PROFILE CARD */}
        <View style={styles.profileCard}>

          <Image
            source={{
              uri: profileImage,
            }}
            style={styles.profileImage}
          />

          {isEditing && (

            <TouchableOpacity
              style={styles.cameraBtn}
              onPress={changePhoto}
            >
              <Ionicons
                name="camera"
                size={18}
                color="#fff"
              />
            </TouchableOpacity>

          )}

          <Text style={styles.userName}>
            {name}
          </Text>

          <Text style={styles.userEmail}>
            {email}
          </Text>

        </View>

        {/* DETAILS */}
        <View style={styles.card}>

          <Text style={styles.sectionTitle}>
            Personal Details
          </Text>

          <Text style={styles.label}>
            Full Name
          </Text>

          <TextInput
            value={name}
            onChangeText={setName}
            editable={isEditing}
            style={[
              styles.input,
              !isEditing &&
                styles.disabledInput,
            ]}
          />

          <Text style={styles.label}>
            Email
          </Text>

          <TextInput
            value={email}
            onChangeText={setEmail}
            editable={isEditing}
            style={[
              styles.input,
              !isEditing &&
                styles.disabledInput,
            ]}
          />

          <Text style={styles.label}>
            Phone Number
          </Text>

          <TextInput
            value={phone}
            onChangeText={setPhone}
            editable={isEditing}
            keyboardType="phone-pad"
            style={[
              styles.input,
              !isEditing &&
                styles.disabledInput,
            ]}
          />

          <Text style={styles.label}>
            College
          </Text>

          <TextInput
            value={college}
            onChangeText={setCollege}
            editable={isEditing}
            style={[
              styles.input,
              !isEditing &&
                styles.disabledInput,
            ]}
          />

          <Text style={styles.label}>
            Department
          </Text>

          <TextInput
            value={department}
            onChangeText={
              setDepartment
            }
            editable={isEditing}
            style={[
              styles.input,
              !isEditing &&
                styles.disabledInput,
            ]}
          />

        </View>

        {/* MENU */}
        <View style={styles.card}>

          {/* CART */}
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() =>
              navigation.navigate(
                "Cart"
              )
            }
          >

            <View style={styles.menuLeft}>

              <Ionicons
                name="cart-outline"
                size={22}
                color="#4CAF50"
              />

              <Text style={styles.menuText}>
                My Cart
              </Text>

            </View>

            <Ionicons
              name="chevron-forward"
              size={20}
              color="#999"
            />

          </TouchableOpacity>

          {/* NOTIFICATIONS */}
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() =>
              navigation.navigate(
                "Notifications"
              )
            }
          >

            <View style={styles.menuLeft}>

              <Ionicons
                name="notifications-outline"
                size={22}
                color="#4CAF50"
              />

              <Text style={styles.menuText}>
                Notifications
              </Text>

            </View>

            <Ionicons
              name="chevron-forward"
              size={20}
              color="#999"
            />

          </TouchableOpacity>

          {/* SETTINGS */}
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() =>
              navigation.navigate(
                "Settings"
              )
            }
          >

            <View style={styles.menuLeft}>

              <Ionicons
                name="settings-outline"
                size={22}
                color="#4CAF50"
              />

              <Text style={styles.menuText}>
                Settings
              </Text>

            </View>

            <Ionicons
              name="chevron-forward"
              size={20}
              color="#999"
            />

          </TouchableOpacity>

        </View>

        {/* LOGOUT */}
        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => {

            Alert.alert(
              "Logout",
              "Are you sure you want to logout?",
              [
                {
                  text: "Cancel",
                },
                {
                  text: "Logout",
                  onPress: () =>
                    navigation.replace(
                      "Login"
                    ),
                },
              ]
            );

          }}
        >

          <Ionicons
            name="log-out-outline"
            size={22}
            color="#fff"
          />

          <Text style={styles.logoutText}>
            Logout
          </Text>

        </TouchableOpacity>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F4F7FB",
  },

  header: {
    backgroundColor: "#4CAF50",
    paddingTop: 55,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent:
      "space-between",
    alignItems: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },

  editText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  profileCard: {
    alignItems: "center",
    marginTop: 25,
    marginBottom: 20,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },

  cameraBtn: {
    position: "absolute",
    bottom: 5,
    right: 135,
    backgroundColor: "#4CAF50",
    padding: 8,
    borderRadius: 20,
  },

  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#222",
    marginTop: 15,
  },

  userEmail: {
    color: "#666",
    marginTop: 5,
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    elevation: 4,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 15,
  },

  label: {
    marginTop: 10,
    marginBottom: 8,
    color: "#555",
    fontWeight: "600",
  },

  input: {
    backgroundColor: "#F2F2F2",
    borderRadius: 14,
    padding: 15,
    fontSize: 15,
    color: "#222",
  },

  disabledInput: {
    backgroundColor: "#ECECEC",
  },

  menuItem: {
    flexDirection: "row",
    justifyContent:
      "space-between",
    alignItems: "center",
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  menuText: {
    marginLeft: 14,
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },

  logoutBtn: {
    backgroundColor: "#4CAF50",
    marginHorizontal: 16,
    borderRadius: 18,
    padding: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },

  logoutText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
  },

});