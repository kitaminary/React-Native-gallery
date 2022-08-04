import React from "react";
import { Provider } from "react-redux";
import Navigate from "./navigation";
import { store } from "./store";

 export default function App() {
  return (
    <Provider store={store}>
      <Navigate></Navigate>
    </Provider>
  );
}
