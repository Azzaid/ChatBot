import {createAction} from "@reduxjs/toolkit";
import {GLOBAL_APP_STATE} from "../actionTypes";

export const gotApiError = createAction(GLOBAL_APP_STATE.apiError);