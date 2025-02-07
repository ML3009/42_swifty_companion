import React from "react";
import { View, Text } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { UserType } from "./types/users"
import UserInfos from "./components/userInfos"

export default function Details() {
  const router = useRouter();
  const params  = useLocalSearchParams();
  const paramsCheckArray = Array.isArray(params.userInfo) ? params.userInfo[0] : params.userInfo;
  const userData: UserType = JSON.parse(paramsCheckArray)

  return (
    <>
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <UserInfos userData={userData} />
    </View>
    </>
  );
}