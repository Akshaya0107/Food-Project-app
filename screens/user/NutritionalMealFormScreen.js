// ======================================================
// FILE: screens/user/NutritionalMealFormScreen.js
// GASTROPULSE VERSION
// ======================================================

import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  Alert,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function NutritionalMealFormScreen({
  navigation,
}) {
  const [mealTime, setMealTime] =
    useState("");

  const [foodType, setFoodType] =
    useState("");

  const [fitnessGoal, setFitnessGoal] =
    useState("");

  const [activityLevel, setActivityLevel] =
    useState("");

  const [calorieGoal, setCalorieGoal] =
    useState("");

  const [allergy, setAllergy] =
    useState("");

  const [waterIntake, setWaterIntake] =
    useState("");

  const [sleepHours, setSleepHours] =
    useState("");

  const [notes, setNotes] =
    useState("");

  // SUBMIT
  const handleSubmit = () => {
    if (!mealTime) {
      Alert.alert(
        "Meal Time Required",
        "Please select your meal timing"
      );
      return;
    }

    if (!foodType) {
      Alert.alert(
        "Food Preference Required",
        "Please select food preference"
      );
      return;
    }

    navigation.navigate(
      "NutritionalSuggestions",
      {
        mealTime,
        foodType,
        fitnessGoal,
        activityLevel,
        calorieGoal,
        allergy,
        waterIntake,
        sleepHours,
        notes,
      }
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={
          false
        }
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
              size={24}
              color="#111"
            />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            GastroPulse Nutrition
          </Text>
        </View>

        {/* TITLE */}
        <Text style={styles.title}>
          Personalized Nutrition Plan
        </Text>

        <Text style={styles.subtitle}>
          Get healthy meal suggestions
          based on your lifestyle,
          fitness goals, and food
          preferences.
        </Text>

        {/* MEAL TIME */}
        <Text style={styles.label}>
          Meal Timing
        </Text>

        <View style={styles.row}>
          {[
            "Breakfast",
            "Lunch",
            "Snacks",
            "Dinner",
          ].map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.option,
                mealTime === item &&
                  styles.activeOption,
              ]}
              onPress={() =>
                setMealTime(item)
              }
            >
              <Text
                style={[
                  styles.optionText,
                  mealTime === item &&
                    styles.activeText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* FOOD TYPE */}
        <Text style={styles.label}>
          Food Preference
        </Text>

        <View style={styles.row}>
          {[
            "Vegetarian",
            "Vegan",
            "Non-Veg",
            "High Protein",
          ].map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.option,
                foodType === item &&
                  styles.activeOption,
              ]}
              onPress={() =>
                setFoodType(item)
              }
            >
              <Text
                style={[
                  styles.optionText,
                  foodType === item &&
                    styles.activeText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* FITNESS GOAL */}
        <Text style={styles.label}>
          Fitness Goal
        </Text>

        <View style={styles.row}>
          {[
            "Weight Loss",
            "Weight Gain",
            "Muscle Gain",
            "Stay Fit",
          ].map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.option,
                fitnessGoal === item &&
                  styles.activeOption,
              ]}
              onPress={() =>
                setFitnessGoal(item)
              }
            >
              <Text
                style={[
                  styles.optionText,
                  fitnessGoal === item &&
                    styles.activeText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* ACTIVITY LEVEL */}
        <Text style={styles.label}>
          Activity Level
        </Text>

        <TextInput
          placeholder="Low / Moderate / High"
          placeholderTextColor="#999"
          style={styles.input}
          value={activityLevel}
          onChangeText={
            setActivityLevel
          }
        />

        {/* CALORIE GOAL */}
        <Text style={styles.label}>
          Daily Calorie Goal
        </Text>

        <TextInput
          placeholder="Example: 2200 kcal"
          placeholderTextColor="#999"
          style={styles.input}
          keyboardType="numeric"
          value={calorieGoal}
          onChangeText={setCalorieGoal}
        />

        {/* ALLERGIES */}
        <Text style={styles.label}>
          Food Allergies
        </Text>

        <TextInput
          placeholder="Nuts, Dairy, Gluten..."
          placeholderTextColor="#999"
          style={styles.input}
          value={allergy}
          onChangeText={setAllergy}
        />

        {/* WATER */}
        <Text style={styles.label}>
          Water Intake
        </Text>

        <TextInput
          placeholder="Example: 3 Litres"
          placeholderTextColor="#999"
          style={styles.input}
          value={waterIntake}
          onChangeText={setWaterIntake}
        />

        {/* SLEEP */}
        <Text style={styles.label}>
          Sleep Hours
        </Text>

        <TextInput
          placeholder="Example: 7 Hours"
          placeholderTextColor="#999"
          style={styles.input}
          value={sleepHours}
          onChangeText={setSleepHours}
        />

        {/* NOTES */}
        <Text style={styles.label}>
          Additional Notes
        </Text>

        <TextInput
          placeholder="Special diet instructions..."
          placeholderTextColor="#999"
          multiline
          numberOfLines={5}
          style={styles.notesInput}
          value={notes}
          onChangeText={setNotes}
        />

        {/* BUTTON */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>
            Get Meal Suggestions
          </Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
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
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 15,
    color: "#111",
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#111",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 14,
    color: "#666",
    lineHeight: 22,
    marginBottom: 28,
  },

  label: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
    marginBottom: 12,
    marginTop: 12,
  },

  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
  },

  option: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginRight: 10,
    marginBottom: 10,
  },

  activeOption: {
    backgroundColor: "#23B6A6",
    borderColor: "#23B6A6",
  },

  optionText: {
    color: "#333",
    fontWeight: "600",
    fontSize: 13,
  },

  activeText: {
    color: "#fff",
  },

  input: {
    backgroundColor: "#fff",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    padding: 16,
    marginBottom: 14,
    fontSize: 14,
    color: "#222",
  },

  notesInput: {
    backgroundColor: "#fff",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    padding: 16,
    height: 120,
    textAlignVertical: "top",
    marginBottom: 20,
    color: "#222",
  },

  button: {
    backgroundColor: "#23B6A6",
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});