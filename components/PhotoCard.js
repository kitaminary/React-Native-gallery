import { NavigationContext } from "@react-navigation/native";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setFullPhoto } from "../store/actions";
import { GetFullPhoto } from "../store/selectors";
import Photo from "./Photo";

export default function PhotoCard({ item }) {
  const dispatch = useDispatch();
  const photo = useSelector(GetFullPhoto);
  const navigation = React.useContext(NavigationContext);

  return (
    <>
      <View style={styles.PhotoBox} key={item.id}>
        <TouchableHighlight
          underlayColor={"#FFFFFF"}
          onPress={() => {
            dispatch(setFullPhoto(item.urls.regular));
            navigation.navigate('Photo')
          }}
        >
          <Image
            zIndex={1}
            style={styles.PhotoSmall}
            source={item.urls.small}
          ></Image>
        </TouchableHighlight>
        <Text style={{ fontSize: 9, fontWeight: 650 }}>Name:</Text>
        <Text numberOfLines={1} style={styles.PhotoName}>
          {item.description || "No Image name"}
        </Text>
        <Text style={{ fontSize: 9, fontWeight: 650 }}>Author:</Text>
        <Text style={styles.PhotoAuthor}>{item.user.name}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  PhotoSmall: {
    margin: 5,
    borderRadius: 5,
    width: 50,
    height: 50,
    zIndex: -2,
  },
  PhotoBox: {
    flex: 1,
    overflow: "visible",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    alignItems: "center",
    margin: 3,
    paddingBottom: 5,
    width: 110,
    minHeight: 130,
    maxHeight: 130,
    border: "2px double black",
    borderRadius: 10,
    zIndex: 0,
  },
  PhotoName: {
    textAlign: "center",
    display: "block",
    width: 80,
    fontSize: 10,
    fontWeight: 500,
    overflow: "hidden",
  },
  PhotoAuthor: {
    fontSize: 10,
    fontWeight: 600,
  },
});
