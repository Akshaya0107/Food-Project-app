import { initializeApp } from "firebase/app";

import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";

import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  getFirestore,
} from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyB6EhYVnTMAI68poc85Wlizavzu4feBUGk",

  authDomain: "foodapp-fd512.firebaseapp.com",

  projectId: "foodapp-fd512",

  storageBucket: "foodapp-fd512.firebasestorage.app",

  messagingSenderId: "730641689330",

  appId: "1:730641689330:web:7720f1f8de13b2581b7e6b",

};

const app = initializeApp(firebaseConfig);


// ✅ AUTH WITH PERSISTENCE
export const auth = initializeAuth(app, {

  persistence:
    getReactNativePersistence(
      AsyncStorage
    ),

});


// ✅ FIRESTORE DATABASE
export const db = getFirestore(app);

export default app;