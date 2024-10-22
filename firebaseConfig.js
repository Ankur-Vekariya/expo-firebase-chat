// Import the functions you need from the SDKs you need
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPorrYX0fXW6-jXWgDJt-0cL8p0VgsQVs",
  authDomain: "expo-firebase-chat-d107e.firebaseapp.com",
  projectId: "expo-firebase-chat-d107e",
  storageBucket: "expo-firebase-chat-d107e.appspot.com",
  messagingSenderId: "762653058314",
  appId: "1:762653058314:web:16fac3209b846457d6c6f3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);

export const usersRef = collection(db, "users");
export const roomRef = collection(db, "room");
