// FILE: screens/user/HealthCentricMealFormScreen.js

import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";

export default function HealthCentricMealFormScreen({
  navigation,
}) {

  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [notes, setNotes] = useState("");

  const [mealTime, setMealTime] =
    useState("");

  const [foodType, setFoodType] =
    useState("");

  const [conditions, setConditions] =
    useState([]);

  /* HEALTH CONDITIONS */
  const conditionList = [
    "Diabetes",
    "High Blood Pressure",
    "Heart Disease",
    "Kidney Issues",
    "Thyroid Disorder",
    "Food Allergies",
    "Digestive Issues",
    "Weight Loss",
  ];

  /* TOGGLE CONDITIONS */
  const toggleCondition = (
    condition
  ) => {

    if (
      conditions.includes(condition)
    ) {

      setConditions(
        conditions.filter(
          (item) =>
            item !== condition
        )
      );

    } else {

      setConditions([
        ...conditions,
        condition,
      ]);

    }
  };

  /* SUBMIT */
  const handleSubmit = () => {

    if (!age || !weight) {

      Alert.alert(
        "Missing Details",
        "Please enter age and weight"
      );

      return;
    }

    if (!mealTime) {

      Alert.alert(
        "Meal Time Required",
        "Please select meal timing"
      );

      return;
    }

    if (!foodType) {

      Alert.alert(
        "Food Preference",
        "Please select food type"
      );

      return;
    }

    Alert.alert(
      "Success 🎉",
      "Personalized meal recommendations generated successfully!"
    );

    navigation.navigate(
      "CasualCravings"
    );
  };

  return (

    <SafeAreaView style={styles.safe}>

      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >

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

          <Text style={styles.headerTitle}>
            Health Meal Planner
          </Text>

        </View>

        {/* TOP CARD */}
        <View style={styles.topCard}>

          <Ionicons
            name="fitness"
            size={38}
            color="#16b39a"
          />

          <Text style={styles.topTitle}>
            Personalized Healthy Meals
          </Text>

          <Text style={styles.topDesc}>
            Get customized food recommendations
            based on your health conditions
            and food preferences.
          </Text>

        </View>

        {/* BASIC DETAILS */}
        <Text style={styles.sectionTitle}>
          Basic Details
        </Text>

        {/* AGE */}
        <Text style={styles.label}>
          Age
        </Text>

        <TextInput
          placeholder="Enter your age"
          style={styles.input}
          keyboardType="numeric"
          value={age}
          onChangeText={setAge}
        />

        {/* WEIGHT */}
        <Text style={styles.label}>
          Weight (kg)
        </Text>

        <TextInput
          placeholder="Enter your weight"
          style={styles.input}
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
        />

        {/* HEIGHT */}
        <Text style={styles.label}>
          Height (cm)
        </Text>

        <TextInput
          placeholder="Enter your height"
          style={styles.input}
          keyboardType="numeric"
          value={height}
          onChangeText={setHeight}
        />

        {/* MEAL TIME */}
        <Text style={styles.sectionTitle}>
          Meal Timing
        </Text>

        <View style={styles.optionRow}>

          {[
            "Breakfast",
            "Lunch",
            "Snacks",
            "Dinner",
          ].map((item) => (

            <TouchableOpacity
              key={item}
              style={[
                styles.optionBtn,

                mealTime === item &&
                  styles.activeBtn,
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
        <Text style={styles.sectionTitle}>
          Food Preference
        </Text>

        <View style={styles.optionRow}>

          {[
            "Vegan",
            "Vegetarian",
            "Non-Veg",
          ].map((item) => (

            <TouchableOpacity
              key={item}
              style={[
                styles.optionBtn,

                foodType === item &&
                  styles.activeBtn,
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

        {/* CONDITIONS */}
        <Text style={styles.sectionTitle}>
          Health Conditions
        </Text>

        <View
          style={
            styles.checkboxContainer
          }
        >

          {conditionList.map(
            (condition) => (

              <TouchableOpacity
                key={condition}
                style={
                  styles.checkboxRow
                }
                onPress={() =>
                  toggleCondition(
                    condition
                  )
                }
              >

                <View
                  style={[
                    styles.checkbox,

                    conditions.includes(
                      condition
                    ) &&
                      styles.checkedBox,
                  ]}
                />

                <Text
                  style={
                    styles.checkboxText
                  }
                >
                  {condition}
                </Text>

              </TouchableOpacity>

            )
          )}
        </View>

        {/* NOTES */}
        <Text style={styles.sectionTitle}>
          Additional Notes
        </Text>

        <TextInput
          placeholder="Enter doctor suggestions, allergies, low sugar, low sodium etc..."
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
            Generate Meal Plan
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
    paddingTop: 10,
  },

  header: {
    flexDirection: "row",
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

  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginLeft: 15,
    color: "#222",
  },

  topCard: {
    backgroundColor: "#EAF8F5",
    borderRadius: 24,
    padding: 24,
    marginBottom: 25,
    alignItems: "center",
  },

  topTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#222",
    marginTop: 12,
    textAlign: "center",
  },

  topDesc: {
    fontSize: 14,
    color: "#555",
    marginTop: 10,
    textAlign: "center",
    lineHeight: 22,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#222",
    marginBottom: 15,
    marginTop: 10,
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },

  input: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    marginBottom: 18,
    fontSize: 15,
  },

  optionRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 15,
  },

  optionBtn: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 12,
    marginRight: 10,
    marginBottom: 10,
  },

  activeBtn: {
    backgroundColor: "#16b39a",
    borderColor: "#16b39a",
  },

  optionText: {
    color: "#222",
    fontWeight: "600",
  },

  activeText: {
    color: "#fff",
  },

  checkboxContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent:
      "space-between",
  },

  checkboxRow: {
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 6,
    marginRight: 10,
    backgroundColor: "#fff",
  },

  checkedBox: {
    backgroundColor: "#16b39a",
    borderColor: "#16b39a",
  },

  checkboxText: {
    fontSize: 14,
    color: "#333",
    flex: 1,
  },

  notesInput: {
    backgroundColor: "#fff",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 16,
    textAlignVertical: "top",
    minHeight: 120,
    fontSize: 15,
  },

  button: {
    backgroundColor: "#16b39a",
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: "center",
    marginTop: 30,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 17,
  },

});