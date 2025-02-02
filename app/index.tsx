import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Login from "./components/login"

export default function Index() {
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to swifty-companion</Text>
      <Login />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'bisque',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 20,
    color: 'dimgrey',
  },
});
