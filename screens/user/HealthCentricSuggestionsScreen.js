// FILE: screens/user/HealthCentricSuggestionsScreen.js

import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function HealthCentricSuggestionsScreen({
  route,
  navigation,
}) {

  const {
    mealTime,
    foodType,
    conditions,
  } = route.params;

  /* GASTRO PULSE HEALTHY MEALS */
  const foods = [

    {
      id: '1',
      name: 'Diabetic Friendly Oats',
      meal: 'Breakfast',
      type: 'Vegetarian',
      calories: '280 kcal',
      protein: '18g',
      carbs: '30g',
      fats: '8g',
      image:
        'https://images.unsplash.com/photo-1517673400267-0251440c45dc?q=80&w=1200',
    },

    {
      id: '2',
      name: 'Protein Egg Sandwich',
      meal: 'Breakfast',
      type: 'Non-Vegetarian',
      calories: '340 kcal',
      protein: '26g',
      carbs: '24g',
      fats: '10g',
      image:
        'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1200',
    },

    {
      id: '3',
      name: 'Vegan Avocado Toast',
      meal: 'Breakfast',
      type: 'Vegan',
      calories: '250 kcal',
      protein: '10g',
      carbs: '18g',
      fats: '12g',
      image:
        'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1200',
    },

    {
      id: '4',
      name: 'Grilled Chicken Bowl',
      meal: 'Lunch',
      type: 'Non-Vegetarian',
      calories: '420 kcal',
      protein: '38g',
      carbs: '28g',
      fats: '14g',
      image:
        'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200',
    },

    {
      id: '5',
      name: 'Paneer Protein Plate',
      meal: 'Lunch',
      type: 'Vegetarian',
      calories: '390 kcal',
      protein: '30g',
      carbs: '32g',
      fats: '12g',
      image:
        'https://images.unsplash.com/photo-1604908176997-4315d3b0b0a2?q=80&w=1200',
    },

    {
      id: '6',
      name: 'Vegan Buddha Bowl',
      meal: 'Lunch',
      type: 'Vegan',
      calories: '340 kcal',
      protein: '18g',
      carbs: '36g',
      fats: '11g',
      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200',
    },

    {
      id: '7',
      name: 'Low Sodium Lentil Soup',
      meal: 'Dinner',
      type: 'Vegetarian',
      calories: '260 kcal',
      protein: '16g',
      carbs: '34g',
      fats: '6g',
      image:
        'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1200',
    },

    {
      id: '8',
      name: 'Grilled Fish Plate',
      meal: 'Dinner',
      type: 'Non-Vegetarian',
      calories: '430 kcal',
      protein: '36g',
      carbs: '20g',
      fats: '18g',
      image:
        'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200',
    },

    {
      id: '9',
      name: 'Brown Rice Veg Bowl',
      meal: 'Dinner',
      type: 'Vegan',
      calories: '320 kcal',
      protein: '15g',
      carbs: '40g',
      fats: '10g',
      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200',
    },

    {
      id: '10',
      name: 'Protein Smoothie',
      meal: 'Snacks',
      type: 'Vegetarian',
      calories: '240 kcal',
      protein: '20g',
      carbs: '18g',
      fats: '8g',
      image:
        'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?q=80&w=1200',
    },

  ];

  /* FILTER BASED ON FORM */
  const filteredFoods = foods.filter(
    (item) =>
      item.meal === mealTime &&
      item.type === foodType
  );

  /* FOOD CARD */
  const renderFood = ({ item }) => (

    <View style={styles.card}>

      <Image
        source={{ uri: item.image }}
        style={styles.image}
      />

      <View style={styles.badge}>
        <Text style={styles.badgeText}>
          Healthy
        </Text>
      </View>

      <Text style={styles.foodName}>
        {item.name}
      </Text>

      <Text style={styles.serving}>
        Perfect for {mealTime}
      </Text>

      <View style={styles.nutritionRow}>

        <View style={styles.nutritionBox}>
          <Text style={styles.label}>
            Calories
          </Text>

          <Text style={styles.value}>
            {item.calories}
          </Text>
        </View>

        <View style={styles.nutritionBox}>
          <Text style={styles.label}>
            Protein
          </Text>

          <Text style={styles.value}>
            {item.protein}
          </Text>
        </View>

      </View>

      <View style={styles.nutritionRow}>

        <View style={styles.nutritionBox}>
          <Text style={styles.label}>
            Carbs
          </Text>

          <Text style={styles.value}>
            {item.carbs}
          </Text>
        </View>

        <View style={styles.nutritionBox}>
          <Text style={styles.label}>
            Fats
          </Text>

          <Text style={styles.value}>
            {item.fats}
          </Text>
        </View>

      </View>

      {/* CONDITIONS */}
      {conditions?.length > 0 && (

        <View style={styles.conditionBox}>
          <Ionicons
            name="medkit-outline"
            size={16}
            color="#16b39a"
          />

          <Text style={styles.conditionText}>
            Suitable for:
            {' '}
            {conditions.join(', ')}
          </Text>
        </View>

      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate(
            'CompanySelection',
            {
              food: item,
            }
          )
        }
      >

        <Ionicons
          name="cart-outline"
          size={18}
          color="#fff"
        />

        <Text style={styles.btnText}>
          Add to Cart
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

        <Text style={styles.headerTitle}>
          Recommended Meals
        </Text>

        <View style={{ width: 42 }} />

      </View>

      <FlatList
        data={filteredFoods}
        keyExtractor={(item) => item.id}
        renderItem={renderFood}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 30,
        }}
        ListEmptyComponent={

          <View style={styles.emptyBox}>

            <Ionicons
              name="nutrition-outline"
              size={80}
              color="#bbb"
            />

            <Text style={styles.emptyText}>
              No meals available
            </Text>

            <Text style={styles.emptySub}>
              Try selecting another meal
              time or food preference
            </Text>

          </View>
        }
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    paddingHorizontal: 14,
    paddingTop: 12,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  backBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#222',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 22,
    padding: 14,
    marginBottom: 18,
    elevation: 4,
  },

  image: {
    width: '100%',
    height: 190,
    borderRadius: 18,
  },

  badge: {
    position: 'absolute',
    top: 25,
    right: 25,
    backgroundColor: '#16b39a',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  badgeText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
  },

  foodName: {
    fontSize: 18,
    fontWeight: '800',
    color: '#222',
    marginTop: 14,
  },

  serving: {
    color: '#666',
    marginTop: 6,
    fontSize: 13,
  },

  nutritionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
  },

  nutritionBox: {
    backgroundColor: '#F4F8F7',
    width: '48%',
    borderRadius: 14,
    padding: 12,
  },

  label: {
    color: '#777',
    fontSize: 12,
  },

  value: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
  },

  conditionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EAF8F5',
    borderRadius: 12,
    padding: 12,
    marginTop: 14,
  },

  conditionText: {
    marginLeft: 8,
    color: '#16b39a',
    fontWeight: '600',
    flex: 1,
  },

  button: {
    marginTop: 18,
    backgroundColor: '#16b39a',
    paddingVertical: 15,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
    marginLeft: 8,
  },

  emptyBox: {
    marginTop: 100,
    alignItems: 'center',
  },

  emptyText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#333',
    marginTop: 20,
  },

  emptySub: {
    textAlign: 'center',
    color: '#777',
    marginTop: 8,
    lineHeight: 22,
  },

});