import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Entypo } from "@expo/vector-icons";

export default function ChatRoomHeader() {
  return (
    <Stack.Screen
      options={{
        title: "",
        headerShadowVisible: false,
        headerLeft: () => {
          <View className="flex-row items-center gap-4">
            <TouchableOpacity>
              <Entypo name="chevron-left" size={25} />
            </TouchableOpacity>
          </View>;
        },
      }}
    />
  );
}
