import { createReducer } from "@reduxjs/toolkit";
import {gotApiError} from "../actions/globaAppStateActions";


const initialState = {
  APIerror:'',
}

const globalAppStateReducer = createReducer (initialState, (builder => {
  builder
  .addCase(gotApiError, (state, action) => {
    state.APIerror = action.payload;
  })
}));

export default globalAppStateReducer

