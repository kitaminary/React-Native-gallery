import { NavigationContext } from "@react-navigation/native";
import React from "react";
import {
  Animated,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setFullPhoto } from "../store/actions";
import { GetFullPhoto } from "../store/selectors";

export default function Photo() {
  const bigPhoto = useSelector(GetFullPhoto);
  const dispatch = useDispatch();
  const navigation = React.useContext(NavigationContext);

  return (
    <View
    >
      <TouchableHighlight
        activeOpacity={0.1}
        transparent={false}
        onPress={() => {
          dispatch(setFullPhoto(null));
          navigation.navigate("Home");
        }}
      >
        <View style={styles.Box}>
          <Image
            resizeMode={"contain"}
            style={[
              styles.PhotoBox,
              {
                transform: [{ translateX: "0" }],
              },
            ]}
            defaultSource={bigPhoto}
          ></Image>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  Box: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  PhotoBox: {
    display: "block",
    position: "fixed",
    width: "90vw",
    height: "90%",
    borderRadius: 20,
  },
});
