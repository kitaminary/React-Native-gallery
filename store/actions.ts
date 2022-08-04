import { createAction } from "@reduxjs/toolkit";
import { Photos } from "../types";

enum ActionTypes {
  SET_PHOTOS = "GET_PHOTOS",
  SET_FULL_PHOTO = "GET_FULL_PHOTO",
}

export const setPhotos = createAction<Photos>(ActionTypes.SET_PHOTOS);
export const setFullPhoto = createAction<string>(ActionTypes.SET_FULL_PHOTO);
