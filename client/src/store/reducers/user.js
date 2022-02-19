import {userLoggedOut, userLoggedIn} from "../actions/user";
import { createReducer } from "@reduxjs/toolkit";


const initialState = {
  visitedUser:  {},
  currentUser: {
    userName:'',
    userRoles:[],
    isLoggedIn:false,
  }
}

const userReducer = createReducer (initialState, (builder => {
  builder
  .addCase(userLoggedIn, (state, action) => {
    state.userName = action.payload.userName;
    state.userRoles = action.payload.userRoles;
    state.isLoggedIn = action.payload.isLoggedIn;
  })
  .addCase(userLoggedOut, (state, action) => {
    state.userName = '';
    state.userRoles = [];
    state.isLoggedIn = false;
  })
}));

export default userReducer

