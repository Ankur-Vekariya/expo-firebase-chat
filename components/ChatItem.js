import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  TouchableHighlight,
  Image,
} from "react-native";
import React from "react";
// import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ChatItem({ item, noBorder, router }) {
  console.log("item-------------------------------", item);
  return (
    // <Pressable
    //   onPress={() => {
    //     console.log("chat pressed");
    //   }}
    //   style={({ pressed }) => [
    //     {
    //       backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
    //     },
    //     styles.wrapperCustom,
    //   ]}
    // >
    //   <Image
    //     style={{ height: hp(6), width: hp(6) }}
    //     source={require("../assets/images/favicon.png")}
    //     transition={500}
    //     className="rounded-full"
    //   />
    //   <View className="flex-1 gap-1">
    //     <View className="flex-row justify-between">
    //       <Text
    //         style={{ fontSize: hp(2) }}
    //         className="font-semibold text-neutral-700"
    //       >
    //         Nomi
    //       </Text>
    //       <Text
    //         style={{ fontSize: hp(1.8) }}
    //         className="font-medium text-neutral-500"
    //       >
    //         05:20
    //       </Text>
    //     </View>
    //     <Text
    //       style={{ fontSize: hp(2) }}
    //       className="font-medium text-neutral-500"
    //     >
    //       Nomi
    //     </Text>
    //   </View>
    // </Pressable>
    <Pressable
      onPress={() => {
        router.push("/chatRoom");
      }}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "blue" : "white",
          borderRadius: 8,
          padding: 6,
        },
      ]}
      className={`flex-row justify-between mx-4 items-center gap-3 mb-4 pb-4 ${
        noBorder ? "" : `border-b border-b-neutral-300`
      }`}
    >
      <Image
        style={{ height: hp(6), width: hp(6) }}
        source={{ uri: item?.item?.profileUrl }}
        // placeholder={blurhash}
        transition={500}
        className="rounded-full"
      />
      <View className="flex-1 gap-1">
        <View className="flex-row justify-between">
          <Text
            style={{ fontSize: hp(2) }}
            className="font-semibold text-neutral-700"
          >
            {/* {"nomi"} */}
            {item?.item?.username}
          </Text>
          <Text
            style={{ fontSize: hp(1.8) }}
            className="font-medium text-neutral-500"
          >
            05:20
          </Text>
        </View>
        <Text
          style={{ fontSize: hp(2) }}
          className="font-medium text-neutral-500"
        >
          Nomi
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#f0f0f0",
    backgroundColor: "#f9f9f9",
  },
});
