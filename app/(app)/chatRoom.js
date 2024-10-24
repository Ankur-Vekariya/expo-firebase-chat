import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import ChatRoomHeader from "../../components/ChatRoomHeader";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function ChatRoom() {
  const item = useLocalSearchParams();
  const router = useRouter();
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ChatRoomHeader user={item} router={router} />
    </View>
  );
}
