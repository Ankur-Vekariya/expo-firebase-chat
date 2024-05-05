import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import React, { useRef } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import CustomKeyboardView from "../components/CustomKeyboardView";
import { useAuth } from "../context/authContext";

export default function SignUn() {
  const router = useRouter();
  const { register } = useAuth();

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const userRef = useRef("");
  const profileRef = useRef("");

  const handleRegister = async () => {
    if (
      !emailRef.current ||
      !passwordRef.current ||
      !userRef.current ||
      !profileRef.current
    ) {
      Alert.alert("Sign Up", "Please add all details");
      return;
    }
    const response = await register(
      emailRef.current,
      passwordRef.current,
      userRef.current,
      profileRef.current
    );

    console.log("response======", response);
    if (!response.success) {
      Alert.alert("Sign Up", response.msg);
    }
  };

  return (
    <CustomKeyboardView>
      <StatusBar style="dark" />
      <Text>SignIn</Text>
      <View
        style={{ paddingTop: hp(8), paddingHorizontal: wp(5) }}
        className="flex-1 gap-12"
      >
        <View className="item-center">
          <Image
            style={{ height: hp(25), width: "100%" }}
            resizeMode="contain"
            source={require("../assets/images/login.jpg")}
          />
        </View>
        <View className="gap-10">
          <Text
            style={{ fontSize: hp(4) }}
            className="font-bold tracking-wider text-center text-neutral-800"
          >
            Sign Up
          </Text>
          <View className="gap-4">
            <View
              style={{ height: hp(7) }}
              className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl"
            >
              <AntDesign name="mail" size={hp(2.7)} color="gray" />
              <TextInput
                onChangeText={(value) => (userRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="User Name"
              />
            </View>
            <View
              style={{ height: hp(7) }}
              className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl"
            >
              <AntDesign name="lock" size={24} color="gray" />
              <TextInput
                onChangeText={(value) => (emailRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Email"
              />
            </View>

            <View
              style={{ height: hp(7) }}
              className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl"
            >
              <AntDesign name="lock" size={24} color="gray" />
              <TextInput
                onChangeText={(value) => (passwordRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Password"
                secureTextEntry
              />
            </View>
            <View
              style={{ height: hp(7) }}
              className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl"
            >
              <AntDesign name="lock" size={24} color="gray" />
              <TextInput
                onChangeText={(value) => (profileRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Profile"
              />
            </View>
            <TouchableOpacity
              onPress={handleRegister}
              className="bg-orange-300 rounded-xl justify-center items-center"
              style={{
                height: hp(6.5),
                backgroundColor: "#fdba74",
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ fontSize: hp(2.7) }}
                className="text-black font-bold tracking-wider"
              >
                Sign Up
              </Text>
            </TouchableOpacity>
            <View className="flex-row justify-center">
              <Text
                style={{ fontSize: hp(2) }}
                className="font-semibold text-neutral-500"
              >
                Alredy have an account?{" "}
              </Text>
              <Pressable
                onPress={() => {
                  router.push("signIn");
                }}
              >
                <Text
                  style={{ fontSize: hp(2) }}
                  className="font-bold text-orange-300"
                >
                  Sign in
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </CustomKeyboardView>
  );
}
