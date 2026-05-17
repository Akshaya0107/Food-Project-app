// ======================================================
// FILE: screens/user/NutritionalSuggestionScreen.js
// GASTROPULSE VERSION
// ======================================================

import React from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function NutritionalSuggestionScreen({
  route,
  navigation,
}) {
  const {
    mealTime,
    foodType,
    fitnessGoal,
    activityLevel,
    calorieGoal,
  } = route.params;

  // ======================================================
  // GASTROPULSE FOOD DATABASE
  // ======================================================

  const foods = [
    {
      id: "1",
      name: "Protein Oats Bowl",
      meal: "Breakfast",
      type: "Vegetarian",
      goal: "Weight Loss",
      calories: "320 kcal",
      protein: "20g",
      image:
        "https://images.unsplash.com/photo-1517673400267-0251440c45dc",
    },

    {
      id: "2",
      name: "Egg Sandwich",
      meal: "Breakfast",
      type: "Non-Veg",
      goal: "Muscle Gain",
      calories: "420 kcal",
      protein: "28g",
      image:
        "https://images.unsplash.com/photo-1482049016688-2d3e1b311543",
    },

    {
      id: "3",
      name: "Avocado Toast",
      meal: "Breakfast",
      type: "Vegan",
      goal: "Stay Fit",
      calories: "280 kcal",
      protein: "10g",
      image:
        "https://images.unsplash.com/photo-1525351484163-7529414344d8",
    },

    {
      id: "4",
      name: "Paneer Rice Bowl",
      meal: "Lunch",
      type: "Vegetarian",
      goal: "Muscle Gain",
      calories: "510 kcal",
      protein: "34g",
      image:
        "https://images.unsplash.com/photo-1604908176997-4315d3b0b0a2",
    },

    {
      id: "5",
      name: "Chicken Protein Bowl",
      meal: "Lunch",
      type: "Non-Veg",
      goal: "Muscle Gain",
      calories: "620 kcal",
      protein: "42g",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947",
    },

    {
      id: "6",
      name: "Quinoa Salad",
      meal: "Lunch",
      type: "Vegan",
      goal: "Weight Loss",
      calories: "290 kcal",
      protein: "16g",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    },

    {
      id: "7",
      name: "Grilled Salmon",
      meal: "Dinner",
      type: "Non-Veg",
      goal: "Stay Fit",
      calories: "450 kcal",
      protein: "38g",
      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554",
    },

    {
      id: "8",
      name: "Veg Soup Bowl",
      meal: "Dinner",
      type: "Vegan",
      goal: "Weight Loss",
      calories: "240 kcal",
      protein: "12g",
      image:
        "https://images.unsplash.com/photo-1547592166-23ac45744acd",
    },

    {
      id: "9",
      name: "Paneer Tikka Plate",
      meal: "Dinner",
      type: "Vegetarian",
      goal: "Stay Fit",
      calories: "430 kcal",
      protein: "30g",
      image:
        "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8",
    },

    {
      id: "10",
      name: "Fruit Nut Mix",
      meal: "Snacks",
      type: "Vegan",
      goal: "Stay Fit",
      calories: "220 kcal",
      protein: "8g",
      image:
        "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af",
    },

    {
      id: "11",
      name: "Protein Smoothie",
      meal: "Snacks",
      type: "Vegetarian",
      goal: "Muscle Gain",
      calories: "310 kcal",
      protein: "24g",
      image:
        "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4",
    },

    {
      id: "12",
      name: "Roasted Chickpeas",
      meal: "Snacks",
      type: "Vegan",
      goal: "Weight Loss",
      calories: "230 kcal",
      protein: "14g",
      image:
        "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082",
    },
  ];

  // ======================================================
  // FILTER
  // ======================================================

  const filteredFoods = foods.filter(
    (item) =>
      item.meal === mealTime &&
      item.type === foodType
  );

  // ======================================================
  // FOOD CARD
  // ======================================================

  const renderFood = ({ item }) => (
    <View style={styles.card}>
      <Image
        source={{ uri: item.image }}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.foodName}>
          {item.name}
        </Text>

        <View style={styles.infoRow}>
          <Text style={styles.info}>
            🔥 {item.calories}
          </Text>

          <Text style={styles.info}>
            💪 {item.protein}
          </Text>
        </View>

        <Text style={styles.goal}>
          Goal: {item.goal}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate(
              "CompanySelection",
              {
                food: item,
              }
            )
          }
        >
          <Text style={styles.buttonText}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
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
              color="#111"
            />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            GastroPulse Suggestions
          </Text>
        </View>

        {/* USER SUMMARY */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>
            Personalized Meal Plan
          </Text>

          <Text style={styles.summaryText}>
            Meal: {mealTime}
          </Text>

          <Text style={styles.summaryText}>
            Type: {foodType}
          </Text>

          <Text style={styles.summaryText}>
            Goal: {fitnessGoal}
          </Text>

          <Text style={styles.summaryText}>
            Activity: {activityLevel}
          </Text>

          <Text style={styles.summaryText}>
            Calories: {calorieGoal}
          </Text>
        </View>

        {/* LIST */}
        <FlatList
          data={filteredFoods}
          keyExtractor={(item) =>
            item.id
          }
          renderItem={renderFood}
          showsVerticalScrollIndicator={
            false
          }
          contentContainerStyle={{
            paddingBottom: 40,
          }}
          ListEmptyComponent={
            <View style={styles.emptyBox}>
              <Text style={styles.emptyText}>
                No meals found for your
                preferences.
              </Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },

  container: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 18,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
    marginLeft: 15,
  },

  summaryCard: {
    backgroundColor: "#23B6A6",
    padding: 18,
    borderRadius: 18,
    marginBottom: 22,
  },

  summaryTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },

  summaryText: {
    color: "#fff",
    marginBottom: 4,
    fontSize: 14,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 22,
    overflow: "hidden",
    marginBottom: 24,
    elevation: 4,
  },

  image: {
    width: "100%",
    height: 220,
  },

  content: {
    padding: 18,
  },

  foodName: {
    fontSize: 20,
    fontWeight: "800",
    color: "#111",
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  info: {
    color: "#666",
    fontSize: 14,
  },

  goal: {
    marginTop: 10,
    color: "#23B6A6",
    fontWeight: "700",
  },

  button: {
    backgroundColor: "#23B6A6",
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
  },

  emptyBox: {
    alignItems: "center",
    marginTop: 80,
  },

  emptyText: {
    color: "#777",
    fontSize: 16,
  },
});