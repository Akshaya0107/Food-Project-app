import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
  Alert,
  SafeAreaView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function SavedAddressScreen({
  navigation,
}) {
  const [addresses, setAddresses] =
    useState([
      {
        id: "1",
        type: "Home",
        address:
          "21, Anna Nagar, Chennai",
      },

      {
        id: "2",
        type: "Office",
        address:
          "Tidel Park, Chennai",
      },
    ]);

  const [newAddress, setNewAddress] =
    useState("");

  /* ADD ADDRESS */

  const addAddress = () => {
    if (!newAddress.trim()) {
      Alert.alert(
        "Error",
        "Please enter address"
      );
      return;
    }

    const item = {
      id: Date.now().toString(),
      type: "New Address",
      address: newAddress,
    };

    setAddresses([
      ...addresses,
      item,
    ]);

    setNewAddress("");
  };

  /* DELETE ADDRESS */

  const deleteAddress = (id) => {
    setAddresses(
      addresses.filter(
        (item) => item.id !== id
      )
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
            color="#222"
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Saved Addresses
        </Text>

        <View style={{ width: 24 }} />
      </View>

      {/* ADD ADDRESS */}

      <View style={styles.inputRow}>
        <TextInput
          placeholder="Enter delivery address"
          value={newAddress}
          onChangeText={setNewAddress}
          style={styles.input}
          placeholderTextColor="#888"
        />

        <TouchableOpacity
          style={styles.addBtn}
          onPress={addAddress}
        >
          <Ionicons
            name="add"
            size={24}
            color="#fff"
          />
        </TouchableOpacity>
      </View>

      {/* ADDRESS LIST */}

      <FlatList
        data={addresses}
        keyExtractor={(item) =>
          item.id
        }
        showsVerticalScrollIndicator={
          false
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={{ flex: 1 }}>
              <View style={styles.typeRow}>
                <Ionicons
                  name="location"
                  size={20}
                  color="#16b39a"
                />

                <Text style={styles.type}>
                  {item.type}
                </Text>
              </View>

              <Text style={styles.address}>
                {item.address}
              </Text>
            </View>

            <TouchableOpacity
              onPress={() =>
                deleteAddress(item.id)
              }
            >
              <Ionicons
                name="trash-outline"
                size={24}
                color="red"
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 40,
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: "row",
    justifyContent:
      "space-between",
    alignItems: "center",
    marginBottom: 25,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
  },

  inputRow: {
    flexDirection: "row",
    marginBottom: 24,
  },

  input: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingHorizontal: 16,
    fontSize: 15,
    marginRight: 12,
    elevation: 2,
  },

  addBtn: {
    width: 58,
    height: 58,
    borderRadius: 16,
    backgroundColor: "#16b39a",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent:
      "space-between",
    alignItems: "center",
    elevation: 2,
  },

  typeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  type: {
    fontSize: 17,
    fontWeight: "700",
    color: "#222",
    marginLeft: 8,
  },

  address: {
    color: "#555",
    lineHeight: 22,
    marginTop: 2,
    paddingRight: 10,
  },
});