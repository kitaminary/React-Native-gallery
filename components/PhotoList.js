import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getData } from "../api/api";
import { setPhotos } from "../store/actions";
import { getPhotos } from "../store/selectors";

export default function PhotoList() {
  const [listOfPhoto, setListOfPhoto] = useState();
  const dispatch = useDispatch();
  const photos = useSelector(getPhotos);

  useEffect(() => {
    const getDataFromServer = async () => {
      const dataFromServer = await getData();

      dispatch(setPhotos(dataFromServer));
    };

    getDataFromServer();
    setListOfPhoto(photos);
  }, [dispatch, listOfPhoto]);

  console.log(photos);

  return (
    <View style={styles.PhotoList}>
      <Text style={styles.title}>Gallery</Text>
      <View style={styles.PhotoListBox}>
        <FlatList
          data={photos}
          contentContainerStyle={styles.container}
          renderItem={({ item }) => (
            <View style={styles.PhotoBox} key={item.id}>
              <Image style={styles.PhotoSmall} source={item.urls.small}></Image>
              <Text style={{ fontSize: 9, fontWeight: 650 }}>Name:</Text>
              <Text style={styles.PhotoName}>{item.id}</Text>
              <Text style={{ fontSize: 9, fontWeight: 650 }}>Author:</Text>
              <Text style={styles.PhotoAuthor}>{item.user.name}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  PhotoList: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    backgroundColor: "#F5F5F6",
  },
  PhotoListBox: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100vw",
    height: 400,
  },

  title: {
    color: "#212324",
    fontSize: 20,
    fontFamily: "arial",
    fontWeight: 600,
  },
  PhotoSmall: {
    margin: 5,
    borderRadius: 5,
    width: 50,
    height: 50,
  },
  PhotoBox: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 3,
    paddingBottom: 5,
    width: 110,
    height: 100,
    border: "2px double black",
    borderRadius: 10,
  },
  PhotoName: {
    fontSize: 10,
    fontWeight: 500,
  },
  PhotoAuthor: {
    fontSize: 10,
    fontWeight: 600,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
