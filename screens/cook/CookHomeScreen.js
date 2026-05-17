import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";

export default function CookHomeScreen({
  navigation,
  route,
}) {

  const cookName =
    route?.params?.cookName ||
    "Chef Gastro";

  const [orders, setOrders] =
    useState([

      {
        id: "GP1001",
        customer: "Akash",
        meal: "Protein Power Bowl",
        qty: 2,
        amount: 420,
        status: "Pending",
      },

      {
        id: "GP1002",
        customer: "Divya",
        meal: "Keto Chicken Meal",
        qty: 1,
        amount: 310,
        status: "Preparing",
      },

      {
        id: "GP1003",
        customer: "Rahul",
        meal: "Diabetic Care Meal",
        qty: 3,
        amount: 780,
        status: "Ready",
      },

    ]);

  const totalOrders =
    orders.length;

  const pendingOrders =
    orders.filter(
      item =>
        item.status === "Pending"
    ).length;

  const preparingOrders =
    orders.filter(
      item =>
        item.status === "Preparing"
    ).length;

  const totalEarnings =
    orders.reduce(
      (sum, item) =>
        sum + item.amount,
      0
    );

  const acceptOrder = id => {

    const updated =
      orders.map(item => {

        if (item.id === id) {

          return {
            ...item,
            status: "Preparing",
          };

        }

        return item;

      });

    setOrders(updated);

    Alert.alert(
      "Order Accepted",
      "Meal preparation started"
    );

  };

  const readyOrder = id => {

    const updated =
      orders.map(item => {

        if (item.id === id) {

          return {
            ...item,
            status: "Ready",
          };

        }

        return item;

      });

    setOrders(updated);

    Alert.alert(
      "Meal Ready",
      "Delivery partner notified"
    );

  };

  return (

    <SafeAreaView style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={
          false
        }
      >

        {/* HEADER */}

        <View style={styles.header}>

          <View>

            <Text style={styles.welcome}>
              Welcome Back 👋
            </Text>

            <Text style={styles.cookName}>
              {cookName}
            </Text>

          </View>

          <TouchableOpacity>

            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/men/32.jpg",
              }}
              style={styles.profile}
            />

          </TouchableOpacity>

        </View>

        {/* DASHBOARD */}

        <View style={styles.dashboardRow}>

          <View style={styles.card}>

            <Ionicons
              name="receipt-outline"
              size={28}
              color="#23B6A6"
            />

            <Text style={styles.cardValue}>
              {totalOrders}
            </Text>

            <Text style={styles.cardLabel}>
              Total Orders
            </Text>

          </View>

          <View style={styles.card}>

            <Ionicons
              name="time-outline"
              size={28}
              color="#FF9800"
            />

            <Text style={styles.cardValue}>
              {pendingOrders}
            </Text>

            <Text style={styles.cardLabel}>
              Pending
            </Text>

          </View>

        </View>

        <View style={styles.dashboardRow}>

          <View style={styles.card}>

            <Ionicons
              name="restaurant-outline"
              size={28}
              color="#23B6A6"
            />

            <Text style={styles.cardValue}>
              {preparingOrders}
            </Text>

            <Text style={styles.cardLabel}>
              Preparing
            </Text>

          </View>

          <View style={styles.card}>

            <Ionicons
              name="wallet-outline"
              size={28}
              color="#23B6A6"
            />

            <Text style={styles.cardValue}>
              ₹{totalEarnings}
            </Text>

            <Text style={styles.cardLabel}>
              Earnings
            </Text>

          </View>

        </View>

        {/* LIVE ORDERS */}

        <Text style={styles.sectionTitle}>
          Live Orders
        </Text>

        {orders.map(item => (

          <View
            key={item.id}
            style={styles.orderCard}
          >

            <View style={styles.orderTop}>

              <Text style={styles.orderId}>
                {item.id}
              </Text>

              <View
                style={styles.statusBadge}
              >

                <Text
                  style={styles.statusText}
                >
                  {item.status}
                </Text>

              </View>

            </View>

            <Text style={styles.customer}>
              Customer:
              {" "}
              {item.customer}
            </Text>

            <Text style={styles.meal}>
              Meal:
              {" "}
              {item.meal}
            </Text>

            <Text style={styles.meal}>
              Quantity:
              {" "}
              {item.qty}
            </Text>

            <Text style={styles.amount}>
              ₹{item.amount}
            </Text>

            {item.status ===
              "Pending" && (

              <TouchableOpacity
                style={styles.acceptBtn}
                onPress={() =>
                  acceptOrder(item.id)
                }
              >

                <Text
                  style={styles.btnText}
                >
                  Accept Order
                </Text>

              </TouchableOpacity>

            )}

            {item.status ===
              "Preparing" && (

              <TouchableOpacity
                style={styles.readyBtn}
                onPress={() =>
                  readyOrder(item.id)
                }
              >

                <Text
                  style={styles.btnText}
                >
                  Mark as Ready
                </Text>

              </TouchableOpacity>

            )}

            {item.status ===
              "Ready" && (

              <View style={styles.readyBox}>

                <Ionicons
                  name="checkmark-circle"
                  size={22}
                  color="#23B6A6"
                />

                <Text
                  style={styles.readyLabel}
                >
                  Waiting for pickup
                </Text>

              </View>

            )}

          </View>

        ))}

        <View style={{ height: 120 }} />

      </ScrollView>

{/* BOTTOM TAB */}

<View style={styles.bottomTab}>

  {/* DASHBOARD */}

  <TouchableOpacity
    style={styles.tabItem}
    onPress={() =>
      navigation.navigate(
        "CookHome",
        { cookName }
      )
    }
  >

    <Ionicons
      name="home"
      size={24}
      color="#23B6A6"
    />

    <Text style={styles.activeTab}>
      Dashboard
    </Text>

  </TouchableOpacity>

  {/* MENU */}

  <TouchableOpacity
    style={styles.tabItem}
    onPress={() =>
      navigation.navigate(
        "CookMenu",
        { cookName }
      )
    }
  >

    <Ionicons
      name="restaurant-outline"
      size={24}
      color="#777"
    />

    <Text style={styles.inactiveTab}>
      Menu
    </Text>

  </TouchableOpacity>

  {/* ORDERS */}

  <TouchableOpacity
    style={styles.tabItem}
    onPress={() =>
      navigation.navigate(
        "CookOrders",
        { cookName }
      )
    }
  >

    <Ionicons
      name="receipt-outline"
      size={24}
      color="#777"
    />

    <Text style={styles.inactiveTab}>
      Orders
    </Text>

  </TouchableOpacity>

  {/* PROFILE */}

  <TouchableOpacity
    style={styles.tabItem}
    onPress={() =>
      navigation.navigate(
        "CookProfile",
        { cookName }
      )
    }
  >

    <Ionicons
      name="person-outline"
      size={24}
      color="#777"
    />

    <Text style={styles.inactiveTab}>
      Profile
    </Text>

  </TouchableOpacity>

</View>

    </SafeAreaView>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F6F7FB",
  },

  header: {
    flexDirection: "row",
    justifyContent:
      "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingTop: 15,
    marginBottom: 25,
  },

  welcome: {
    fontSize: 14,
    color: "#777",
  },

  cookName: {
    fontSize: 26,
    fontWeight: "700",
    color: "#111",
    marginTop: 5,
  },

  profile: {
    width: 52,
    height: 52,
    borderRadius: 26,
  },

  dashboardRow: {
    flexDirection: "row",
    justifyContent:
      "space-between",
    paddingHorizontal: 16,
    marginBottom: 14,
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 20,
    elevation: 3,
  },

  cardValue: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
    marginTop: 10,
  },

  cardLabel: {
    color: "#777",
    marginTop: 5,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 15,
  },

  orderCard: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
    elevation: 3,
  },

  orderTop: {
    flexDirection: "row",
    justifyContent:
      "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  orderId: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111",
  },

  statusBadge: {
    backgroundColor: "#E8FFF7",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  statusText: {
    color: "#23B6A6",
    fontWeight: "700",
    fontSize: 12,
  },

  customer: {
    color: "#555",
    marginBottom: 5,
  },

  meal: {
    color: "#444",
    marginBottom: 5,
  },

  amount: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
    marginTop: 10,
    marginBottom: 14,
  },

  acceptBtn: {
    backgroundColor: "#FF9800",
    padding: 14,
    borderRadius: 14,
    alignItems: "center",
  },

  readyBtn: {
    backgroundColor: "#23B6A6",
    padding: 14,
    borderRadius: 14,
    alignItems: "center",
  },

  btnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
  },

  readyBox: {
    flexDirection: "row",
    alignItems: "center",
  },

  readyLabel: {
    marginLeft: 8,
    color: "#23B6A6",
    fontWeight: "700",
  },

  bottomTab: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 78,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent:
      "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ECECEC",
  },

  tabItem: {
    alignItems: "center",
  },

  activeTab: {
    color: "#23B6A6",
    marginTop: 4,
    fontWeight: "700",
    fontSize: 12,
  },

  inactiveTab: {
    color: "#777",
    marginTop: 4,
    fontSize: 12,
  },

});