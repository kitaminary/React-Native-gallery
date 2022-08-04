import { configureStore, createReducer } from "@reduxjs/toolkit";
import { Urls, User } from "../types";
import { setFullPhoto, setPhotos } from "./actions";

export interface State {
  photos: {
    id: string;
    user: User;
    urls: Urls;
    width: number | null;
    height: number | null;
  };
  fullPhoto: string;
}

export const initialState: State = {
  photos: {
    id: "",
    width: null,
    height: null,
    user: {
      id: "",
      name: "",
    },
    urls: {
      full: "",
      small: "",
    },
  },
  fullPhoto: "",
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setPhotos, (state, action) => {
      state.photos = action.payload;
    })
    .addCase(setFullPhoto, (state, action) => {
      state.fullPhoto = action.payload;
    });
});

export const store = configureStore({ reducer });
