import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';

import * as DocumentPicker from 'expo-document-picker';

import { Ionicons } from '@expo/vector-icons';

import {
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import {
  doc,
  setDoc,
} from 'firebase/firestore';

import {
  auth,
  db,
} from '../services/firebaseConfig';

export default function CookSignupScreen({
  navigation,
}) {

  const [fullName, setFullName] =
    useState('');

  const [email, setEmail] =
    useState('');

  const [password, setPassword] =
    useState('');

  const [phone, setPhone] =
    useState('');

  const [address, setAddress] =
    useState('');

  const [foodType, setFoodType] =
    useState('South Indian');

  const [documentName,
    setDocumentName] =
    useState('');

  const [startupProof,
    setStartupProof] =
    useState('');

  const [kitchenPhoto,
    setKitchenPhoto] =
    useState('');

  const [availableTime,
    setAvailableTime] =
    useState('');

  const [mealCapacity,
    setMealCapacity] =
    useState('');

  const [experience,
    setExperience] =
    useState('');

  const [foodDescription,
    setFoodDescription] =
    useState('');

  const [deliveryAvailable,
    setDeliveryAvailable] =
    useState('Yes');

  const [bankAccountName,
    setBankAccountName] =
    useState('');

  const [bankAccountNumber,
    setBankAccountNumber] =
    useState('');

  const [bankName,
    setBankName] =
    useState('');

  const [ifscCode,
    setIfscCode] =
    useState('');

  const [hygieneChecked,
    setHygieneChecked] =
    useState(false);

  // ID Upload
  const pickDocument = async () => {

    const result =
      await DocumentPicker.getDocumentAsync({
        type: '*/*',
      });

    if (!result.canceled) {

      setDocumentName(
        result.assets[0].name
      );

    }
  };

  // Startup Upload
  const pickStartupProof = async () => {

    const result =
      await DocumentPicker.getDocumentAsync({
        type: '*/*',
      });

    if (!result.canceled) {

      setStartupProof(
        result.assets[0].name
      );

    }
  };

  // Kitchen Upload
  const pickKitchenPhoto = async () => {

    const result =
      await DocumentPicker.getDocumentAsync({
        type: 'image/*',
      });

    if (!result.canceled) {

      setKitchenPhoto(
        result.assets[0].name
      );

    }
  };

  // SUBMIT
  const handleSubmit = async () => {

    if (
      !fullName ||
      !email ||
      !password ||
      !phone
    ) {

      Alert.alert(
        'Error',
        'Please fill required fields'
      );

      return;
    }

    if (!hygieneChecked) {

      Alert.alert(
        'Error',
        'Please confirm hygiene declaration'
      );

      return;
    }

    try {

      // CREATE AUTH ACCOUNT
      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      const user =
        userCredential.user;

      // SAVE TO FIRESTORE
      await setDoc(
        doc(db, 'users', user.uid),
        {

          fullName,
          email,
          phone,
          address,
          foodType,

          availableTime,
          mealCapacity,
          experience,
          foodDescription,

          deliveryAvailable,

          documentName,
          startupProof,
          kitchenPhoto,

          bankAccountName,
          bankAccountNumber,
          bankName,
          ifscCode,

          role: 'cook',

          createdAt:
            new Date(),

        }
      );

      Alert.alert(
        'Success',
        'Cook account created successfully 🎉'
      );

      navigation.navigate('Login');

    } catch (error) {

      Alert.alert(
        'Signup Error',
        error.message
      );

    }
  };

  return (

    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      {/* Header */}
      <View style={styles.headerContainer}>

        <Text style={styles.headerTitle}>
          Home Cook Registration
        </Text>

      </View>

      {/* Form */}
      <View style={styles.formContainer}>

        {/* Full Name */}
        <Text style={styles.label}>
          Full Name
        </Text>

        <TextInput
          placeholder="Enter your full name"
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
        />

        {/* Email */}
        <Text style={styles.label}>
          Email
        </Text>

        <TextInput
          placeholder="your@example.com"
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        {/* Password */}
        <Text style={styles.label}>
          Password
        </Text>

        <TextInput
          placeholder="Enter password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        {/* Phone */}
        <Text style={styles.label}>
          Phone Number
        </Text>

        <TextInput
          placeholder="+91 9876543210"
          style={styles.input}
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />

        {/* Address */}
        <Text style={styles.label}>
          Kitchen Address
        </Text>

        <TextInput
          placeholder="Street, City"
          style={styles.input}
          value={address}
          onChangeText={setAddress}
        />

        {/* Food Type */}
        <Text style={styles.label}>
          Food Type
        </Text>

        <View style={styles.pickerContainer}>

          <Picker
            selectedValue={foodType}
            onValueChange={(itemValue) =>
              setFoodType(itemValue)
            }
          >

            <Picker.Item
              label="South Indian"
              value="South Indian"
            />

            <Picker.Item
              label="North Indian"
              value="North Indian"
            />

            <Picker.Item
              label="Chinese"
              value="Chinese"
            />

            <Picker.Item
              label="Healthy Diet Food"
              value="Healthy Diet Food"
            />

          </Picker>

        </View>

        {/* Available Time */}
        <Text style={styles.label}>
          Cooking Available Time
        </Text>

        <TextInput
          placeholder="6 AM - 2 PM"
          style={styles.input}
          value={availableTime}
          onChangeText={setAvailableTime}
        />

        {/* Meal Capacity */}
        <Text style={styles.label}>
          Daily Meal Capacity
        </Text>

        <TextInput
          placeholder="50 meals/day"
          style={styles.input}
          value={mealCapacity}
          onChangeText={setMealCapacity}
        />

        {/* Experience */}
        <Text style={styles.label}>
          Cooking Experience
        </Text>

        <TextInput
          placeholder="5 years"
          style={styles.input}
          value={experience}
          onChangeText={setExperience}
        />

        {/* Description */}
        <Text style={styles.label}>
          Special Food Description
        </Text>

        <TextInput
          placeholder="Describe dishes"
          multiline
          style={[
            styles.input,
            {
              height: 100,
              textAlignVertical: 'top',
            },
          ]}
          value={foodDescription}
          onChangeText={setFoodDescription}
        />

        {/* Delivery */}
        <Text style={styles.label}>
          Delivery Available
        </Text>

        <View style={styles.pickerContainer}>

          <Picker
            selectedValue={deliveryAvailable}
            onValueChange={(itemValue) =>
              setDeliveryAvailable(itemValue)
            }
          >

            <Picker.Item
              label="Yes"
              value="Yes"
            />

            <Picker.Item
              label="No"
              value="No"
            />

          </Picker>

        </View>

        {/* Upload Cards */}

        <TouchableOpacity
          style={styles.uploadButton}
          onPress={pickDocument}
        >

          <Text style={styles.uploadButtonText}>
            {documentName
              ? documentName
              : 'Upload ID Proof'}
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.uploadButton}
          onPress={pickStartupProof}
        >

          <Text style={styles.uploadButtonText}>
            {startupProof
              ? startupProof
              : 'Upload StartupTN Proof'}
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.uploadButton}
          onPress={pickKitchenPhoto}
        >

          <Text style={styles.uploadButtonText}>
            {kitchenPhoto
              ? kitchenPhoto
              : 'Upload Kitchen Photo'}
          </Text>

        </TouchableOpacity>

        {/* BANK DETAILS */}
        <Text style={styles.sectionTitle}>
          Bank Details
        </Text>

        <TextInput
          placeholder="Account Name"
          style={styles.input}
          value={bankAccountName}
          onChangeText={setBankAccountName}
        />

        <TextInput
          placeholder="Account Number"
          style={styles.input}
          keyboardType="numeric"
          value={bankAccountNumber}
          onChangeText={setBankAccountNumber}
        />

        <TextInput
          placeholder="Bank Name"
          style={styles.input}
          value={bankName}
          onChangeText={setBankName}
        />

        <TextInput
          placeholder="IFSC Code"
          style={styles.input}
          value={ifscCode}
          onChangeText={setIfscCode}
        />

        {/* CHECKBOX */}
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() =>
            setHygieneChecked(
              !hygieneChecked
            )
          }
        >

          <Ionicons
            name={
              hygieneChecked
                ? 'checkbox'
                : 'square-outline'
            }
            size={22}
            color="#16b39a"
          />

          <Text style={styles.checkboxText}>
            I confirm hygienic cooking
          </Text>

        </TouchableOpacity>

        {/* BUTTON */}
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
        >

          <Text style={styles.submitButtonText}>
            Submit & Login
          </Text>

        </TouchableOpacity>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },

  headerContainer: {
    paddingHorizontal: 20,
    paddingTop: 55,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#222',
  },

  formContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 25,
    marginBottom: 10,
    color: '#222',
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 16,
    color: '#333',
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 14,
    paddingHorizontal: 15,
    height: 55,
    fontSize: 14,
    color: '#000',
  },

  pickerContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 14,
    overflow: 'hidden',
  },

  uploadButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#D8D8D8',
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 15,
  },

  uploadButtonText: {
    color: '#16b39a',
    fontWeight: '700',
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    gap: 10,
  },

  checkboxText: {
    fontSize: 14,
    color: '#555',
  },

  submitButton: {
    backgroundColor: '#16b39a',
    height: 58,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

});