import { View, Text, Button, Pressable, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import { StatusBar } from "expo-status-bar";
import ChatList from "../../components/ChatList";

export default function Home() {
  const { logout, user } = useAuth();
  const [users, setUsers] = useState([1, 2, 3]);

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
    if (user.uid) {
      getUsers();
    }
  }, []);

  const getUsers = async () => {};
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="light" />
      {users.length > 0 ? (
        <ChatList users={users} />
      ) : (
        // <View className="flex items-center">
        //   <Text>Chats</Text>
        // </View>
        <View className="flex items-center">
          <Text>Home</Text>
        </View>
      )}
      {/* <Text>Home</Text>
      <Pressable onPress={handleLogout}>
        <Text>Logout</Text>
      </Pressable> */}
    </View>
  );
}
