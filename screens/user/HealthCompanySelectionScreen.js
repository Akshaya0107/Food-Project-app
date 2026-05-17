// FILE: screens/user/HealthCompanySelectionScreen.js

import React, { useContext } from 'react';

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { CartContext } from '../../context/CartContext';

const companies = [

  {
    id: '1',
    name: 'Gastro Pulse Kitchen',
    rating: '4.9',
    amount: 240,
    delivery: '20 mins',
  },

  {
    id: '2',
    name: 'Healthy Life Meals',
    rating: '4.8',
    amount: 260,
    delivery: '25 mins',
  },

  {
    id: '3',
    name: 'Protein Fuel Hub',
    rating: '4.7',
    amount: 290,
    delivery: '18 mins',
  },

  {
    id: '4',
    name: 'Nutri Care Foods',
    rating: '4.9',
    amount: 310,
    delivery: '22 mins',
  },

  {
    id: '5',
    name: 'Fresh Fit Kitchen',
    rating: '4.6',
    amount: 230,
    delivery: '30 mins',
  },

];

export default function HealthCompanySelectionScreen({
  route,
  navigation,
}) {

  const { addToCart } =
    useContext(CartContext);

  const food =
    route?.params?.food;

  /* ADD TO CART */
  const handleAddToCart = (
    restaurant
  ) => {

    const cartItem = {

      id: Date.now().toString(),

      foodName:
        food?.name ||
        'Healthy Meal',

      image:
        food?.image ||
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200',

      hotel: restaurant.name,

      rating:
        restaurant.rating,

      delivery:
        restaurant.delivery,

      price:
        restaurant.amount,

      quantity: 1,

      status: 'Preparing',

    };

    addToCart(cartItem);

    navigation.navigate(
      'Cart'
    );
  };

  /* CARD */
  const renderCompany = ({
    item,
  }) => (

    <View style={styles.card}>

      <View style={styles.leftSection}>

        <Image
          source={{
            uri:
              food?.image ||
              'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200',
          }}
          style={styles.foodImage}
        />

        <View style={styles.details}>

          <Text style={styles.companyName}>
            {item.name}
          </Text>

          <Text style={styles.foodName}>
            {food?.name ||
              'Healthy Meal'}
          </Text>

          <Text style={styles.info}>
            ⭐ {item.rating} •{' '}
            {item.delivery}
          </Text>

          <Text style={styles.price}>
            ₹{item.amount}
          </Text>

        </View>

      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          handleAddToCart(item)
        }
      >

        <Ionicons
          name="cart-outline"
          size={16}
          color="#fff"
        />

        <Text style={styles.buttonText}>
          Add
        </Text>

      </TouchableOpacity>

    </View>
  );

  return (

    <SafeAreaView style={styles.safe}>

      <View style={styles.container}>

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
            Select Healthy Kitchen
          </Text>

        </View>

        {/* LIST */}
        <FlatList
          data={companies}
          keyExtractor={(item) =>
            item.id
          }
          renderItem={renderCompany}
          showsVerticalScrollIndicator={
            false
          }
          contentContainerStyle={{
            paddingBottom: 30,
          }}
        />

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  safe: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },

  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 15,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
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
    fontSize: 21,
    fontWeight: '800',
    color: '#222',
    marginLeft: 15,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 22,
    padding: 14,
    marginBottom: 18,
    elevation: 4,

    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
  },

  leftSection: {
    flexDirection: 'row',
    flex: 1,
  },

  foodImage: {
    width: 88,
    height: 88,
    borderRadius: 18,
    backgroundColor: '#eee',
  },

  details: {
    marginLeft: 14,
    justifyContent: 'center',
    flex: 1,
  },

  companyName: {
    fontSize: 16,
    fontWeight: '800',
    color: '#222',
  },

  foodName: {
    fontSize: 13,
    color: '#666',
    marginTop: 4,
  },

  info: {
    fontSize: 12,
    color: '#888',
    marginTop: 6,
  },

  price: {
    fontSize: 18,
    fontWeight: '800',
    color: '#16b39a',
    marginTop: 7,
  },

  button: {
    backgroundColor: '#16b39a',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 14,
    marginLeft: 10,

    flexDirection: 'row',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
    marginLeft: 6,
  },

});