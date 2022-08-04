import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PhotoList from "./components/PhotoList";
import Photo from "./components/Photo";

const Stack = createNativeStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={PhotoList}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Photo"
          component={Photo}
          options={{ title: "Photo" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
