import {  configureStore } from "@reduxjs/toolkit";
import machineReducer from "./features/machines/machineSlice";

export default configureStore({
    reducer: {
        machine: machineReducer
    }
})