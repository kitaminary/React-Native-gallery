import React, { useEffect, useState } from "react";
import { ActivityIndicator, Button, FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getData } from "../api/api";
import { setPhotos } from "../store/actions";
import { getPhotos } from "../store/selectors";
import Photo from "./Photo";
import PhotoCard from "./PhotoCard";

export default function PhotoList() {
  const dispatch = useDispatch();
  const photos = useSelector(getPhotos);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const getDataFromServer = async () => {
      const dataFromServer = await getData();
      dispatch(setPhotos(dataFromServer));
      setLoader(true);
    };

    getDataFromServer();
  }, []);


  if (loader === true) {
    return (
      <View style={styles.PhotoList}>
        <Text style={styles.title}>Gallery</Text>
        <View style={styles.PhotoListBox}>
          <FlatList
            data={photos}
            contentContainerStyle={styles.container}
            renderItem={({ item }) => <PhotoCard item={item}></PhotoCard>}
          />
        </View>
      </View>
    );
  } else {
    return <ActivityIndicator style={styles.Loader} size="large" />;
  }
}

const styles = StyleSheet.create({
  PhotoList: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    overflow: "visible",
    alignItems: "center",
    overflow: "scroll",
    width: "100vw",
    backgroundColor: "#F5F5F6",
  },
  PhotoListBox: {
    flex: 1,
    padding: 10,
    overflow: "visible",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100vw",
  },

  title: {
    color: "#212324",
    fontSize: 20,
    fontFamily: "arial",
    fontWeight: 600,
  },
  container: {
    flexDirection: "row",
    position: "absolute",
    top: 0,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    overflow: "visible",
  },
  Loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  }
});
