import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import Login from "./components/login"

export default function Index() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.textContainer}>
      <Text style={styles.text}>
         Welcome to swifty-companion
        </Text>
      </View>
      <View style={styles.iconContainer}>
        <Ionicons name="bicycle" size={52} color="black" />
        <Ionicons name="bicycle" size={52} color="black" />
        <Ionicons name="bicycle" size={52} color="black" />
      </View>

      <Login />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 100,
  },
  textContainer: {
    borderWidth: 2, 
    borderColor: 'black', 
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: 'darkkhaki',
  },

  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',    
  },
  iconContainer: {
    paddingTop: 100,
    flexDirection: 'row', 
    justifyContent: 'space-between',
    width: '80%',
  },
});
