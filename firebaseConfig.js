// Import the functions you need from the SDKs you need
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp-OVfUrTJpX-rTPvNxEhRDRoLr_UkQXo",
  authDomain: "expo-firebase-chat-5e638.firebaseapp.com",
  projectId: "expo-firebase-chat-5e638",
  storageBucket: "expo-firebase-chat-5e638.appspot.com",
  messagingSenderId: "934753876289",
  appId: "1:934753876289:web:49e0b0a42bd954ad02c9c0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);

export const usersRef = collection(db, "users");
export const roomRef = collection(db, "room");

