import { View, Text, Platform, Pressable, Alert } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { useAuth } from "../context/authContext";

const ios = Platform.OS == "ios";

export default function HomeHeader() {
  const { top } = useSafeAreaInsets();
  const { logout, user } = useAuth();
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  const handleLogout = async () => {
    console.log("logout called");
    let response = await logout();
    if (response.success) {
      Alert.alert("Sign out", "success");
    } else {
      Alert.alert("Sign out", response?.msg);
    }
  };
  return (
    <View
      style={{ paddingTop: ios ? top : top + 10 }}
      className="flex-row justify-between px-5 bg-orange-400 pb-6 rounded-b-3xl shadow"
    >
      <View>
        <Text style={{ fontSize: hp(3) }} className="font-medium text-white">
          Chats
        </Text>
      </View>
      <View>
        <Pressable onPress={handleLogout}>
          <Text>Logout</Text>
        </Pressable>
        {/* <Image
          style={{ height: hp(4.3), aspectRatio: 1, borderRadius: 100 }}
          source={user.profileUrl}
          placeholder={blurhash}
          transition={500}
        /> */}
      </View>
    </View>
  );
}
