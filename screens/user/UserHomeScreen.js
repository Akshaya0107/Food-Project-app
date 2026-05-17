// ======================================================
// FILE: screens/user/UserHomeScreen.js
// COMPLETE UPDATED GASTRO PULSE VERSION
// ======================================================

import React from "react";

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import DailyHealthProgress from "./DailyHealthProgress";

export default function UserHomeScreen({
  navigation,
}) {

  const suggestedMeals = [

    {
      id: 1,
      title: "Mediterranean Bowl",
      kcal: "450 kcal",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    },

    {
      id: 2,
      title: "Healthy Salmon",
      kcal: "380 kcal",
      image:
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
    },

    {
      id: 3,
      title: "Protein Veg Bowl",
      kcal: "320 kcal",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    },

  ];

  const categories = [

    {
      id: 1,
      title: "Casual Cravings",
      description:
        "Enjoy your favorite comfort foods",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    },

    {
      id: 2,
      title: "Nutrition Meals",
      description:
        "Meals tailored to your fitness goals",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
    },

    {
      id: 3,
      title: "Health Centric",
      description:
        "Meals designed for healthy living",
      image:
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
    },

  ];

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

            <Text style={styles.greeting}>
              Hello 👋
            </Text>

            <Text style={styles.username}>
              Welcome to GastroPulse
            </Text>

          </View>

          <TouchableOpacity
            style={styles.notificationBtn}
            onPress={() =>
              navigation.navigate(
                "Notifications"
              )
            }
          >

            <Ionicons
              name="notifications-outline"
              size={26}
              color="#111"
            />

          </TouchableOpacity>

        </View>

        {/* SEARCH BAR */}

        <TouchableOpacity
          style={styles.searchBar}
          onPress={() =>
            navigation.navigate(
              "CasualCravings"
            )
          }
        >

          <Ionicons
            name="search-outline"
            size={20}
            color="#777"
          />

          <Text style={styles.searchText}>
            Search healthy meals...
          </Text>

        </TouchableOpacity>

        {/* DAILY HEALTH */}

        <DailyHealthProgress
          navigation={navigation}
        />

        {/* SUGGESTED MEALS */}

        <Text style={styles.sectionTitle}>
          Suggested Meals
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={
            false
          }
        >

          {suggestedMeals.map(
            (meal) => (

              <View
                key={meal.id}
                style={styles.mealCard}
              >

                <Image
                  source={{
                    uri: meal.image,
                  }}
                  style={
                    styles.mealImage
                  }
                />

                <View
                  style={
                    styles.mealContent
                  }
                >

                  <Text
                    style={
                      styles.mealTitle
                    }
                  >
                    {meal.title}
                  </Text>

                  <Text
                    style={styles.kcal}
                  >
                    {meal.kcal}
                  </Text>

                  <TouchableOpacity
                    style={
                      styles.addButton
                    }
                    onPress={() =>
                      navigation.navigate(
                        "CompanySelection",
                        {
                          food: {
                            name:
                              meal.title,
                            image:
                              meal.image,
                          },
                        }
                      )
                    }
                  >

                    <Text
                      style={
                        styles.addText
                      }
                    >
                      Add to Cart
                    </Text>

                  </TouchableOpacity>

                </View>

              </View>

            )
          )}

        </ScrollView>

        {/* ACTIVE ORDER */}

        <Text style={styles.sectionTitle}>
          Active Order
        </Text>

        <View style={styles.orderCard}>

          <View style={styles.orderTop}>

            <Text style={styles.orderId}>
              Order #GP1024
            </Text>

            <View
              style={styles.statusBadge}
            >

              <Text
                style={
                  styles.statusText
                }
              >
                Preparing
              </Text>

            </View>

          </View>

          <Text
            style={styles.deliveryText}
          >
            Estimated delivery:
            25 mins
          </Text>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate(
                "Cart"
              )
            }
          >

            <Text
              style={styles.trackOrder}
            >
              Track Order →
            </Text>

          </TouchableOpacity>

        </View>

        {/* EXPLORE */}

        <Text style={styles.sectionTitle}>
          Explore Categories
        </Text>

        {categories.map((item) => (

          <TouchableOpacity
            key={item.id}
            style={styles.categoryCard}
            onPress={() => {

              if (
                item.title ===
                "Casual Cravings"
              ) {

                navigation.navigate(
                  "CasualCravings"
                );

              } else if (
                item.title ===
                "Nutrition Meals"
              ) {

                navigation.navigate("NutritionalMealForm")

              } else if (
                item.title ===
                "Health Centric"
              ) {

                navigation.navigate(
                  "HealthCentricMealForm"
                );
              }
            }}
          >

            <Image
              source={{
                uri: item.image,
              }}
              style={
                styles.categoryImage
              }
            />

            <View style={styles.overlay}>

              <Text
                style={
                  styles.categoryTitle
                }
              >
                {item.title}
              </Text>

              <Text
                style={
                  styles.categoryDescription
                }
              >
                {item.description}
              </Text>

            </View>

          </TouchableOpacity>

        ))}

        <View style={{ height: 100 }} />

      </ScrollView>

      {/* BOTTOM TAB */}

      <View style={styles.bottomTab}>

        <TouchableOpacity
          style={styles.tabItem}
        >

          <Ionicons
            name="home"
            size={24}
            color="#23B6A6"
          />

          <Text style={styles.activeTab}>
            Home
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() =>
            navigation.navigate("Cart")
          }
        >

          <Ionicons
            name="cart-outline"
            size={24}
            color="#777"
          />

          <Text
            style={styles.inactiveTab}
          >
            Cart
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() =>
            navigation.navigate(
              "Profile"
            )
          }
        >

          <Ionicons
            name="person-outline"
            size={24}
            color="#777"
          />

          <Text
            style={styles.inactiveTab}
          >
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
    backgroundColor: "#F7F7F7",
    paddingHorizontal: 18,
    paddingTop: 15,
  },

  header: {
    flexDirection: "row",
    justifyContent:
      "space-between",
    alignItems: "center",
    marginBottom: 25,
  },

  greeting: {
    fontSize: 16,
    color: "#666",
  },

  username: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111",
    marginTop: 4,
  },

  notificationBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  searchBar: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 14,
    marginBottom: 25,
  },

  searchText: {
    marginLeft: 10,
    color: "#777",
    fontSize: 15,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
    marginBottom: 16,
    marginTop: 10,
  },

  mealCard: {
    width: 240,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    overflow: "hidden",
    marginRight: 16,
  },

  mealImage: {
    width: "100%",
    height: 140,
  },

  mealContent: {
    padding: 15,
  },

  mealTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
    marginBottom: 8,
  },

  kcal: {
    color: "#23B6A6",
    fontWeight: "600",
    marginBottom: 15,
  },

  addButton: {
    backgroundColor: "#23B6A6",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },

  addText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },

  orderCard: {
    backgroundColor: "#23B6A6",
    borderRadius: 18,
    padding: 20,
    marginBottom: 25,
  },

  orderTop: {
    flexDirection: "row",
    justifyContent:
      "space-between",
    alignItems: "center",
  },

  orderId: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

  statusBadge: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },

  statusText: {
    color: "#23B6A6",
    fontWeight: "700",
    fontSize: 12,
  },

  deliveryText: {
    color: "#EFFFFB",
    marginTop: 12,
    marginBottom: 14,
  },

  trackOrder: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 15,
  },

  categoryCard: {
    height: 160,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 18,
  },

  categoryImage: {
    width: "100%",
    height: "100%",
  },

  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 18,
    backgroundColor:
      "rgba(0,0,0,0.35)",
  },

  categoryTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
  },

  categoryDescription: {
    color: "#FFFFFF",
    marginTop: 5,
    fontSize: 13,
  },

  bottomTab: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 75,
    backgroundColor: "#FFFFFF",
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