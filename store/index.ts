import { configureStore, createReducer } from "@reduxjs/toolkit";
import { Urls, User } from "../types";
import { setFullPhoto, setPhotos } from "./actions";

export interface State {
  photos: {
    id: string;
    user: User;
    urls: Urls;
    description: string | null;
  };
  fullPhoto: string | null;
}

export const initialState: State = {
  photos: {
    id: "",
    description: null,
    user: {
      id: "",
      name: "",
    },
    urls: {
      regular: "",
      small: "",
    },
  },
  fullPhoto: null,
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
