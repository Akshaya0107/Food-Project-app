// ======================================================
// FILE: screens/user/CheckoutScreen.js
// ======================================================

import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  TextInput,
  Alert,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { useCart } from "../../context/CartContext";

export default function CheckoutScreen({
  navigation,
}) {

  const { cartItems, clearCart } =
    useCart();

  const [name, setName] =
    useState("Akshaya");

  const [address, setAddress] =
    useState("Chennai");

  const [city, setCity] =
    useState("Tamil Nadu");

  const [phone, setPhone] =
    useState("9876543210");

  const [editAddress, setEditAddress] =
    useState(false);

  const [
    selectedPayment,
    setSelectedPayment,
  ] = useState("Google Pay");

  /* TOTAL */
  const total = cartItems.reduce(
    (sum, item) => {

      const price =
        typeof item.price === "string"
          ? Number(
              item.price.replace(
                "₹",
                ""
              )
            )
          : Number(item.price || 0);

      return sum + price;

    },
    0
  );

  /* PLACE ORDER */
  const handlePlaceOrder = () => {

    if (cartItems.length === 0) {

      Alert.alert(
        "Empty Cart",
        "Please add meals to cart"
      );

      return;
    }

    if (
      !name ||
      !address ||
      !city ||
      !phone
    ) {

      Alert.alert(
        "Missing Details",
        "Fill all delivery details"
      );

      return;
    }

    Alert.alert(
      "Order Placed 🎉",
      `Payment Method: ${selectedPayment}`
    );

    clearCart();

    navigation.navigate("UserHome");
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
          Checkout
        </Text>

        <View style={{ width: 24 }} />

      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 220,
        }}
      >

        {/* ADDRESS */}
        <View style={styles.card}>

          <View style={styles.rowBetween}>

            <Text style={styles.sectionTitle}>
              Delivery Address
            </Text>

            <TouchableOpacity
              onPress={() =>
                setEditAddress(
                  !editAddress
                )
              }
            >

              <Text style={styles.editText}>
                {editAddress
                  ? "Save"
                  : "Edit"}
              </Text>

            </TouchableOpacity>

          </View>

          {editAddress ? (

            <>
              <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Full Name"
                style={styles.input}
              />

              <TextInput
                value={address}
                onChangeText={setAddress}
                placeholder="Address"
                style={styles.input}
              />

              <TextInput
                value={city}
                onChangeText={setCity}
                placeholder="City"
                style={styles.input}
              />

              <TextInput
                value={phone}
                onChangeText={setPhone}
                placeholder="Phone"
                keyboardType="phone-pad"
                style={styles.input}
              />
            </>

          ) : (

            <>
              <Text style={styles.name}>
                {name}
              </Text>

              <Text style={styles.address}>
                {address}
              </Text>

              <Text style={styles.address}>
                {city}
              </Text>

              <Text style={styles.address}>
                +91 {phone}
              </Text>
            </>

          )}

        </View>

        {/* PAYMENT */}
        <View style={styles.card}>

          <Text style={styles.sectionTitle}>
            Payment Method
          </Text>

          {[
            {
              name: "Google Pay",
              icon: "logo-google",
            },

            {
              name: "PhonePe",
              icon: "phone-portrait",
            },

            {
              name: "Paytm",
              icon: "wallet",
            },

            {
              name: "Cash on Delivery",
              icon: "cash",
            },

          ].map((item) => (

            <TouchableOpacity
              key={item.name}
              style={[
                styles.paymentCard,

                selectedPayment ===
                  item.name &&
                  styles.activePayment,
              ]}
              onPress={() =>
                setSelectedPayment(
                  item.name
                )
              }
            >

              <View
                style={
                  styles.paymentLeft
                }
              >

                <Ionicons
                  name={item.icon}
                  size={22}
                  color="#16b39a"
                />

                <Text
                  style={
                    styles.paymentText
                  }
                >
                  {item.name}
                </Text>

              </View>

              <Ionicons
                name={
                  selectedPayment ===
                  item.name
                    ? "radio-button-on"
                    : "radio-button-off"
                }
                size={22}
                color="#16b39a"
              />

            </TouchableOpacity>

          ))}

        </View>

        {/* ORDER SUMMARY */}
        <View style={styles.card}>

          <Text style={styles.sectionTitle}>
            Order Summary
          </Text>

          {cartItems.map(
            (item, index) => (

              <View
                key={index}
                style={styles.mealRow}
              >

                <Image
                  source={{
                    uri: item.image,
                  }}
                  style={styles.image}
                />

                <View style={{ flex: 1 }}>

                  <Text
                    style={styles.foodName}
                  >
                    {item.foodName}
                  </Text>

                  <Text style={styles.price}>
                    ₹{item.price}
                  </Text>

                </View>

              </View>

            )
          )}

        </View>

        {/* HEALTH TIPS */}
        <View style={styles.tipCard}>

          <Text style={styles.sectionTitle}>
            Health Tips
          </Text>

          <Text style={styles.tip}>
            💧 Drink enough water
          </Text>

          <Text style={styles.tip}>
            🚶 Walk after meals
          </Text>

          <Text style={styles.tip}>
            🥗 Eat balanced meals
          </Text>

        </View>

      </ScrollView>

      {/* BOTTOM */}
      <View style={styles.bottomBox}>

        <View>

          <Text style={styles.totalLabel}>
            Total Amount
          </Text>

          <Text style={styles.total}>
            ₹{total}
          </Text>

        </View>

        <TouchableOpacity
          style={styles.placeBtn}
          onPress={handlePlaceOrder}
        >

          <Text style={styles.placeText}>
            Place Order
          </Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 40,
  },

  header: {
    flexDirection: "row",
    justifyContent:
      "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 20,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },

  tipCard: {
    backgroundColor: "#EAF8F5",
    marginHorizontal: 16,
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent:
      "space-between",
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
    marginBottom: 14,
  },

  editText: {
    color: "#16b39a",
    fontWeight: "700",
  },

  name: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 5,
  },

  address: {
    color: "#666",
    marginBottom: 4,
  },

  input: {
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    fontSize: 15,
  },

  paymentCard: {
    flexDirection: "row",
    justifyContent:
      "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 14,
    padding: 15,
    marginBottom: 12,
  },

  activePayment: {
    borderColor: "#16b39a",
    backgroundColor: "#EAF8F5",
  },

  paymentLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  paymentText: {
    marginLeft: 12,
    fontSize: 15,
    fontWeight: "600",
    color: "#222",
  },

  mealRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  image: {
    width: 75,
    height: 75,
    borderRadius: 14,
    marginRight: 14,
  },

  foodName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
  },

  price: {
    marginTop: 6,
    color: "#16b39a",
    fontWeight: "700",
    fontSize: 17,
  },

  tip: {
    color: "#444",
    marginBottom: 10,
  },

  bottomBox: {
    position: "absolute",
    bottom: 20,
    left: 16,
    right: 16,
    backgroundColor: "#fff",
    borderRadius: 22,
    padding: 18,
    flexDirection: "row",
    justifyContent:
      "space-between",
    alignItems: "center",
    elevation: 8,
  },

  totalLabel: {
    color: "#777",
    fontSize: 13,
  },

  total: {
    fontSize: 28,
    fontWeight: "800",
    color: "#222",
    marginTop: 5,
  },

  placeBtn: {
    backgroundColor: "#16b39a",
    paddingHorizontal: 30,
    paddingVertical: 16,
    borderRadius: 16,
  },

  placeText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

});