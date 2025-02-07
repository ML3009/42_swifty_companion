import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import React from 'react';

export default function NotFoundScreen() {
  const router = useRouter();

  const handlePress = () => {
    router.push('/');
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Oops! Not Found' }} />
      <View style={styles.container}>
        <TouchableOpacity onPress={handlePress} style={styles.button}>
          <Text style={styles.buttonText}>Go back to Home screen!</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderWidth: 2,
    borderColor: 'black', 
    padding: 10, 
    borderRadius: 10, 
    backgroundColor: 'darkkhaki',
    textAlign: 'center',
},
buttonText: {
    color:'#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
},
});