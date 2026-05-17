import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  View,
  Text,
} from "react-native";

/* SCREENS */
import LandingScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SocialLoginScreen from "../screens/SocialLoginScreen";

/* SIGNUP SCREENS */
import SignupRoleScreen from "../screens/SignupRoleScreen";
import UserSignupScreen from "../screens/UserSignupScreen";
import CookSignupScreen from "../screens/CookSignupScreen";
import DriverSignupScreen from "../screens/DriverSignupScreen";

/* USER SCREENS */
import UserHomeScreen from "../screens/user/UserHomeScreen";

import HealthDetailsScreen from "../user/HealthDetailsScreen";

import CasualCravingsScreen from "../screens/user/CasualCravingsScreen";

import CartScreen from "../screens/user/CartScreen";

import NutritionalMealFormScreen from "../screens/user/NutritionalMealFormScreen";

import NutritionalSuggestionScreen from "../screens/user/NutritionalSuggestionScreen";

import CompanySelectionScreen from "../screens/user/CompanySelectionScreen";

import HealthCentricMealFormScreen from "../screens/user/HealthCentricMealFormScreen";

import HealthCentricSuggestionsScreen from "../screens/user/HealthCentricSuggestionsScreen";

import HealthCompanySelectionScreen from "../screens/user/HealthCompanySelectionScreen";

import CheckoutScreen from "../screens/user/CheckoutScreen";

import PaymentScreen from "../screens/user/PaymentScreen";

import OrderConfirmationScreen from "../screens/user/OrderConfirmationScreen";

import ProfileScreen from "../screens/user/ProfileScreen";

import SavedAddressScreen from "../screens/user/SavedAddressScreen";

import SettingsScreen from "../screens/user/SettingsScreen";

import NotificationScreen from "../screens/user/NotificationScreen";

import DailyHealthProgress from "../screens/user/DailyHealthProgress";

/* COOK MODULE */
import CookHomeScreen from "../screens/cook/CookHomeScreen";

import CookMenuScreen from "../cook/CookMenuScreen";

import CookOrdersScreen from "../cook/CookOrdersScreen";

import CookProfileScreen from "../cook/CookProfileScreen";

import CookEarningsScreen from "../cook/CookEarningsScreen";

/* CONTEXT */
import {
  CartProvider,
} from "../context/CartContext";

const Stack =
  createNativeStackNavigator();

/* TEMP DELIVERY HOME */
function DeliveryHome() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>
        Delivery Home Page
      </Text>
    </View>
  );
}

export default function AppNavigator() {
  return (
    <CartProvider>
      <NavigationContainer>

        <Stack.Navigator
          initialRouteName="Landing"
          screenOptions={{
            headerShown: false,
          }}
        >

          {/* ========================= */}
          {/* COMMON AUTH SCREENS */}
          {/* ========================= */}

          <Stack.Screen
            name="Landing"
            component={LandingScreen}
          />

          <Stack.Screen
            name="Login"
            component={LoginScreen}
          />

          <Stack.Screen
            name="SocialLogin"
            component={SocialLoginScreen}
          />

          <Stack.Screen
            name="SignupRole"
            component={SignupRoleScreen}
          />

          <Stack.Screen
            name="UserSignup"
            component={UserSignupScreen}
          />

          <Stack.Screen
            name="CookSignup"
            component={CookSignupScreen}
          />

          <Stack.Screen
            name="DriverSignup"
            component={DriverSignupScreen}
          />

          {/* ========================= */}
          {/* USER MODULE */}
          {/* ========================= */}

          <Stack.Screen
            name="UserHome"
            component={UserHomeScreen}
          />

          <Stack.Screen
            name="HealthDetails"
            component={HealthDetailsScreen}
          />

          <Stack.Screen
            name="DailyHealthProgress"
            component={DailyHealthProgress}
          />

          {/* CASUAL CRAVINGS */}
          <Stack.Screen
            name="CasualCravings"
            component={CasualCravingsScreen}
          />

          {/* CART */}
          <Stack.Screen
            name="Cart"
            component={CartScreen}
          />

          {/* CHECKOUT FLOW */}
          <Stack.Screen
            name="Checkout"
            component={CheckoutScreen}
          />

          <Stack.Screen
            name="Payment"
            component={PaymentScreen}
          />

          <Stack.Screen
            name="OrderConfirmation"
            component={OrderConfirmationScreen}
          />

          {/* NUTRITIONAL MEALS */}
          <Stack.Screen
            name="NutritionalMealForm"
            component={
              NutritionalMealFormScreen
            }
          />

          <Stack.Screen
            name="NutritionalSuggestions"
            component={
              NutritionalSuggestionScreen
            }
          />

          <Stack.Screen
            name="CompanySelection"
            component={
              CompanySelectionScreen
            }
          />

          {/* HEALTH CENTRIC */}
          <Stack.Screen
            name="HealthCentricMealForm"
            component={
              HealthCentricMealFormScreen
            }
          />

          <Stack.Screen
            name="HealthCentricSuggestions"
            component={
              HealthCentricSuggestionsScreen
            }
          />

          <Stack.Screen
            name="HealthCompanySelection"
            component={
              HealthCompanySelectionScreen
            }
          />

          {/* PROFILE */}
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
          />

          <Stack.Screen
            name="Notifications"
            component={NotificationScreen}
          />

          <Stack.Screen
            name="SavedAddress"
            component={SavedAddressScreen}
          />

          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
          />

          {/* ========================= */}
          {/* COOK MODULE */}
          {/* ========================= */}

          <Stack.Screen
            name="CookHome"
            component={CookHomeScreen}
          />

          <Stack.Screen
            name="CookMenu"
            component={CookMenuScreen}
          />

          <Stack.Screen
            name="CookOrders"
            component={CookOrdersScreen}
          />

          <Stack.Screen
            name="CookProfile"
            component={CookProfileScreen}
          />

          <Stack.Screen
            name="CookEarnings"
            component={CookEarningsScreen}
          />

          {/* ========================= */}
          {/* DELIVERY */}
          {/* ========================= */}

          <Stack.Screen
            name="DeliveryHome"
            component={DeliveryHome}
          />

        </Stack.Navigator>

      </NavigationContainer>
    </CartProvider>
  );
}