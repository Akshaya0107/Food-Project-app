import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function DeliveryOrderStatusScreen({
  route,
  navigation,
}) {

  const { order } = route.params;

  const steps = [
    "Order Accepted",
    "Food Picked Up",
    "On The Way",
    "Delivered",
  ];

  const [currentStep, setCurrentStep] =
    useState(

      steps.indexOf(order.status) !== -1
        ? steps.indexOf(order.status)
        : 0

    );

  const updateStatus = () => {

    if (
      currentStep <
      steps.length - 1
    ) {

      setCurrentStep(
        currentStep + 1
      );

    }

  };

  return (

    <SafeAreaView style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        {/* HEADER */}

        <View style={styles.header}>

          <TouchableOpacity
            onPress={() =>
              navigation.goBack()
            }
          >

            <Ionicons
              name="arrow-back"
              size={28}
              color="#111"
            />

          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Delivery Tracking
          </Text>

          <View style={{ width: 28 }} />

        </View>

        {/* ORDER CARD */}

        <View style={styles.card}>

          <View style={styles.topRow}>

            <View>

              <Text style={styles.orderId}>
                {order.id}
              </Text>

              <Text style={styles.restaurant}>
                {order.restaurant}
              </Text>

            </View>

            <View style={styles.liveBadge}>

              <Text style={styles.liveText}>
                LIVE
              </Text>

            </View>

          </View>

          <View style={styles.infoRow}>

            <Ionicons
              name="person-outline"
              size={20}
              color="#23B6A6"
            />

            <Text style={styles.infoText}>
              {order.customer}
            </Text>

          </View>

          <View style={styles.infoRow}>

            <Ionicons
              name="location-outline"
              size={20}
              color="#23B6A6"
            />

            <Text style={styles.infoText}>
              {order.pickup}
              {" → "}
              {order.drop}
            </Text>

          </View>

          <View style={styles.infoRow}>

            <Ionicons
              name="wallet-outline"
              size={20}
              color="#23B6A6"
            />

            <Text style={styles.infoText}>
              {order.payment}
            </Text>

          </View>

          <View style={styles.amountRow}>

            <Text style={styles.amountLabel}>
              Earnings
            </Text>

            <Text style={styles.amount}>
              ₹{order.amount}
            </Text>

          </View>

        </View>

        {/* STATUS */}

        <View style={styles.statusCard}>

          <Text style={styles.statusTitle}>
            Delivery Progress
          </Text>

          {steps.map((step, index) => {

            const completed =
              index <= currentStep;

            return (

              <View
                key={index}
                style={styles.stepRow}
              >

                {index !==
                  steps.length - 1 && (

                  <View
                    style={[
                      styles.line,

                      {
                        backgroundColor:
                          completed
                            ? "#23B6A6"
                            : "#ddd",
                      },
                    ]}
                  />

                )}

                <View
                  style={[
                    styles.circle,

                    {
                      backgroundColor:
                        completed
                          ? "#23B6A6"
                          : "#ddd",
                    },
                  ]}
                >

                  {completed && (

                    <Ionicons
                      name="checkmark"
                      size={14}
                      color="#fff"
                    />

                  )}

                </View>

                <View>

                  <Text
                    style={[
                      styles.stepText,

                      {
                        color:
                          completed
                            ? "#111"
                            : "#999",
                      },
                    ]}
                  >
                    {step}
                  </Text>

                  <Text style={styles.stepSub}>
                    {completed
                      ? "Completed"
                      : "Pending"}
                  </Text>

                </View>

              </View>

            );

          })}

        </View>

        {/* BUTTON */}

        {currentStep !==
          steps.length - 1 && (

          <TouchableOpacity
            style={styles.button}
            onPress={updateStatus}
          >

            <Ionicons
              name="refresh-outline"
              size={22}
              color="#fff"
            />

            <Text style={styles.buttonText}>
              Update Status
            </Text>

          </TouchableOpacity>

        )}

        {/* COMPLETED */}

        {currentStep ===
          steps.length - 1 && (

          <View style={styles.completedBox}>

            <Ionicons
              name="checkmark-circle"
              size={70}
              color="#23B6A6"
            />

            <Text style={styles.completedTitle}>
              Delivery Completed
            </Text>

            <Text style={styles.completedText}>
              Order delivered successfully
            </Text>

          </View>

        )}

        <View style={{ height: 40 }} />

      </ScrollView>

    </SafeAreaView>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F6FA",
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 22,
    marginBottom: 22,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  orderId: {
    color: "#23B6A6",
    fontWeight: "700",
  },

  restaurant: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
    marginTop: 6,
  },

  liveBadge: {
    backgroundColor: "#23B6A6",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },

  liveText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 12,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  infoText: {
    marginLeft: 10,
    color: "#555",
    flex: 1,
  },

  amountRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  amountLabel: {
    color: "#777",
    fontSize: 16,
  },

  amount: {
    color: "#23B6A6",
    fontSize: 28,
    fontWeight: "700",
  },

  statusCard: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 24,
  },

  statusTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
    marginBottom: 28,
  },

  stepRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 30,
    position: "relative",
  },

  line: {
    position: "absolute",
    left: 10,
    top: 24,
    width: 3,
    height: 55,
    borderRadius: 4,
  },

  circle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    zIndex: 10,
  },

  stepText: {
    fontSize: 17,
    fontWeight: "700",
  },

  stepSub: {
    color: "#777",
    marginTop: 4,
  },

  button: {
    backgroundColor: "#23B6A6",
    height: 58,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 24,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
    marginLeft: 10,
  },

  completedBox: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 35,
    alignItems: "center",
    marginTop: 24,
  },

  completedTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
    marginTop: 14,
  },

  completedText: {
    color: "#666",
    marginTop: 8,
  },

});