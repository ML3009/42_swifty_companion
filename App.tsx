// import { Stack } from "expo-router";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./view/home"
import Details from "./view/details"
import type { RootStackParamList } from "./types/route"



const Stack = createStackNavigator<RootStackParamList>();

{console.log('Navigators:', 'Index', 'Details')}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}