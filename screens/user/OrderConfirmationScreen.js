// ======================================================
// FILE: screens/user/OrderConfirmationScreen.js
// GASTROPULSE VERSION
// ======================================================

import React from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function OrderConfirmationScreen({
  navigation,
  route,
}) {
  const {
    orderId,
    total,
    paymentMethod,
    cartItems,
  } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      >
        {/* SUCCESS */}
        <View style={styles.successContainer}>
          <View style={styles.iconCircle}>
            <Ionicons
              name="checkmark"
              size={65}
              color="#fff"
            />
          </View>

          <Text style={styles.successTitle}>
            Order Confirmed 🎉
          </Text>

          <Text style={styles.successSub}>
            Your GastroPulse meal order has
            been placed successfully.
          </Text>
        </View>

        {/* ORDER DETAILS */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Order Summary
          </Text>

          <View style={styles.row}>
            <Text style={styles.label}>
              Order ID
            </Text>

            <Text style={styles.value}>
              #{orderId}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>
              Payment
            </Text>

            <Text style={styles.value}>
              {paymentMethod}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>
              Total Amount
            </Text>

            <Text style={styles.total}>
              ₹{total}
            </Text>
          </View>
        </View>

        {/* ORDERED ITEMS */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Ordered Meals
          </Text>

          {cartItems.map((item, index) => (
            <View
              key={index}
              style={styles.itemRow}
            >
              <Image
                source={{
                  uri: item.image,
                }}
                style={styles.image}
              />

              <View style={{ flex: 1 }}>
                <Text style={styles.foodName}>
                  {item.foodName}
                </Text>

                <Text style={styles.hotel}>
                  {item.hotel}
                </Text>

                <Text style={styles.price}>
                  ₹
                  {typeof item.price ===
                  "string"
                    ? item.price.replace(
                        "₹",
                        ""
                      )
                    : item.price}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* TRACKING */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Live Status
          </Text>

          <View style={styles.statusRow}>
            <View style={styles.activeIcon}>
              <Ionicons
                name="restaurant"
                size={22}
                color="#23B6A6"
              />
            </View>

            <View>
              <Text style={styles.statusTitle}>
                Preparing Your Meal
              </Text>

              <Text style={styles.statusSub}>
                Our kitchen is preparing
                your healthy order.
              </Text>
            </View>
          </View>

          <View style={styles.line} />

          <View style={styles.statusRow}>
            <View style={styles.pendingIcon}>
              <Ionicons
                name="bicycle"
                size={22}
                color="#999"
              />
            </View>

            <View>
              <Text style={styles.pendingTitle}>
                Delivery Partner
              </Text>

              <Text style={styles.statusSub}>
                Waiting for pickup.
              </Text>
            </View>
          </View>
        </View>

        {/* HEALTH MESSAGE */}
        <View style={styles.healthCard}>
          <Ionicons
            name="heart"
            size={26}
            color="#23B6A6"
          />

          <Text style={styles.healthText}>
            Thank you for choosing
            GastroPulse 💚 Stay healthy,
            hydrated, and enjoy your meal.
          </Text>
        </View>
      </ScrollView>

      {/* BUTTON */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.homeBtn}
          onPress={() =>
            navigation.navigate(
              "UserHome"
            )
          }
        >
          <Text style={styles.homeText}>
            Back to Home
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },

  successContainer: {
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  iconCircle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: "#23B6A6",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },

  successTitle: {
    fontSize: 30,
    fontWeight: "800",
    color: "#111",
    textAlign: "center",
  },

  successSub: {
    fontSize: 15,
    color: "#666",
    textAlign: "center",
    marginTop: 12,
    lineHeight: 24,
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 18,
    marginTop: 20,
    borderRadius: 22,
    padding: 20,
    elevation: 4,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
    marginBottom: 18,
  },

  row: {
    flexDirection: "row",
    justifyContent:
      "space-between",
    marginBottom: 14,
  },

  label: {
    color: "#777",
    fontSize: 15,
  },

  value: {
    color: "#111",
    fontWeight: "700",
    fontSize: 15,
  },

  total: {
    color: "#23B6A6",
    fontWeight: "800",
    fontSize: 20,
  },

  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 18,
    marginRight: 14,
  },

  foodName: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111",
  },

  hotel: {
    color: "#666",
    marginTop: 6,
  },

  price: {
    color: "#23B6A6",
    fontWeight: "700",
    marginTop: 8,
    fontSize: 16,
  },

  statusRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  activeIcon: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#E8FFFB",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  pendingIcon: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#EFEFEF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  statusTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
  },

  pendingTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#888",
  },

  statusSub: {
    color: "#666",
    marginTop: 4,
    width: 220,
  },

  line: {
    height: 40,
    width: 2,
    backgroundColor: "#DDD",
    marginLeft: 25,
    marginVertical: 10,
  },

  healthCard: {
    backgroundColor: "#EFFFFB",
    marginHorizontal: 18,
    marginTop: 20,
    borderRadius: 20,
    padding: 18,
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 120,
  },

  healthText: {
    flex: 1,
    marginLeft: 12,
    color: "#333",
    lineHeight: 22,
    fontSize: 14,
  },

  bottomContainer: {
    position: "absolute",
    bottom: 20,
    left: 18,
    right: 18,
  },

  homeBtn: {
    backgroundColor: "#23B6A6",
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: "center",
  },

  homeText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});