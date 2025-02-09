import { configureStore, createSlice } from "@reduxjs/toolkit";
import { annonces, regions, users, categories } from "../db";

const initialState = {
  annonces,
  regions,
  users,
  categories,
  user: null,
};

const AffairesSlice = createSlice({
  name: "affaires",
  initialState,
  reducers: {
    // => action.payload = {}
    insererAnnonce: (state, action) => {
      state.annonces.push(action.payload);
    },
    // => action.payload = {id: "3", newAnnonce: {}}
    modifierAnnonce: (state, action) => {
      const index = state.annonces.findIndex(
        (annonce) => annonce.id === action.payload.id
      );
      state.annonces[index] = action.payload.newAnnonce;
    },
    // => action.payload = "3"
    supprimerAnnonce: (state, action) => {
      const index = state.annonces.findIndex(
        (annonce) => annonce.id === action.payload
      );
      index !== -1 && state.annonces.splice(index, 1);
    },
    // => action.paylaod = {username: "", password: ""}
    seConnecter: (state, action) => {
      const isUser = state.users.find(
        (user) =>
          user.uname === action.payload.username &&
          user.upass === action.payload.password
      );

      state.user = isUser === undefined ? null : isUser;
    },
    seDeconnecter: (state) => {
      state.user = null;
    },
  },
});

const store = configureStore({
  reducer: {
    affaires: AffairesSlice.reducer,
  },
});

export default store;

export const {
  insererAnnonce,
  modifierAnnonce,
  supprimerAnnonce,
  seConnecter,
  seDeconnecter,
} = AffairesSlice.actions;
