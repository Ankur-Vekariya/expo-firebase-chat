import { View, Text, Button, Pressable, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import { StatusBar } from "expo-status-bar";
import ChatList from "../../components/ChatList";
import { getDoc, getDocs, query, where } from "firebase/firestore";
import { usersRef } from "../../firebaseConfig";

export default function Home() {
  const { logout, user } = useAuth();
  const [users, setUsers] = useState([]);

  const handleLogout = async () => {
    console.log("logout called");
    let response = await logout();
    if (response.success) {
      Alert.alert("Sign out", "success");
    } else {
      Alert.alert("Sign out", response?.msg);
    }
  };
  console.log("user", user);

  useEffect(() => {
    if (user?.uid) {
      getUsers();
    }
  }, []);

  const getUsers = async () => {
    const q = query(usersRef, where("userId", "!=", user?.uid));
    const querySnapShot = await getDocs(q);
    let data = [];
    querySnapShot.forEach((doc) => {
      console.log("doc------------------------------", doc?.data);
      data.push({ ...doc.data() });
    });
    setUsers(data);
    console.log("data------------------------------", data);
  };
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="light" />
      {users?.length > 0 ? (
        <ChatList users={users} />
      ) : (
        <View className=" items-center">
          <Text>Home</Text>
          <Pressable onPress={handleLogout}>
            <Text>Logout</Text>
          </Pressable>
        </View>
      )}
      {/* <Text>Home</Text> */}
    </View>
  );
}
