// FILE: screens/user/CompanySelectionScreen.js

import React from "react";

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { useCart } from "../../context/CartContext";

const companies = [
  {
    id: "1",
    name: "Healthy Bowl Kitchen",
    rating: "4.8",
    amount: 240,
    delivery: "25 mins",
  },

  {
    id: "2",
    name: "Fit Meal Hub",
    rating: "4.6",
    amount: 210,
    delivery: "30 mins",
  },

  {
    id: "3",
    name: "Nutri Fresh",
    rating: "4.9",
    amount: 260,
    delivery: "20 mins",
  },

  {
    id: "4",
    name: "Green Life Foods",
    rating: "4.7",
    amount: 280,
    delivery: "22 mins",
  },
];

export default function CompanySelectionScreen({
  route,
  navigation,
}) {

  const { addToCart } = useCart();

  const food = route?.params?.food;

  /* ADD TO CART */
  const handleAddToCart = (restaurant) => {

    addToCart({
      id: Date.now().toString(),

      foodName:
        food?.name ||
        food?.title ||
        "Healthy Meal",

      hotel: restaurant.name,

      image:
        food?.image ||
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200",

      price: `₹${restaurant.amount}`,

      quantity: 1,
    });

    navigation.navigate("Cart");
  };

  /* RENDER COMPANY */
  const renderCompany = ({ item }) => (

    <View style={styles.card}>

      {/* LEFT SECTION */}
      <View style={styles.leftSection}>

        <Image
          source={{
            uri:
              food?.image ||
              "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200",
          }}
          style={styles.foodImage}
        />

        <View style={styles.details}>

          <Text style={styles.companyName}>
            {item.name}
          </Text>

          <Text style={styles.foodName}>
            {food?.name ||
              food?.title ||
              "Healthy Meal"}
          </Text>

          <View style={styles.infoRow}>

            <Ionicons
              name="star"
              size={14}
              color="#F4B400"
            />

            <Text style={styles.infoText}>
              {item.rating}
            </Text>

            <Text style={styles.dot}>
              •
            </Text>

            <Ionicons
              name="time-outline"
              size={14}
              color="#777"
            />

            <Text style={styles.infoText}>
              {item.delivery}
            </Text>

          </View>

          <Text style={styles.price}>
            ₹{item.amount}
          </Text>

        </View>
      </View>

      {/* ADD BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          handleAddToCart(item)
        }
      >

        <Ionicons
          name="add"
          size={18}
          color="#fff"
        />

        <Text style={styles.buttonText}>
          Add
        </Text>

      </TouchableOpacity>

    </View>
  );

  return (

    <SafeAreaView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>

        <TouchableOpacity
          style={styles.backBtn}
          onPress={() =>
            navigation.goBack()
          }
        >

          <Ionicons
            name="arrow-back"
            size={22}
            color="#222"
          />

        </TouchableOpacity>

        <Text style={styles.title}>
          Select Home Cook
        </Text>

        <View style={{ width: 40 }} />

      </View>

      {/* COMPANY LIST */}
      <FlatList
        data={companies}
        keyExtractor={(item) =>
          item.id
        }
        renderItem={renderCompany}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 30,
        }}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    paddingHorizontal: 16,
    paddingTop: 10,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
    marginTop: 10,
  },

  backBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },

  title: {
    fontSize: 22,
    fontWeight: "800",
    color: "#222",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 22,
    padding: 14,
    marginBottom: 18,
    elevation: 3,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  leftSection: {
    flexDirection: "row",
    flex: 1,
  },

  foodImage: {
    width: 85,
    height: 85,
    borderRadius: 18,
  },

  details: {
    marginLeft: 14,
    justifyContent: "center",
    flex: 1,
  },

  companyName: {
    fontSize: 17,
    fontWeight: "700",
    color: "#222",
  },

  foodName: {
    fontSize: 13,
    color: "#666",
    marginTop: 5,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },

  infoText: {
    fontSize: 13,
    color: "#777",
    marginLeft: 4,
  },

  dot: {
    marginHorizontal: 8,
    color: "#999",
  },

  price: {
    fontSize: 18,
    fontWeight: "800",
    color: "#16b39a",
    marginTop: 10,
  },

  button: {
    backgroundColor: "#16b39a",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
    marginLeft: 4,
  },

});