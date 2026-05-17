// screens/user/PaymentScreen.js

import React, {
  useState,
  useContext,
} from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { CartContext } from "../../context/CartContext";

export default function PaymentScreen({
  navigation,
  route,
}) {

  const {
    cartItems,
    clearCart,
  } = useContext(CartContext);

  const paymentMethod =
    route?.params?.paymentMethod ||
    "Cash on Delivery";

  const [loading, setLoading] =
    useState(false);

  const [cardNumber, setCardNumber] =
    useState("");

  const [cardHolder, setCardHolder] =
    useState("");

  const [expiry, setExpiry] =
    useState("");

  const [cvv, setCvv] =
    useState("");

  /* TOTAL PRICE */
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
  const placeOrder = () => {

    setLoading(true);

    setTimeout(() => {

      setLoading(false);

      navigation.replace(
        "OrderConfirmation",
        {
          orderId:
            Math.floor(
              100000 +
                Math.random() *
                  900000
            ),

          total,

          paymentMethod,

          cartItems,
        }
      );

      clearCart();

    }, 2000);
  };

  /* HANDLE PAYMENT */
  const handlePayment = () => {

    if (
      paymentMethod ===
      "Cash on Delivery"
    ) {

      Alert.alert(
        "Order Confirmed",
        "Your order has been placed successfully."
      );

      placeOrder();

      return;
    }

    if (
      paymentMethod ===
        "Google Pay" ||
      paymentMethod ===
        "PhonePe" ||
      paymentMethod ===
        "Paytm" ||
      paymentMethod ===
        "UPI Payment"
    ) {

      Alert.alert(
        paymentMethod,
        `Redirecting to ${paymentMethod}...`
      );

      placeOrder();

      return;
    }

    /* CARD VALIDATION */
    if (
      !cardNumber ||
      !cardHolder ||
      !expiry ||
      !cvv
    ) {

      Alert.alert(
        "Missing Details",
        "Please fill all card details"
      );

      return;
    }

    if (cardNumber.length < 16) {

      Alert.alert(
        "Invalid Card",
        "Enter valid card number"
      );

      return;
    }

    if (cvv.length < 3) {

      Alert.alert(
        "Invalid CVV",
        "Enter valid CVV"
      );

      return;
    }

    placeOrder();
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
          Payment
        </Text>

        <View style={{ width: 24 }} />

      </View>

      <ScrollView
        showsVerticalScrollIndicator={
          false
        }
        contentContainerStyle={{
          paddingBottom: 150,
        }}
      >

        {/* PAYMENT METHOD */}
        <View style={styles.card}>

          <Text style={styles.label}>
            Selected Payment Method
          </Text>

          <Text style={styles.method}>
            {paymentMethod}
          </Text>

        </View>

        {/* COD */}
        {paymentMethod ===
          "Cash on Delivery" && (

          <View style={styles.infoCard}>

            <Ionicons
              name="cash"
              size={65}
              color="#4CAF50"
            />

            <Text style={styles.infoTitle}>
              Cash on Delivery
            </Text>

            <Text style={styles.infoText}>
              Pay at your doorstep
              after receiving your order.
            </Text>

          </View>
        )}

        {/* UPI */}
        {(paymentMethod ===
          "Google Pay" ||
          paymentMethod ===
            "PhonePe" ||
          paymentMethod ===
            "Paytm" ||
          paymentMethod ===
            "UPI Payment") && (

          <View style={styles.infoCard}>

            <Ionicons
              name="phone-portrait"
              size={65}
              color="#4CAF50"
            />

            <Text style={styles.infoTitle}>
              Secure UPI Payment
            </Text>

            <Text style={styles.infoText}>
              Continue securely using{" "}
              {paymentMethod}
            </Text>

          </View>
        )}

        {/* CARD PAYMENT */}
        {paymentMethod ===
          "Card Payment" && (

          <View style={styles.card}>

            <Text style={styles.inputLabel}>
              Card Number
            </Text>

            <TextInput
              style={styles.input}
              placeholder="1234567890123456"
              keyboardType="numeric"
              maxLength={16}
              value={cardNumber}
              onChangeText={
                setCardNumber
              }
            />

            <Text style={styles.inputLabel}>
              Card Holder
            </Text>

            <TextInput
              style={styles.input}
              placeholder="John Doe"
              value={cardHolder}
              onChangeText={
                setCardHolder
              }
            />

            <View style={styles.row}>

              <View style={{ flex: 1 }}>

                <Text
                  style={
                    styles.inputLabel
                  }
                >
                  Expiry
                </Text>

                <TextInput
                  style={styles.input}
                  placeholder="MM/YY"
                  value={expiry}
                  onChangeText={
                    setExpiry
                  }
                />

              </View>

              <View
                style={{
                  width: 15,
                }}
              />

              <View style={{ flex: 1 }}>

                <Text
                  style={
                    styles.inputLabel
                  }
                >
                  CVV
                </Text>

                <TextInput
                  style={styles.input}
                  placeholder="123"
                  keyboardType="numeric"
                  secureTextEntry
                  maxLength={3}
                  value={cvv}
                  onChangeText={setCvv}
                />

              </View>

            </View>

          </View>
        )}

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
          style={styles.payBtn}
          onPress={handlePayment}
          disabled={loading}
        >

          {loading ? (

            <ActivityIndicator
              color="#fff"
            />

          ) : (

            <Text style={styles.payText}>
              {paymentMethod ===
              "Cash on Delivery"
                ? "Place Order"
                : "Pay Now"}
            </Text>

          )}

        </TouchableOpacity>

      </View>

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
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#fff",
    margin: 20,
    borderRadius: 20,
    padding: 20,
    elevation: 4,
  },

  label: {
    color: "#777",
    marginBottom: 10,
  },

  method: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4CAF50",
  },

  infoCard: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    elevation: 4,
  },

  infoTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 15,
    color: "#222",
  },

  infoText: {
    marginTop: 10,
    textAlign: "center",
    color: "#666",
    lineHeight: 22,
  },

  inputLabel: {
    marginTop: 15,
    marginBottom: 8,
    color: "#444",
    fontWeight: "600",
  },

  input: {
    backgroundColor: "#F2F2F2",
    borderRadius: 14,
    padding: 15,
    fontSize: 15,
  },

  row: {
    flexDirection: "row",
    marginTop: 10,
  },

  bottomBox: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 18,
    flexDirection: "row",
    justifyContent:
      "space-between",
    alignItems: "center",
    elevation: 10,
  },

  totalLabel: {
    color: "#777",
  },

  total: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
  },

  payBtn: {
    backgroundColor: "#4CAF50",
    paddingHorizontal: 30,
    paddingVertical: 16,
    borderRadius: 15,
  },

  payText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

});