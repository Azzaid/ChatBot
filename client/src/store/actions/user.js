import {createAction} from "@reduxjs/toolkit";
import {USER_ACTIONS} from "../actionTypes";

export const userLoggedIn = createAction(USER_ACTIONS.logIn);

export const userLoggedOut = createAction(USER_ACTIONS.logOut);