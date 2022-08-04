import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import PhotoList from "./components/PhotoList";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <PhotoList></PhotoList>
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
