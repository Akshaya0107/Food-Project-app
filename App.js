import "react-native-gesture-handler";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import HomeScreen from "./screens/HomeScreen";

import OrderHistoryScreen from "./screens/OrderHistoryScreen";

import SignupRoleScreen from "./screens/SignupRoleScreen";

import UserSignupScreen from "./screens/UserSignupScreen";

import CookSignupScreen from "./screens/CookSignupScreen";

import DriverSignupScreen from "./screens/DriverSignupScreen";

// USER MODULE
import UserHomeScreen from "./screens/user/UserHomeScreen";
import SettingsScreen from "./screens/user/SettingsScreen";
import CartScreen from "./screens/user/CartScreen";
import CasualCravingsScreen from "./screens/user/CasualCravingsScreen";
import CheckoutScreen from "./screens/user/CheckoutScreen";
import CompanySelectionScreen from "./screens/user/CompanySelectionScreen";
import HealthCentricMealFormScreen from "./screens/user/HealthCentricMealFormScreen";
import HealthCentricSuggestionsScreen from "./screens/user/HealthCentricSuggestionsScreen";
import HealthCompanySelectionScreen from "./screens/user/HealthCompanySelectionScreen";
import DailyHealthProgress from "./screens/user/DailyHealthProgress";
import NotificationScreen from "./screens/user/NotificationScreen";
import NutritionalMealFormScreen from "./screens/user/NutritionalMealFormScreen";
import NutritionalSuggestionScreen from "./screens/user/NutritionalSuggestionScreen";
import OrderConfirmationScreen from "./screens/user/OrderConfirmationScreen";
import PaymentScreen from "./screens/user/PaymentScreen";
import ProfileScreen from "./screens/user/ProfileScreen";
import SavedAddressScreen from "./screens/user/SavedAddressScreen";

// COOK MODULE
import CookHomeScreen from './screens/cook/CookHomeScreen';
import CookMenuScreen from './screens/cook/CookMenuScreen';
import CookOrdersScreen from './screens/cook/CookOrdersScreen';
import CookProfileScreen from './screens/cook/CookProfileScreen';
import CookEarningsScreen from './screens/cook/CookEarningsScreen';

// DELIVERY MODULE
import DeliveryHomeScreen from "./screens/delivery/DeliveryHomeScreen";
import DeliveryEarningsScreen from "./screens/delivery/DeliveryEarningsScreen.js";
import DeliveryOrderStatusScreen from "./screens/delivery/DeliveryOrderStatusScreen";
import DeliveryProfileScreen from "./screens/delivery/DeliveryProfileScreen";
import DeliveryOrdersScreen from './screens/delivery/DeliveryOrdersScreen';
import DeliveryTrackingScreen from './screens/delivery/DeliveryTrackingScreen';

// CONTEXT
import { CartProvider } from "./context/CartContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
        >
          
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Orders"
            component={
              OrderHistoryScreen
            }
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="SignupRole"
            component={
              SignupRoleScreen
            }
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="UserSignup"
            component={
              UserSignupScreen
            }
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="CookSignup"
            component={
              CookSignupScreen
            }
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="DriverSignup"
            component={
              DriverSignupScreen
            }
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="UserHome"
            component={UserHomeScreen}
            options={{ headerShown: false }}
          />

<Stack.Screen
  name="Settings"
  component={SettingsScreen}
  options={{ headerShown: false }}
/>
<Stack.Screen
  name="Cart"
  component={CartScreen}
  options={{ headerShown: false }}
/>
<Stack.Screen
  name="CasualCravings"
  component={CasualCravingsScreen}
  options={{ headerShown: false }}
/>
<Stack.Screen
  name="Checkout"
  component={CheckoutScreen}
  options={{ headerShown: false }}
/>
<Stack.Screen
  name="CompanySelection"
  component={CompanySelectionScreen}
  options={{ headerShown: false }}
/>
<Stack.Screen
  name="HealthCentricMealForm"
  component={HealthCentricMealFormScreen}
  options={{ headerShown: false }}
/>
<Stack.Screen
  name="HealthCentricSuggestions"
  component={HealthCentricSuggestionsScreen}
  options={{ headerShown: false }}
/>
<Stack.Screen
  name="HealthCompanySelection"
  component={
    HealthCompanySelectionScreen
  }
  options={{ headerShown: false }}
/>
<Stack.Screen
  name="DailyHealthProgress"
  component={DailyHealthProgress}
  options={{ headerShown: false }}
/>
<Stack.Screen
  name="Notifications"
  component={NotificationScreen}
  options={{ headerShown: false }}
/>
{/* NUTRITION MODULE */}
<Stack.Screen
  name="NutritionalMealForm"
  component={NutritionalMealFormScreen}
  options={{ headerShown: false }}
/>

<Stack.Screen
  name="NutritionalSuggestions"
  component={NutritionalSuggestionScreen}
  options={{ headerShown: false }}
/>
<Stack.Screen
  name="OrderConfirmation"
  component={OrderConfirmationScreen}
  options={{ headerShown: false }}
/>
<Stack.Screen
  name="Payment"
  component={PaymentScreen}
  options={{ headerShown: false }}
/>
<Stack.Screen
  name="Profile"
  component={ProfileScreen}
  options={{ headerShown: false }}
/>
<Stack.Screen
  name="SavedAddress"
  component={SavedAddressScreen}
  options={{ headerShown: false }}
/>

{/* COOK MODULE */}

<Stack.Screen
  name="CookHome"
  component={CookHomeScreen}
  options={{ headerShown: false }}
/>

<Stack.Screen
  name="CookMenu"
  component={CookMenuScreen}
  options={{ headerShown: false }}
/>

<Stack.Screen
  name="CookOrders"
  component={CookOrdersScreen}
  options={{ headerShown: false }}
/>

<Stack.Screen
  name="CookProfile"
  component={CookProfileScreen}
  options={{ headerShown: false }}
/>

<Stack.Screen
  name="CookEarnings"
  component={CookEarningsScreen}
  options={{ headerShown: false }}
/>

<Stack.Screen
  name="DeliveryHome"
  component={DeliveryHomeScreen}
  options={{ headerShown: false }}
/>

<Stack.Screen
  name="DeliveryEarnings"
  component={DeliveryEarningsScreen}
  options={{ headerShown: false }}
/>

<Stack.Screen
  name="DeliveryOrderStatus"
  component={DeliveryOrderStatusScreen}
  options={{ headerShown: false }}
/>

<Stack.Screen
  name="DeliveryProfile"
  component={DeliveryProfileScreen}
  options={{ headerShown: false }}
/>

<Stack.Screen
  name="DeliveryOrders"
  component={DeliveryOrdersScreen}
  options={{ headerShown: false }}
/>

<Stack.Screen
  name="DeliveryTracking"
  component={DeliveryTrackingScreen}
  options={{ headerShown: false }}
/>

        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}