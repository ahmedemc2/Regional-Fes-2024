import * as db from "../db";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { ...db, isLogged: true }; // => {annonces : [], categories: [], regions: [], users: [...], isLogged: false}

const sliceAffaire = createSlice({
  name: "affaires",
  initialState,
  reducers: {
    insereAnnonce: (state, action) => {
      state.annonces.push(action.payload);
    },
    modifierAnnonce: (state, action) => {
      const index = state.annonces.findIndex((id) => id === action.payload.id);
      state.annonces[index] = action.payload.annonce;
    },
    supprimerAnnonce: (state, action) => {
      const index = state.annonces.findIndex((id) => id === action.payload);
      state.annonces.splice(index, 1);
    },
    seConnecter: (state, action) => {
      const connecter = state.users.find(
        (user) =>
          user.uname === action.payload.userName &&
          user.upass === action.payload.password
      );
      state.isLogged = connecter === undefined ? false : true;
    },
    seDeconnecter: (state) => {
      state.isLogged = false;
    },
  },
});

const store = configureStore({
  reducer: {
    affaires: sliceAffaire.reducer,
  },
});

export const {
  seConnecter,
  seDeconnecter,
  supprimerAnnonce,
  insereAnnonce,
  modifierAnnonce,
} = sliceAffaire.actions;
export default store;
